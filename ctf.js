
function loadCTFsettings(s) {
        currentMapSettings = s; 
        s.startGame()   
}

class CTFSettings {
    constructor() {
    }
    #types = ["flag green", "defense","attack","flag blue"]
    #spawns = [[],[],[],[]]
    

    #addSpawn = (type, x, y) => {
        this.#spawns[type].push([x,y])
    }

    addFlagGreenSpawn=(x,y)=> {this.#addSpawn(0,x,y); return this;}
    addGreenSpawn=(x,y)=> {this.#addSpawn(1,x,y); return this;}
    addBlueSpawn=(x,y)=> {this.#addSpawn(2,x,y); return this;}
    addFlagBlueSpawn=(x,y)=> {this.#addSpawn(3,x,y); return this;}

    startGame = () => {
        this.#randomizeAllSpawns()
        window.WLROOM.onPlayerKilled = (killed, killer) => {
            if ([1,2].includes(killed.team)) {
                window.WLROOM.setSpawn(killed.team, ...randomItem(this.#spawns[killed.team]))
            }
        }
    }
    endGame = () => {
        console.log("ctf clear")
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
  