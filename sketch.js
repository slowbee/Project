var tom,tomImg;
var tomwalikng,tomwalkingImg;
var tomsitting,tomsitttingImg;
var jerry,jerryImg;
var garden,gardenImg;

function preload() {
    //load the images here
tomImg = loadImage("images/cat1.png")
tomwalkingImg = loadImage("images/cat2.png")
tomsittingImg = loadAnimation("images/cat3.png","images/cat4.png")
gardenImg = loadImage("images/garden.png")
jerryImg = loadImage("images/mouse1.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here 
   
   
gardenImg = createSprite(500,400,1000,800)
gardenImg.addImage("gardenImg",gardenImg)
gardenImg.scale = 0.5 

tomImg = createSprite(200,200,20,20)
tomImg.addImage("tomImg",tomImg)
tomImg.scale = 0.5 

tomwalikngImg = createSprite(250,200,20,20)
tomwalikngImg.addImage("tomwalikngImg",tomwalikngImg)
tomwalikngImg.scale = 0.5

tomsittingImg = createSprite(200,250,20,20)
tomsittingImg.addAnimation("tomsittingImg",tomsittingImg)
tomsittingImg.scale = 0.5

jerry = createSprite(250,200,20,20)
jerry.addImage("jerryImg",jerryImg)
jerry.scale = 0.5

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
