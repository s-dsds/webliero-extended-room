class WLX_Turret {		
	
	//wobject,x,y,speed,dist,freq,team
	static create(o){
		let t = new WLX_Turret();
		for(let k in o) t[k]=o[k];		
		t.dist = (t.dist||500)*100;
		t.freq = t.freq||5;
		t.team = t.team||0;
		t.x = t.x||0;
		t.y = t.y||0;
		t.speed = t.speed||3;
		if(!WLX_Turret.list) WLX_Turret.list=[];
		WLX_Turret.list.push(t);
	}
	
	static clear(){
		WLX_Turret.list=null;
	}
	
	static update(){
		if(!WLX_Turret.list) return;
		if(!WLX_Turret.tick) WLX_Turret.tick=1;
		if(++WLX_Turret.tick%60==0){
			let players = window.WLROOM.getPlayerList();
			WLX_Turret.list.forEach(t=>{
				let closest = null;
				let clodist = 0;
				if(!t.tick) t.tick=1;				
				if(++t.tick<t.freq) return;				
				t.tick=0;
				players.forEach(p=>{ 
					if(p.team===t.team) return;
					let dist = (p.x - t.x) * (p.x - t.x) + (p.y - t.y) * (p.y - t.y);
					if(!clodist || dist<clodist){
						clodist = dist;
						closest = p;
					}
				});				
				if(clodist && clodist<t.dist){					
					let angle = Math.atan2(closest.y - t.y, closest.x - t.x);
					window.WLROOM.createObject({wobject:t.wobject,speed:t.speed,angle:angle,x:t.x,y:t.y});
				}
			});
		}
	}

}
class WLX_Directional_Fire {		
	
	//wobject,x,y,speed,dist,freq,team
	static create(o){
		let t = new WLX_Directional_Fire();
		for(let k in o) t[k]=o[k];		
		t.dist = (t.dist||500)*100;
		t.freq = t.freq||5;
		t.team = t.team||0;
		t.x = t.x||0;
		t.y = t.y||0;
		t.speed = t.speed||3;
		if(!WLX_Directional_Fire.list) WLX_Directional_Fire.list=[];
		WLX_Directional_Fire.list.push(t);
	}
	
	static clear(){
		WLX_Directional_Fire.list=null;
	}
	
	static update(){
		if(!WLX_Directional_Fire.list) return;
		if(!WLX_Directional_Fire.tick) WLX_Directional_Fire.tick=1;
		if(++WLX_Directional_Fire.tick%60==0){
			WLX_Directional_Fire.list.forEach(t=>{
				if(!t.tick) t.tick=1;				
				if(++t.tick<t.freq) return;				
				t.tick=0;								                
                window.WLROOM.createObject({wobject:t.wobject,speed:t.speed,angle:t.angle,x:t.x,y:t.y});
			});
		}
	}

}

class WLX_Laser {		
	
	//wobject,x,y,speed,dist,freq,team
	static create(o){
		let t = new WLX_Laser();
		for(let k in o) t[k]=o[k];		
		t.dist = (t.dist||500)*100;
		t.freq = t.freq||0;
		t.team = t.team||0;
		t.x = t.x||0;
		t.y = t.y||0;
		t.speed = t.speed||3;
		if(!WLX_Laser.list) WLX_Laser.list=[];
		WLX_Laser.list.push(t);
	}
	
	static clear(){
		WLX_Laser.list=null;
	}
	
	static update(){
		if(!WLX_Laser.list) return;
        WLX_Laser.list.forEach(t=>{								                
                window.WLROOM.createObject({wobject:t.wobject,speed:t.speed,angle:t.angle,x:t.x,y:t.y});
			});		
	}

}

class WLX_Teleport {		
		
	static create(o){
		let t = new WLX_Teleport();
		for(let k in o) t[k]=o[k];		
		t.dist = (t.dist||1)*100;		
		if(!WLX_Teleport.list) WLX_Teleport.list=[];
		WLX_Teleport.list.push(t);
	}
	
	static clear(){
		WLX_Teleport.list=null;
	}
	
	static update(){
		if(!WLX_Teleport.list) return;
		if(!WLX_Teleport.tick) WLX_Teleport.tick=1;
		if(++WLX_Teleport.tick%10==0){
			let players = window.WLROOM.getPlayerList();
			WLX_Teleport.list.forEach(t=>{				
				players.forEach(p=>{ 
					if(t.team && t.team!=p.team) return;
					let dist = (p.x - t.x) * (p.x - t.x) + (p.y - t.y) * (p.y - t.y);
					if(dist<t.dist){
						console.info('Teleporting worm',p.id,'because dist',dist);
						window.WLROOM.setPlayerPosition(p,t.toX,t.toY);
					}
				});
			});
		}
	}

}

class WLX_Platform {		
	
	static create(o){
		let t = new WLX_Platform();
		for(let k in o) t[k]=o[k];				
		if(!WLX_Platform.list) { WLX_Platform.list=[]; }
        if (t.id && t.steps && t.steps.length>0) {
            t.currentIdx = 0;
            t.maxIdx = t.steps.length-1
            t.ref = null;
        }

        o.wobject =  WLX_Platform.getWObject(o.form)
        o.type = 1
        window.WLROOM.createObject(o)

		WLX_Platform.list.push(t);
	}
	
	static clear(){
		WLX_Platform.list=null;
	}
    static getWObject(type) {
        switch (type) { 
            case "square":
                return 57;
            case "classic":
                return 59;            
            case "wobbly":
                return 60;
            case "small_wobbly":
                return 61;
            default:
                return type;
        }
    }
	static shouldGoNext(t, step) {              
        switch (step[1]) {
            case "lower_than": 
                return t.ref[step[0]]<=step[2];                
            case "more_than":
                return t.ref[step[0]]>=step[2];
        }

    }
	static update(){
		if(!WLX_Platform.list) { return; }
        WLX_Platform.list.forEach(t=>{				
            if(!t.id || !t.steps || !t.steps.length) { return; }
            if (!t.ref) {
                t.ref = window.WLROOM.getObject(t.id)
            }
            const step = t.steps[t.currentIdx]

            if (WLX_Platform.shouldGoNext(t, step)) {                                                        
                window.WLROOM.changeObjectDirection(t.id, step[3], step[4]??t.speed)                
                t.currentIdx = t.currentIdx==t.maxIdx?0:t.currentIdx+1
            }
            
        });
	
	}

}

class WLX {
	static update(){
		WLX_Turret.update();
		WLX_Teleport.update();
        WLX_Directional_Fire.update();    
        WLX_Laser.update(); 
        WLX_Platform.update();  
	}	
	static createTurret(o){
		WLX_Turret.create(o);
	}
	static createTeleport(o){
		WLX_Teleport.create(o);
	}
    static create(o) {
        switch (o.wlx) {
            case "turret":
                WLX_Turret.create(o);
                break;
            case "teleport":
                WLX_Teleport.create(o);
                break; 
            case "directionnal":
                WLX_Directional_Fire.create(o);
                break;
            case "laser":
                WLX_Laser.create(o);
                break;
            case "platform":
                WLX_Platform.create(o)
                break;
        }
    }
    static clear() {
        WLX_Turret.clear();
        WLX_Teleport.clear();
        WLX_Directional_Fire.clear();
        WLX_Laser.clear();
        WLX_Platform.clear();
    }
}

// sample:
// WLX.createTurret({wobject:15,x:250,y:200,freq:2})
// WLX.createTurret({wobject:30,x:150,y:100,freq:3,dist:1000,speed:5})
// WLX.createTeleport({x:50,y:50,dist:2,toX:200,toY:100})