var mapSettings = new Map();
// API .setZone(x,y,x2,y2) (et .setZone(-1) pour clear) :
// micro-arena.png: 411,331,488,363
// eye-arena.png: 395,206,505,316
// chipper-arena.png: 392,233,484,345
mapSettings.set("wgetch/arena/micro-arena.png", {
    haz: [[411,331,488,363]],
})

mapSettings.set("wgetch/arena/eye-arena.png", {
    haz: [[395,206,505,316]],
})

mapSettings.set("wgetch/arena/chipper-arena.png", {
    haz: [[392,233,484,345]],
})
mapSettings.set("wgetch/zone/igloo-zone.png", {
    haz: [[512,293,598,329]],
})
mapSettings.set("wgetch/arena/snek-arena.png", 
    {
        dtf: [
            [
                [0,677,309],
                [1,659,238],
                [2,214, 157],
            ],
            [
                [0,197,164],
                [1,242,92],
                [2,645, 317],
              ]
        ]
    }
)
mapSettings.set("wgetch/flag/bunker-flag.png", 
    {
        dtf: [
            // spawn flag left
            (new DTFSettings())
            .addFlagSpawn(784, 236)
            .addFlagSpawn(609, 340)
            .addFlagSpawn(711, 350)
            .addFlagSpawn(711, 315)
            .addFlagSpawn(259, 168)   
            .addFlagSpawn(359, 168)
            .addFlagSpawn(359, 231)
            .addFlagSpawn(259, 231)
            .addDefenseSpawn(784, 240)        
            .addAttackSpawn(1219, 294)
            .addAttackSpawn(1219, 376)
            .addAttackSpawn(1080, 256)
        ]
})
mapSettings.set("wgetch/flag/passage-flag.png", 
    {
        dtf: [
            // spawn flag left
            (new DTFSettings())
            .addFlagSpawn(236, 144)
            .addFlagSpawn(418, 193)  
            .addFlagSpawn(330, 194)  
            .addDefenseSpawn(418, 193)        
            .addDefenseSpawn(569, 176)        

            .addAttackSpawn(812, 152)
            .addAttackSpawn(812, 236)
            .addAttackSpawn(713, 179)
            .addAttackSpawn(713, 200)
            .addAttackSpawn(608, 175)


        ]
})

mapSettings.set("wgetch/flag/proton-flag.png", 
    {
        dtf: [
            // spawn flag left
            (new DTFSettings())
                .addFlagSpawn(269, 312)   
                .addFlagSpawn(273, 500)

                .addDefenseSpawn(336, 155)
                .addDefenseSpawn(302, 422)
                .addDefenseSpawn(336, 666)
                .addDefenseSpawn(269, 312)
                .addDefenseSpawn(273, 500)

                .addAttackSpawn(1206, 159)
                .addAttackSpawn(1206, 672)
                .addAttackSpawn(1120, 410),
            // spawn flag right
            (new DTFSettings())
                .addFlagSpawn(985,258)   
                .addFlagSpawn(1004,324)
                .addFlagSpawn(1077,312)
                .addFlagSpawn(1018,519)
                .addFlagSpawn(1074,535)
                .addFlagSpawn(1006,581)

                .addDefenseSpawn(917,616)
                .addDefenseSpawn(928,234)
                .addDefenseSpawn(991,421)
                .addDefenseSpawn(1072,421)

                .addAttackSpawn(244, 228)
                .addAttackSpawn(244, 672)
                .addAttackSpawn(265, 325) 
                .addAttackSpawn(265, 511) 
                .addAttackSpawn(265, 420) 
                .addAttackSpawn(240, 666) 
        ]
    }
)
mapSettings.set("dsds/fortified_castles.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(121, 194)   
            //.addFlagSpawn(273, 500)

            .addGreenSpawn(370, 189)
            // .addDefenseSpawn(302, 422)
            // .addDefenseSpawn(336, 666)
            // .addDefenseSpawn(269, 312)
            // .addDefenseSpawn(273, 500)

            .addBlueSpawn(800, 222)
            .addAttackSpawn(1146, 202)
            //.addAttackSpawn(1120, 410),
        ]
})
mapSettings.set("dsds/spaceshipint.png", 
    {
        dtf:[
        [
            [0,416,447],
            [1,590,450],
            [2,1345, 350],
        ],
        [
            [0,1051,163],
            [1,1106,318],
            [2,447, 444],
        ],
     ] 
    }
)

mapSettings.set("dsds/frog_cave_cave_only.png", 
    {
        dtf:[
        [
            [0,113,29],
            [1,109,176],
            [2,1157, 200],
        ],
        [
            [0,1172,221],
            [1,1022,353],
            [2,113,29],
        ],
     ] 
    }
)

mapSettings.set("hellhole/navarona.lev", 
    {
        dtf:[
        [
            [0,10,246],
            [1,86,229],
            [2,472, 36],
        ],
        [
            [0,335,200],
            [1,335,138],
            [2,56,193],
        ],
     ] 
    }
)

mapSettings.set("kangaroo/jetmen1+bunnyhop.png", 
    {
        dtf:[
        [
            [0,651,383],
            [1,550,479],
            [2,124,102],
        ],
        [
            [0,140,106],
            [1,305,168],
            [2,668,382],
        ],
     ] 
    }
)

//

mapSettings.set("PiPitek/SHAARK4.png", 
    {
        dtf:[
        [
            [0,36,173],
            [1,39,144],
            [2,486,150],
        ],
        [
            [0,486,150],
            [1,447,114],
            [2,59,337],
        ],
     ] 
    }
)


mapSettings.set("dsds/weblieroZ/pilaf.png", 
    {
        dtf:[
        [
            [0,920,175],
            [1,748,145],
            [2,62,302],
        ],
        [
            [0,288,80],
            [1,198,140],
            [2,894,456],
        ],
     ] 
    }
)


mapSettings.set("piebaron/fArtefact_00.png", 
    {
        dtf:[
        [
            [0,316,11],
            [1,257,187],
            [2,338,1410],
        ]
     ] 
    }
)


mapSettings.set("qmaps/qmap20.png", 
    {
        dtf:[
        [
            [0,94,373],
            [1,204,343],
            [2,613,41],
        ]
     ] 
    }
)

mapSettings.set("qmaps/qmap15.png", 
    {
        dtf:[
        [
            [0,171,146],
            [1,159,327],
            [2,686,256],
        ]
     ] 
    }
)
mapSettings.set("wgetch/flag/electron-flag.png", 
    {
        dtf:[
        [
            [0,830,345],
            [1,870,345],
            [2,340,345],
        ],
        [
            [0,340,345],
            [1,255,284],           
            [2,830,345],
        ]
     ] 
    }
)

var mypool = Array.from(mapSettings.keys());
shuffleArray(mypool)