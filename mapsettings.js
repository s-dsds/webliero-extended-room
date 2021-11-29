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
// mapSettings.set("wgetch/arena/snek-arena.png#ctf", 
//     {
//         ctf: [
//             (new CTFSettings())
//                 .addFlagGreenSpawn(677, 309)   

//                 .addGreenSpawn(659, 238)

//                 .addBlueSpawn(242, 92)
//                 .addFlagBlueSpawn(197, 164)
//             ],
//         materials: defaultMaterials.map(undefToDirt)        
//     }
// )
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
        ],
        ctf: [
            // spawn flag left
            (new CTFSettings())
                .addFlagGreenSpawn(258, 169)   
    
                .addGreenSpawn(711, 315)

                .addBlueSpawn(915, 360)
                .addFlagBlueSpawn(1213, 297)
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
        ],
        ctf: [
            (new CTFSettings())
                .addFlagGreenSpawn(269, 312)   
                .addFlagGreenSpawn(273, 500)

                .addGreenSpawn(336, 155)
                .addGreenSpawn(302, 422)                
                .addGreenSpawn(269, 312)
                .addGreenSpawn(273, 500)

           
                .addFlagBlueSpawn(985,258)   
                .addFlagBlueSpawn(1074,535)


                .addBlueSpawn(917,616)
                .addBlueSpawn(928,234)
                .addBlueSpawn(991,421)
                .addBlueSpawn(1072,421)
        ],
        
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
            .addFlagBlueSpawn(1146, 202)
            //.addAttackSpawn(1120, 410),
        ]
})
mapSettings.set("dsds/space_station.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(337, 224)   
            //.addFlagSpawn(273, 500)

            .addGreenSpawn(546, 221)
            // .addDefenseSpawn(302, 422)
            // .addDefenseSpawn(336, 666)
            // .addDefenseSpawn(269, 312)
            // .addDefenseSpawn(273, 500)

            .addBlueSpawn(897, 924)
            .addFlagBlueSpawn(1183, 981)
            //.addAttackSpawn(1120, 410),
        ],
    palette: true,
    materials: defaultMaterials.map(noUndef)
})
mapSettings.set("dsds/weblieroZ/kameshouseint.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(684, 262)   
            .addFlagGreenSpawn(606, 234)
            .addFlagGreenSpawn(377, 303)

            .addGreenSpawn(318, 230)
            .addGreenSpawn(398, 294)
            .addGreenSpawn(606, 234)


            .addBlueSpawn(723, 704)
            .addBlueSpawn(660, 640)
            .addBlueSpawn(634, 686)

            .addFlagBlueSpawn(723,704)            
            .addFlagBlueSpawn(660, 640)     
            .addFlagBlueSpawn(692, 695)  
        ],
    palette: true,
    materials: defaultMaterials.map(noUndef)
})
mapSettings.set("wgetch/labs/jambon.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(90, 500)   
            //.addFlagSpawn(273, 500)

            .addGreenSpawn(42, 388)
            // .addDefenseSpawn(302, 422)
            // .addDefenseSpawn(336, 666)
            // .addDefenseSpawn(269, 312)
            // .addDefenseSpawn(273, 500)

            .addBlueSpawn(858, 388)
            .addFlagBlueSpawn(810, 500)
            //.addAttackSpawn(1120, 410),
        ],
    materials: defaultMaterials.map(noUndef),
    palette: new Uint8Array([0,0,0,108,56,0,108,80,0,164,148,128,0,144,0,247,128,0,252,84,84,168,168,168,85,85,85,84,84,252,255,161,4,255,235,88,120,64,8,128,68,8,136,72,12,144,80,16,152,84,20,160,88,24,172,96,28,76,76,76,84,84,84,92,92,92,100,100,100,109,109,109,116,116,116,125,125,125,132,132,132,220,125,153,148,148,148,157,157,157,56,56,136,81,81,193,105,105,249,145,145,245,185,185,245,110,110,110,145,145,145,181,181,181,217,217,217,32,96,32,45,133,45,62,174,62,255,150,76,255,178,142,111,111,111,146,146,146,182,182,182,218,218,218,168,168,248,208,208,244,255,226,219,60,80,0,88,112,0,116,144,0,148,176,0,120,72,52,157,121,89,197,169,125,237,217,161,235,92,167,255,132,199,255,174,212,200,100,0,160,80,0,72,72,72,108,108,108,147,147,147,180,180,180,216,216,216,253,253,253,255,177,210,144,144,144,152,60,0,180,100,0,208,140,0,236,180,0,168,84,0,217,1,1,189,1,1,165,1,1,200,0,0,172,0,0,218,2,2,190,2,2,166,2,2,255,0,251,234,0,222,207,0,196,82,82,194,106,106,250,146,146,246,80,80,192,107,107,251,147,147,247,149,137,1,136,124,0,124,112,0,116,100,0,132,92,40,160,132,72,188,176,104,216,220,136,248,248,188,244,244,252,253,1,1,248,24,4,255,0,251,255,0,244,248,108,20,248,136,24,248,164,32,248,192,36,248,220,40,245,233,61,244,244,80,244,244,112,244,244,148,240,240,180,240,240,212,255,226,219,46,134,46,63,175,63,114,190,114,47,135,47,64,176,64,115,191,115,255,35,255,244,124,124,255,172,246,104,104,248,148,148,248,184,184,244,144,144,244,65,177,65,116,192,116,164,212,164,112,188,112,148,136,0,136,116,0,124,96,0,112,76,0,100,56,0,89,41,1,137,108,151,144,144,192,188,188,248,200,200,244,220,220,244,40,112,40,44,132,44,52,152,52,60,172,60,252,200,200,245,165,165,248,92,92,245,77,77,244,60,60,244,76,76,244,92,92,244,164,164,92,119,102,89,128,103,80,136,100,72,150,100,11,21,5,28,64,42,29,59,40,22,37,13,252,252,252,221,221,221,189,189,189,158,158,158,124,124,124,156,156,156,188,188,188,220,220,220,108,76,44,124,84,48,140,96,56,156,108,64,172,120,72,0,0,0,40,36,8,80,76,20,120,116,28,160,152,40,200,192,48,244,232,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,2,2,252,36,0,252,72,0,252,108,0,252,144,0,252,180,0,252,216,0,252,252,0,168,240,0,84,232,0,0,224,0,252,0,0,232,4,20,249,0,255,196,20,68,180,24,88,160,32,112,144,40,136,124,44,156,108,52,180,88,60,204,72,68,228])
})
mapSettings.set("dsds/frog.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(544, 83)   
            //.addFlagSpawn(273, 500)

            .addGreenSpawn(487, 51)
            // .addDefenseSpawn(302, 422)
            // .addDefenseSpawn(336, 666)
            // .addDefenseSpawn(269, 312)
            // .addDefenseSpawn(273, 500)

            .addBlueSpawn(553, 972)
            .addFlagBlueSpawn(510, 1016)
            //.addAttackSpawn(1120, 410),
        ],
    materials: defaultMaterials.map(noUndef)
})
mapSettings.set("kangaroo/JDM.png",{
    ctf: [
        // spawn flag left
        (new CTFSettings())
            .addFlagGreenSpawn(113, 118)   
            //.addFlagSpawn(273, 500)

            .addGreenSpawn(159, 72)
            // .addDefenseSpawn(302, 422)
            // .addDefenseSpawn(336, 666)
            // .addDefenseSpawn(269, 312)
            // .addDefenseSpawn(273, 500)

            .addBlueSpawn(829, 487)
            .addFlagBlueSpawn(770, 493)
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
     ],
     ctf: [
            (new CTFSettings())
                .addFlagGreenSpawn(651, 383)   

                .addGreenSpawn(550, 479)

                .addBlueSpawn(305, 168)
                .addFlagBlueSpawn(140, 106)
            ],
        materials: defaultMaterials.map(noUndef)
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
     ],
     materials: defaultMaterials.map(noUndef)
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