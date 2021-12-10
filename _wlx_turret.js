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

class WLX {
	static update(){
		WLX_Turret.update();
		WLX_Teleport.update();
        WLX_Directional_Fire.update();        
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
        }
    }
    static clear() {
        WLX_Turret.clear();
        WLX_Teleport.clear();
        WLX_Directional_Fire.clear();
    }
}

// sample:
// WLX.createTurret({wobject:15,x:250,y:200,freq:2})
// WLX.createTurret({wobject:30,x:150,y:100,freq:3,dist:1000,speed:5})
// WLX.createTeleport({x:50,y:50,dist:2,toX:200,toY:100})