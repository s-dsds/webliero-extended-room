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

class PredSettings {
    constructor() {}
    static ORDER = {
        TRUE: true,
        LOOP_LAST_FOUR: "loop_last_four"
    } 
    #types = ["lemon", "worm"]
    #spawns = [[],[]]
    #order = false
    #orders = [-1,-1]

    #addSpawn = (type, x, y) => {
        this.#spawns[type].push([x,y])
    }

    addLemonSpawn=(x,y)=> {this.#addSpawn(0,x,y); return this;}
    addWormSpawn=(x,y)=> {this.#addSpawn(1,x,y); return this;}
    setOrder = (order) => {this.#order=order; return this;}

    startGame = () => {
        console.log("starting pred")
        this.#orders = [-1,-1]
        this.#randomizeLemonSpawn()
        this.#nextSpawns()        
    }
    
    #nextSpawns = () => {
        if (!this.#order) {
            this.#randomizeWormSpawn()
        } else {
            let k = 1;
            let last_idx = this.#spawns[k].length-1
            var next = 0
            if (this.#order==PredSettings.ORDER.LOOP_LAST_FOUR && (last_idx==this.#orders[k])) {
                this.#orders[k] = last_idx-4
            } else {
                this.#orders[k] = (this.#orders[k]>=last_idx)? 0 : this.#orders[k] + 1
            }            
            window.WLROOM.setSpawn(k, ...this.#spawns[k][this.#orders[k]])
        }
    }
    endGame = () => {
        console.log("pred clear")
    }
    onPlayerKilled = (killed, killer) => {
       this.#nextSpawns()
    } 
    #randomizeLemonSpawn = () => {
        window.WLROOM.setSpawn(0, ...randomItem(this.#spawns[0]))
    }
    #randomizeWormSpawn = () => {
        if (this.#spawns[1].length) {
            window.WLROOM.setSpawn(1, ...randomItem(this.#spawns[1]))
        }        
    }

}