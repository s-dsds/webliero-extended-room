var currentMat = "default";

function loadMaterials(name, data) {
    if (!data) {
        loadMaterials("default", defaultMaterials)
        return
    }
    if (name!=currentMat) {        
        window.WLROOM.setMaterials(data)
        currentMat = name        
    }    
}