window.WLROOM.onFlagPickup = function(worm){
    const name = worm.name.trim()==""?"noname":worm.name;
    announce(`${name} caught the flag!`,null, 0xFDCC59, "small");
    if (currentMapSettings && typeof currentMapSettings.onFlagPickup == "function") {
        currentMapSettings.onFlagPickup(worm)
    }
}

window.WLROOM.onFlagScore = function(worm){
    if (currentMapSettings && typeof currentMapSettings.onFlagScore == "function") {
        currentMapSettings.onFlagScore(worm)
    }
}

window.WLROOM.onPlayerKilled = function(killed, killer){
    if (currentMapSettings && typeof currentMapSettings.onPlayerKilled == "function") {
        currentMapSettings.onPlayerKilled(killed, killer)
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
    constructor() {}
    
    #types = ["flag", "defense","attack"]
    #spawns = [[],[],[]]
    #order = false
    #orders = [-1,-1,-1]

    #addSpawn = (type, x, y) => {
        this.#spawns[type].push([x,y])
    }

    addFlagSpawn=(x,y)=> {this.#addSpawn(0,x,y); return this;}
    addDefenseSpawn=(x,y)=> {this.#addSpawn(1,x,y); return this;}
    addAttackSpawn=(x,y)=> {this.#addSpawn(2,x,y); return this;}
    setOrder = (order) => {this.#order=order; return this;}

    startGame = () => {
        this.onFlagPickup()
    }
    
    #nextSpawns = () => {
        for (let k in this.#orders) {
            this.#orders[k] = (this.#orders[k]>=1-this.#spawns[k].length)? 0 : this.#orders[k] + 1
            window.WLROOM.setSpawn(k, ...this.#spawns[k][this.#orders[k]])
        } 
    }
    endGame = () => {
        console.log("dtf clear")
    }
    onFlagPickup = () => {
        if (!this.#order) {
            this.#randomizeAllSpawns()
        } else {
            this.#nextSpawns()
        }
    }
    onPlayerKilled = (killed, killer) => {
        if (!this.#order) {            
            if ([1,2].includes(killed.team)) {
                window.WLROOM.setSpawn(killed.team, ...randomItem(this.#spawns[killed.team]))
            }            
        }
    } 
    #randomizeAllSpawns= () => {
        for (let k in this.#spawns) {
            window.WLROOM.setSpawn(k, ...randomItem(this.#spawns[k]))
        }
    }

}
  