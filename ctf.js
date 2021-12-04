
function loadCTFsettings(s) {
        currentMapSettings = s; 
        console.log(typeof s)
        s.startGame()   
}

class CTFSettings {
    constructor() {}
    static ORDER = {
        TRUE: true,
        RANDOM_SAME_INDEX: "random_same_index"
    } 
    #types = ["flag green", "defense","attack","flag blue"]
    #flagForTeam = {1:0,2:3}
    #spawns = [[],[],[],[]]
    #order = false
    #orders = [-1,-1,-1,-1]

    #addSpawn = (type, x, y) => {
        this.#spawns[type].push([x,y])
    }

    addFlagGreenSpawn=(x,y)=> {this.#addSpawn(0,x,y); return this;}
    addGreenSpawn=(x,y)=> {this.#addSpawn(1,x,y); return this;}
    addBlueSpawn=(x,y)=> {this.#addSpawn(2,x,y); return this;}
    addFlagBlueSpawn=(x,y)=> {this.#addSpawn(3,x,y); return this;}
    setOrder = (order) => {this.#order=order; return this;}

    startGame = () => {
        console.log("starting ctf")
        this.onFlagScore()
    }
    endGame = () => {
        console.log("ctf clear")
    }
    

    onFlagScore = () => {
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

    #nextSpawns = () => {
        switch (this.#order) {
            case true:
                this.#nextSpawnsForward()
                break
            case CTFSettings.ORDER.RANDOM_SAME_INDEX:
                this.#nextSpawnsRandomSameIdx()
                break
        }
    }

    #nextSpawnsForward = () => {
        for (let k in this.#orders) {          
            this.#orders[k] = (this.#orders[k]>=this.#spawns[k].length-1)? 0 : this.#orders[k] + 1            
            window.WLROOM.setSpawn(k, ...this.#spawns[k][this.#orders[k]])
        } 
    }
    #nextSpawnsRandomSameIdx = () => {
        [1,2].forEach((k) => {
            let idx = randomIdx(this.#spawns[k])            
            window.WLROOM.setSpawn(k, ...this.#spawns[k][idx])
            window.WLROOM.setSpawn(this.#flagForTeam[k], ...this.#spawns[k][idx])
        })
    }
    #randomizeAllSpawns= () => {
        for (let k in this.#spawns) {
            window.WLROOM.setSpawn(k, ...randomItem(this.#spawns[k]))
        }
    }

}
  