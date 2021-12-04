var mapCache = new Map();
var baseURL = "https://webliero.gitlab.io/webliero-maps";

var currentMap = 0;
var currentMapName = "";
var currentMapSettings = null;

var loadMe = null;

function getMapUrl(name) {
    if (name.substring(0,8)=='https://') {
        return name;
    }
    return baseURL + '/' +  name;
}

function loadPool(name) {
	(async () => {
	    mypool = await (await fetch(baseURL + '/' +  name)).json();
	})();
}

async function getMapData(mapUrl) {
    let obj = mapCache.get(mapUrl)
    if (obj) {
      return obj;
    }
    try {
        obj = await (await fetch(mapUrl)).arrayBuffer();        
    }catch(e) {
        return null;
    }

    
    mapCache.set(mapUrl, obj)
    return obj;
}

function resolveNextMap() {
    currentMap=currentMap+1<mypool.length?currentMap+1:0;
    currentMapName = mypool[currentMap];
}

function next() {
    resolveNextMap();

    loadMapByName(currentMapName);
}


function loadMapByName(name, mode) {
    console.log(name, mode);
    (async () => {        
        let data = await getMapData(getMapUrl(name));
        if (data == null) {
            notifyAdmins(`map ${name} could not be loaded`)
            window.WLROOM.restartGame();
            return;
        }
        let sett =  mapSettings.get(name);
        setExpand(sett.expand || (sett.expandable && shouldExpand()));
        if (sett) {
            loadPalette(name, (sett.palette===true)?await getPaletteDataFromImageData(name, data):sett.palette)          
            loadMaterials(name, sett.materials)
        } else {
            loadPalette()
            loadMaterials()
        }

        if (name.split('#').shift().split('.').pop()=="png") {    
            window.WLROOM.loadPNGLevel(name, data);
        } else {
            window.WLROOM.loadLev(name, data);
        }
        if (sett) {
            setModeBySettings(sett, mode)
        } else {
            setDM()
        }
        
        if (sett.objects) {
            loadMe = sett.objects
        }
    
        window.WLROOM.restartGame()
    })();
}
// l(a) { // pack message
//     a.g(1); // message version
//     a.g(this.act || 0); // action (create/edit)
//     a.g(this.type || 0); // wobjects
//     a.g(this.id || 0); // custom particle id
//     a.g(this.owner===undefined?-1:this.owner); // worm owner id
//     a.g(this.weapon || 0); // weapon id for definition
//     a.g(this.angle || 0); // angle
//     a.g(this.speed || 0); // speed
//     a.g(this.x || 0); // x
//     a.g(this.y || 0); // y 
//     a.g(this.vx || 0); // velocity x
//     a.g(this.vy || 0); // velocity y	
function createObjects(objects) {
    if (objects) {
        console.log("create objects")
        objects.forEach(createObject)
        
    }
}

function createObject(obj) {  
    console.log("create ", JSON.stringify({type:1,wobject:getWObject(obj.type), x:obj.x, y:obj.y, vx: obj.vx || 0, vy: obj.vy || 0, speed: obj.speed || 0})   )   
    window.WLROOM.createObject({type:1,wobject:getWObject(obj.type), x:obj.x, y:obj.y, vx: obj.vx || 0, vy: obj.vy || 0, speed: obj.speed || 0})
}

function getWObject(type) {
    switch (type) { 
        case "lava":
            return 56;
        case "platform":
            return 57;
    }
}
function setExpand(expand) {
    let sets = window.WLROOM.getSettings();
    if (sets.expandLevel!=expand) {
        sets.expandLevel=expand;
        window.WLROOM.setSettings(sets);
    }
}
function shouldExpand() {
    if (autoExpand==-1) {
        return false;
    }
    return (getActivePlayers().length>=autoExpand);
}

function randomItem(arr,not) {
    if (not && not.length>0) {
        arr = arr.filter((i)=>!not.includes(i))
    }
    return arr[randomIdx(arr)];
}

function randomIdx(arr) {
    return Math.floor(Math.random()*arr.length);
}

