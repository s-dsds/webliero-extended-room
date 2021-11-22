window.WLROOM.onFlagPickup = function(worm){
    const name = worm.name.trim()==""?"noname":worm.name;
    announce(`${name} caught the flag!`,null, 0xFDCC59, "small");
    if (currentMapSettings && typeof currentMapSettings.onFlagPickup == "function") {
        currentMapSettings.onFlagPickup()
    }
}


function loadDTFsettings(s) {
    if (typeof s.startGame == "undefined") { // case with only 1 spawn point per "type" defined
        for (let k in s) {
            window.WLROOM.setSpawn(...s[k])
        }
    } else {
        currentMapSettings = s; 
        s.startGame()
    }    
}

function randomizeAllSpawns() {
    for (let k in s) {
        window.WLROOM.setSpawn(...randomItem(s[k]))
    }
}

class DTFSettings {
    constructor() {
    }
    #types = ["flag", "defense","attack"]
    #spawns = [[],[],[]]
    

    #addSpawn = (type, x, y) => {
        this.#spawns[type].push([x,y])
    }

    addFlagSpawn=(x,y)=> {this.#addSpawn(0,x,y); return this;}
    addDefenseSpawn=(x,y)=> {this.#addSpawn(1,x,y); return this;}
    addAttackSpawn=(x,y)=> {this.#addSpawn(2,x,y); return this;}

    startGame = () => {
        this.#randomizeAllSpawns()
        window.WLROOM.onPlayerKilled = (killed, killer) => {
            if ([1,2].includes(killed.team)) {
                window.WLROOM.setSpawn(killed.team, ...randomItem(this.#spawns[killed.team]))
            }
        }
    }
    endGame = () => {
        console.log("dtf clear")
        window.WLROOM.onPlayerKilled = null;
    }
    onFlagPickup = () => {
        this.#randomizeAllSpawns()
       // window.WLROOM.setSpawn(0, ...randomItem(this.#spawns[0]))
    }
    #randomizeAllSpawns= () => {
        for (let k in this.#spawns) {
            window.WLROOM.setSpawn(k, ...randomItem(this.#spawns[k]))
        }
    }

}
  