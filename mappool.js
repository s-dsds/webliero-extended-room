var mapCache = new Map();
var baseURL = "https://webliero.gitlab.io/webliero-maps";

var currentMap = 0;
var currentMapName = "";
var currentMapSettings = null;

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


function loadMapByName(name) {
    console.log(name);
    (async () => {        
        let data = await getMapData(getMapUrl(name));
        if (data == null) {
            notifyAdmins(`map ${name} could not be loaded`)
            window.WLROOM.restartGame();
            return;
        }
        let sett =  mapSettings.get(name);

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
            setModeBySettings(sett)
        } else {
            setDM()
        }
        window.WLROOM.restartGame();
    })();
}

function randomItem(arr,not) {
    if (not && not.length>0) {
        arr = arr.filter((i)=>!not.includes(i))
    }
    return arr[Math.floor(Math.random()*arr.length)];
}
function setModeBySettings(setting) {
    resetModes();
    const mode = randomItem(Object.keys(setting),["materials","palette"]); // random mode if there are multiples, filters out "non game mode" properties
    window.WLROOM.setSettings(gameSettings.get(mode));

    const s = randomItem(setting[mode]); // random setting if there are multiples
    switch (mode) {
        case "haz":
            window.WLROOM.setZone(...s)
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


COMMAND_REGISTRY.add("map", ["!map #mapname#: load lev map from gitlab webliero.gitlab.io"], (player, ...name) => {
    let n = name.join(" ").trim();
    if (n == "") {
        announce("map name is empty ",player, 0xFFF0000);
    }
    currentMapName = n;
    loadMapByName(currentMapName);
    return false;
}, true);


COMMAND_REGISTRY.add(["r", "restart"], ["!restart or !r: restarts game"], (player, ...name) => {
    loadMapByName(currentMapName);
    return false;
}, true);

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

COMMAND_REGISTRY.add("mapi", ["!mapi #index#: load map by pool index"], (player, idx) => {
    if (typeof idx=="undefined" || idx=="" || isNaN(idx) || idx>=mypool.length) {
        announce("wrong index, choose any index from 0 to "+(mypool.length-1),player, 0xFFF0000);
        return false;
    }
    currentMapName = mypool[idx];
    loadMapByName(currentMapName);
    return false;
}, true);

COMMAND_REGISTRY.add("clearcache", ["!clearcache: clears local map cache"], (player) => {
    mapCache = new Map();
    return false;
}, true);
