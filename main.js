img="";
function setup()
{
  canvas = createCanvas(650,600);
  canvas.center();
}
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,650,600);
    fill("#0000FF");
    text("dog",50,50);
    noFill();
    rect(30,60,450,350);
}