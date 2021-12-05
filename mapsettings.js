var mapSettings = new Map();
// API .setZone(x,y,x2,y2) (et .setZone(-1) pour clear) :
// micro-arena.png: 411,331,488,363
// eye-arena.png: 395,206,505,316
// chipper-arena.png: 392,233,484,345

// mapSettings.set("https://127.0.0.1/maps/test_dirt.png", {
//     pred: [[504,109]],
//     layers: {
//         clean_background: "https://127.0.0.1/maps/test_sub.png"
//     }
// })

// mapSettings.set("https://127.0.0.1/maps/test_dirt.png#t2", {
//     pred: [[504,109]],
//     layers: {
//         clean_background: true
//     }
// })


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
mapSettings.set("wgetch/zone/inter-zone.png", {
    haz: [[497,255,553,288]],
})
mapSettings.set("wgetch/zone/light-zone.png", {
    haz: [[269,209,348,255]],
    objects: [
        {type:"lava", x:229, y:334},
        {type:"lava", x:242, y:334},
        {type:"lava", x:257, y:334},
        {type:"lava", x:271, y:334},
        {type:"lava", x:287, y:334},
        {type:"lava", x:291, y:334},
        {type:"lava", x:307, y:334},
        {type:"lava", x:320, y:334},
        {type:"lava", x:334, y:334},
        {type:"lava", x:350, y:334},
        {type:"lava", x:361, y:334},
        {type:"lava", x:373, y:334},
        {type:"lava", x:388, y:334},
       // {type:"platform", x:245, y:491},

    ],
    materials: defaultMaterials.map(noUndef)
})
mapSettings.set("pilaf/hole.png", {
    pred: [[341,256]],
    objects: [
        {type:"lava", x:174, y:616},
        {type:"lava", x:186, y:622},
        {type:"lava", x:195, y:628},
        {type:"lava", x:208, y:635},
        {type:"lava", x:222, y:645},
        {type:"lava", x:237, y:652},
        {type:"lava", x:252, y:658},
        {type:"lava", x:270, y:665},
        {type:"lava", x:287, y:668},
        {type:"lava", x:299, y:672},
        {type:"lava", x:316, y:670},
        {type:"lava", x:330, y:672},
        {type:"lava", x:345, y:668},
        {type:"lava", x:360, y:670},
        {type:"lava", x:380, y:666},
        {type:"lava", x:395, y:670},
        {type:"lava", x:411, y:666},
        {type:"lava", x:425, y:663},
        {type:"lava", x:435, y:659},
        {type:"lava", x:450, y:655},
        {type:"lava", x:467, y:650},
        {type:"lava", x:480, y:640},
        {type:"lava", x:495, y:639},
        {type:"lava", x:515, y:629},               
        {type:"lava", x:536, y:621},
        {type:"lava", x:542, y:616},
    ],
    materials: defaultMaterials.map(replaceMatIndexBy(MATERIAL.ROCK,0, 155, 141,142,182,183))
})
mapSettings.set("piebaron/PieBaron_BR_pokolTribut_v0.lev", {
    pred: [[504,109]],
    expand:true
})
mapSettings.set("pilaf/g3a.png", {
    pred: [[200,200]],
})
mapSettings.set("dsds/squigglyswiggly/squig_fourth.png", {
    pred: [[238,58]],
    materials: defaultMaterials.map(noUndef)
})
mapSettings.set("pilaf/axiom.lev", {
    pred: [[504,119]],
    expand:true
})

