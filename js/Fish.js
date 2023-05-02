AFRAME.registerComponent("fishes",{
    init:function(){
        for(var i=1;i<=10;i++){
            const id=`fish${i}`
            const posx=Math.random()*100 + -50
            const posy=Math.random()*5 + 5
            const posz=Math.random()*60 + -40
            const position={x:posx,y:posy,z:posz}
            this.createFish(id, position)
        }
    },
    createFish:function(id,position){
        const fishModel=document.querySelector("#fishModels")
        var fish=document.createElement("a-entity")
        fish.setAttribute("id",id)
        fish.setAttribute("position",position)
        fish.setAttribute("rotation",{x:0,y:100,z:0})
        fish.setAttribute("scale",{x:0.3,y:0.3,z:0.3})
        fish.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fish.setAttribute("animation",{property:"position",to:"100 10 -20",loop:true,dur:20000})
        fish.setAttribute("animation-mixer",{})
        fish.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        fish.setAttribute("game-play",{elementId:`#${id}`})
        fishModel.appendChild(fish)
    }
})
