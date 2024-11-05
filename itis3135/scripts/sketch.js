function setup(){
    createCanvas(window.innerWidth,800,WEBGL);
    angleMode(DEGREES);
    strokeWeight(3);
    noFill();
    stroke(32,8,64);
}
function draw(){
    background(220,210,250);

    //function to change the 'position' of the 'camera' every touch
    orbitControl();

    for(let zAngle=0;zAngle<360;zAngle+=30){
        for(let xAngle=0;xAngle<360;xAngle+=30){
            push();

            rotateZ(zAngle);
            rotateX(xAngle);

            translate(0,400,0);
            sphere(24, 3, 12);
            pop();
        }
    }

}

