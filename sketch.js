var ship,ship_sailing,edges
var seaImg

function preload(){
  seaImg=loadImage("sea.png")
  ship_sailing=loadImage("ship1.png","ship2.png","ship3.png","ship4.png",)
}

  function setup(){
  createCanvas(10000,800);
  
  sea=createSprite(200,200,400,400)
  ship=createSprite(500,350,20,20)
  ship.scale=0.5
  drawSprites()
}
function draw(){
  
ship.addImage(ship_sailing)
sea.addImage("sea",seaImg)
sea.velocityX=20



  drawSprites()   
}





  
  