mapSettings.set("piebaron/fArtefact_00.png", 
    {
        pred:[
            (new PredSettings())
            .addLemonSpawn(256,187)
            .addWormSpawn(318, 1870)
            .addWormSpawn(117, 1756)
            .addWormSpawn(340, 1667)
            .addWormSpawn(174, 1676)
            .addWormSpawn(222, 1656)
            .addWormSpawn(178, 1554)
            .addWormSpawn(225, 1554)
            .addWormSpawn(143, 1489)
            .addWormSpawn(327, 1489)
            .addWormSpawn(186, 1422)
            .addWormSpawn(340, 1420)
            .addWormSpawn(108, 1351)
            .addWormSpawn(181, 1319)
            .addWormSpawn(366, 1319)
            .addWormSpawn(395, 1270)
            .addWormSpawn(347, 1218)
            .addWormSpawn(122, 1115)
            .addWormSpawn(379, 1073)
            .addWormSpawn(134, 1028)
            .addWormSpawn(372, 969)
            .addWormSpawn(372, 969)
            .addWormSpawn(110, 892)
            .addWormSpawn(400, 800)
            .addWormSpawn(80, 760)
            .addWormSpawn(425, 690)
            .addWormSpawn(60, 600)
            .addWormSpawn(450, 530)
            .addWormSpawn(111, 403)
            .addWormSpawn(410, 265)
            .addWormSpawn(256, 189)
            .addWormSpawn(458, 73)
            .addWormSpawn(313, 10)
            .setOrder(PredSettings.ORDER.LOOP_LAST_FOUR)
        ],
        objects: (() => {
            let obj = []
            
            for (let x = 10; x<=500;x+=35) {
                obj.push({type:"lava", x:x, y:1910})
            }
            return obj
         })(),
         objectsSteps: (() => {        
            let steps = [10]
    
            for (let y = 1878; y>=1020;y-=32) {
                let step = []
                for (let x = 10; x<=500;x+=35) {
                    step.push({type:"lava", x:x, y:y})
                }
                steps.push(step)
            }
    
            return steps
         })()
    }
)

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
mapSettings.set("wgetch/arena/gallery-arena.png", 
    {
        ctf: [
            // spawn flag left
            (new CTFSettings())
                .addFlagGreenSpawn(228, 49)
                .addGreenSpawn(106, 133)
                .addFlagGreenSpawn(226, 309)                  
                .addGreenSpawn(114, 374)
                .addFlagGreenSpawn(672, 309) 
                .addGreenSpawn(794, 378)
                .addFlagGreenSpawn(668, 49)  
                .addGreenSpawn(794, 133)

                .addFlagBlueSpawn(672, 309) 
                .addBlueSpawn(794, 378)
                .addFlagBlueSpawn(668, 49)  
                .addBlueSpawn(794, 133)                
                .addFlagBlueSpawn(228, 49)
                .addBlueSpawn(106, 133)
                .addFlagBlueSpawn(226, 309)                  
                .addBlueSpawn(114, 374)
 


                .setOrder(true)
            ],
        materials: defaultMaterials.map(noUndef)
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


mapSettings.set("wgetch/flag/ambi-flag.png", 
    {
        ctf: [            
            (new CTFSettings())
            .addFlagGreenSpawn(267, 155) 
            .addGreenSpawn(232, 175)                          

            .addFlagBlueSpawn(481, 297)
            .addBlueSpawn(515, 281)
        ]
})

mapSettings.set("wgetch/flag/ambi150-flag.png", 
    {
        ctf: [            
            (new CTFSettings())
            .addFlagGreenSpawn(293, 170) 
            .addGreenSpawn(257, 190)
            .addFlagGreenSpawn(645, 189) 
            .addGreenSpawn(626, 171)                          

            .addFlagBlueSpawn(616, 387)
            .addBlueSpawn(540, 421)
            .addFlagBlueSpawn(261, 421)
            .addBlueSpawn(279, 396)
            .setOrder(true)
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
    materials: defaultMaterials.map(noUndef).map(replaceMatIndexBy(MATERIAL.BG,1,2)),
    colorAnim: false
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
mapSettings.set("https://sylvodsds.gitlab.io/webliero-maps/dsds/frog_material_edit.png",{
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
    palette:true,
    materials: defaultMaterials.map(noUndef).map(replaceMatIndexBy(MATERIAL.BG,..._range(189,208)))
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

mapSettings.set("kangaroo/JetmenRevival/GardenSmall.png", 
    {      
     ctf: [
            (new CTFSettings())
                .addFlagBlueSpawn(219, 648)   

                .addBlueSpawn(148, 482)
                .addBlueSpawn(290, 485)
                .addBlueSpawn(219, 600)
                .addBlueSpawn(129, 646)

                .addFlagGreenSpawn(585, 648)
                .addGreenSpawn(477, 477)
                .addGreenSpawn(638, 490)
                .addGreenSpawn(679, 646)
                .addGreenSpawn(585, 600)
                
            ],
    }
)

mapSettings.set("kangaroo/JetmenRevival/LunarDigSmall.png", 
    {      
     ctf: [
            (new CTFSettings())
                .addFlagBlueSpawn(723, 733)   
                .addBlueSpawn(723, 733)   
                .addFlagBlueSpawn(277, 122) 
                .addBlueSpawn(277, 122)        

                .addFlagGreenSpawn(277, 122)
                .addGreenSpawn(277, 122)
                .addFlagGreenSpawn(723, 733)  
                .addGreenSpawn(723, 733)  
                
                .setOrder(true)
            ],
    }
)

mapSettings.set("kangaroo/JetmenRevival/MountDoomSmall.png", 
    {      
     ctf: [
            (new CTFSettings())
                .addFlagBlueSpawn(73, 114)   
                .addBlueSpawn(73, 114)        
                .addFlagBlueSpawn(26, 264)   
                .addBlueSpawn(26, 264)
                .addFlagBlueSpawn(167, 562)   
                .addBlueSpawn(167, 562)

                .addFlagGreenSpawn(699, 514)
                .addGreenSpawn(699, 514)
                .addFlagGreenSpawn(735, 95)
                .addGreenSpawn(735, 95)
                .addFlagGreenSpawn(769, 258)
                .addGreenSpawn(769, 258)
                .setOrder(CTFSettings.ORDER.RANDOM_SAME_INDEX)
            ],
    }
)

mapSettings.set("kangaroo/JetmenRevival/PostNukeSmall.png", 
    {      
     ctf: [
            (new CTFSettings())
                .addFlagBlueSpawn(178, 157)   
                .addBlueSpawn(178, 157)    
                .addFlagBlueSpawn(79, 523)   
                .addBlueSpawn(79, 523)  
     

                .addFlagGreenSpawn(549, 337)
                .addGreenSpawn(549, 337)
                .addFlagGreenSpawn(713, 525)
                .addGreenSpawn(713, 525)
        
                .setOrder(CTFSettings.ORDER.RANDOM_SAME_INDEX)
            ],
    }
)


mapSettings.set("kangaroo/JetmenRevival/CaveDot.png", 
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
                .addFlagBlueSpawn(651, 383)   

                .addBlueSpawn(550, 479)

                .addGreenSpawn(305, 168)
                .addFlagGreenSpawn(140, 106)
            ],
        materials: defaultMaterials.map(noUndef),
        colorAnim: false
    }
)

//

mapSettings.set("PiPitek/SHAARK4.png", 
    {
        dtf:[
        (new DTFSettings())
            .addFlagSpawn(36,173)
            .addDefenseSpawn(39,144)
            .addAttackSpawn(486,150),
        (new DTFSettings())
            .addFlagSpawn(486,150)
            .addDefenseSpawn(447,114)
            .addAttackSpawn(59,337),
     ],
     objects: (() => {
        let obj = [{type:"water", x:60, y:340}]
        
        for (let x = 70; x<469;x+=35) {
            obj.push({type:"water", x:x, y:340})
        }
        return obj
     })(),
     objectsSteps: (() => {        
        let steps = [30]

        for (let y = 340; y>=200;y-=20) {
            let step = []
            for (let x = 0; x<504;x+=35) {
                step.push({type:"water", x:x, y:y})
            }
            steps.push(step)
        }

        return steps
     })()
    },
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
/*
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
*/
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
     ],
     ctf: [
         
         (new CTFSettings())
             .addFlagGreenSpawn(346, 339)   
 
             .addGreenSpawn(290, 232)
             .addGreenSpawn(320, 343)
             .addGreenSpawn(333, 502)


             .addFlagBlueSpawn(842, 339)
             .addBlueSpawn(877, 349)             
             .addBlueSpawn(904, 238)
             .addBlueSpawn(861, 503)


         ],
    materials: defaultMaterials.map(noUndef)
    }
)

mapSettings.set("wgetch/flag/dens-flag.png", 
    {
     ctf: [
         
         (new CTFSettings())
             .addFlagGreenSpawn(274, 217)   
 
             .addGreenSpawn(309, 210)


             .addBlueSpawn(380, 418)
             .addFlagBlueSpawn(429, 429)             

         ],
    materials: defaultMaterials.map(noUndef)
    }
)
mapSettings.set("wgetch/flag/forts-flag.png", 
    {
     ctf: [
         
         (new CTFSettings())
             .addBlueSpawn(269, 208)
             .addBlueSpawn(354, 255)
             .addBlueSpawn(380, 207)
             .addBlueSpawn(362, 296)
             .addBlueSpawn(429, 336)
             .addBlueSpawn(332, 357)
             .addBlueSpawn(364, 337)
             .addBlueSpawn(322, 414)
             .addBlueSpawn(426, 415)
             .addBlueSpawn(475, 166)
             .addBlueSpawn(462, 293)
             .addBlueSpawn(395, 376)
             .addBlueSpawn(252, 396)
             .addFlagBlueSpawn(246, 252)             
             .addFlagBlueSpawn(252, 295)             
             .addFlagBlueSpawn(252, 334)             
             .addFlagBlueSpawn(228, 407)             
             .addFlagBlueSpawn(492, 218)             
             .addFlagBlueSpawn(492, 255)             
             .addFlagBlueSpawn(429, 330)    
             .addGreenSpawn(925, 208)
             .addGreenSpawn(840, 255)
             .addGreenSpawn(814, 207)
             .addGreenSpawn(832, 296)
             .addGreenSpawn(765, 336)
             .addGreenSpawn(861, 357)
             .addGreenSpawn(829, 337)
             .addGreenSpawn(872, 414)
             .addGreenSpawn(768, 415)
             .addGreenSpawn(718, 166)
             .addGreenSpawn(732, 293)
             .addGreenSpawn(798, 376)
             .addGreenSpawn(941, 396)
             .addFlagBlueSpawn(948, 252)             
             .addFlagBlueSpawn(941, 295)             
             .addFlagBlueSpawn(941, 334)             
             .addFlagBlueSpawn(963, 407)             
             .addFlagBlueSpawn(701, 218)             
             .addFlagBlueSpawn(701, 255)             
             .addFlagBlueSpawn(765, 330)           

         ],
    materials: defaultMaterials.map(noUndef)
    }
)

var mypool = Array.from(mapSettings.keys());
var mypoolIdx = [...mypool.sort()];

shuffleArray(mypool)