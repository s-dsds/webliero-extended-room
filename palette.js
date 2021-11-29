var currentPal = "default"

function loadPalette(name, data) {
    if (!data) {
        if (!palettes.has(name)) {
            loadPalette("default")
            return
        }
        data = palettes.get(name)
    }
    if (name!=currentPal) {        
        window.WLROOM.setPalette(data)
        currentPal = name        
    }    
}

async function getPaletteDataFromImageData(name, data) {
    if (palettes.has(name)) {
        return palettes.get(name)
    }
    
    let ret = await __getPaletteFromPng([...(new Uint8Array(data))])
    console.log("palette loaded", name, JSON.stringify(ret))
    const arr = new Uint8Array(ret)
    palettes.set(name, arr)
    return arr
}

// function initDefaultPalette() {
//     if (!palettes.has("default")) {

//     }
// }
// "test":  RangeError: Offset is outside the bounds of the DataView
//     at DataView.getUint8 (<anonymous>)
//     at D.o (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:751:27)
//     at D.Mh (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:808:33)
//     at Z.B (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:7233:27)
//     at Z.normalize (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:7276:15)
//     at Function.ba (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:5168:21)
//     at Object.setPalette (https://www.webliero.com/1XxDKEyx/__cache_static__/g/headless-min.js:2231:11)
//     at loadPalette (__puppeteer_evaluation_script__:10:23)
//     at __puppeteer_evaluation_script__:61:13
