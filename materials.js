var currentMat = "default";

function loadMaterials(name, data) {
    if (!data) {
        loadMaterials("default", defaultMaterials)
        return
    }
    if (name!=currentMat) {    
        console.log(JSON.stringify(data))    
        window.WLROOM.setMaterials(data)
        currentMat = name        
    }    
}