function setModeBySettings(setting, mode) {
    resetModes();
    if (!mode || !setting[mode]) {
        mode = randomItem(Object.keys(setting),["materials","palette","colorAnim","expandable", "expand", "objects"]); // random mode if there are multiples, filters out "non game mode" properties
    }    
    console.log("loading mode "+mode)
    window.WLROOM.setSettings(gameSettings.get(mode));

    const s = randomItem(setting[mode]); // random setting if there are multiples
    switch (mode) {
        case "haz":
            window.WLROOM.setZone(...s)
            break;
        case "pred":
            console.log("pred", ...s)
            window.WLROOM.setSpawn(0,...s)
            break;
        case "dtf":
            loadDTFsettings(s);
            break;
        case "ctf":
            loadCTFsettings(s);
            break;
        default:
            break;
    }
}
function resetModes() {
    window.WLROOM.setZone(-1);
    window.WLROOM.setSpawn(-1);
    if (currentMapSettings && typeof currentMapSettings.endGame == "function") {
        currentMapSettings.endGame()
    }
    currentMapSettings = null;
}
function setDM() {
    resetModes();
    window.WLROOM.setSettings(gameSettings.get("dm"));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffle() {
    shuffleArray(pool);
}

function hasGameMode(name, mode) {
    let sett =  mapSettings.get(name)
    if (!sett) {
        return false
    }
    return typeof sett[mode] != undefined && sett[mode]!==false
}

COMMAND_REGISTRY.add("map", ["!map #mapname# #gamemode#: load lev map from gitlab webliero.gitlab.io"], (player, name, gamemode) => {    
    if (!name) {
        announce("map name is empty ",player, 0xFFF0000);
    }
    if (gamemode && !hasGameMode(name, gamemode)) {
        announce("this game mode isn't set for this map yet sorry",player, 0xFFF0000);
        return false;
    }
    currentMapName = name;
    loadMapByName(currentMapName);
    return false;
}, true);


COMMAND_REGISTRY.add(["r", "restart"], ["!restart or !r: restarts game"], (player, ...name) => {
    loadMapByName(currentMapName);
    return false;
}, true);

/*
COMMAND_REGISTRY.add("addmap", ["!addmap #mapname#: adds lev map from gitlab webliero.gitlab.io to pool"], (player, ...name) => {
    let n = name.join(" ").trim();
    if (n == "") {
        announce("map name is empty ",player, 0xFFF0000);
    }
    
    mypool.push(n);
    announce(`${n} added to the pool`,player, 0xFFF0000);
    return false;
}, true);

COMMAND_REGISTRY.add("delmap", ["!delmap #mapname#: removes lev map from gitlab webliero.gitlab.io from pool"], (player, ...name) => {
    let n = name.join(" ").trim();
    if (n == "") {
        announce("map name is empty ", player, 0xFFF0000);
    }
    const idx = mypool.indexOf(n);
    if (idx == -1) {
        announce(`${n} was not found in the pool`, player, 0xFFF0000);
        return false;
    }
    mypool.splice(idx, 1);
    announce(`${n} removed from the pool`, player, 0xFFF0000);
    return false;
}, true);
*/

COMMAND_REGISTRY.add("mapi", ["!mapi #index# #gamemode#: load map by pool index"], (player, idx, gamemode) => {    
    if (typeof idx=="undefined" || idx=="" || isNaN(idx) || idx>=mypool.length) {
        announce("wrong index, choose any index from 0 to "+(mypool.length-1),player, 0xFFF0000);
        mypoolIdx.forEach((mname, midx) => {
            announce(`!mapi ${midx} ${mname}`, player, 0xA7CCC4, "smaller");
        });
        return false;
    }
    const name = mypoolIdx[idx]

    if (gamemode && !hasGameMode(name)) {
        announce("this game mode isn't set for this map yet sorry",player, 0xFFF0000);
        return false;
    }
    currentMapName = name
    loadMapByName(currentMapName, gamemode);
    return false;
}, true);

COMMAND_REGISTRY.add("clearcache", ["!clearcache: clears local map cache"], (player) => {
    mapCache = new Map();
    return false;
}, true);
