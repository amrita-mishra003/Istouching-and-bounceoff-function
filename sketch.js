var a, b;

function setup() {
    createCanvas(800, 400);
    a = createSprite(400, 100, 50, 50);
    b = createSprite(200, 300, 50, 100);
    a.shapeColor = "green ";
    b.shapeColor = "green";

    obj1 = createSprite(100, 200, 50, 50);
    obj2 = createSprite(200, 200, 50, 50);
    obj3 = createSprite(300, 200, 50, 50);
    obj4 = createSprite(400, 200, 50, 50);


    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
    obj3.shapeColor = "green";
    obj4.shapeColor = "green";

}

function draw() {
    background(255, 255, 255);

    a.velocityX = 5;
    b.velocityX = -5;

    b.x = World.mouseX;
    b.y = World.mouseY;

    if (isTouching(b, obj1)) {
        obj1.shapeColor = "red";
        b.shapeColor = "red";

    } else {
        obj1.shapeColor = "green";
        b.shapeColor = "green";


    }
    bounceOff(b, a);
    drawSprites();
}

function isTouching(object1, object2) {
    if (object2.x - object1.x < object1.width / 2 + object2.width / 2 &&
        object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
        object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
        object2.y - object1.y < object1.height / 2 + object2.height / 2) {
        return true;
    } else {
        return false;
    }
}

function bounceOff(object1, object2) {
    if (object2.x - object1.x < object1.width / 2 + object2.width / 2 &&
        object1.x - object2.x < object1.width / 2 + object2.width / 2) {
        object1.velocityX = object1.velocityX * -10;
        object2.velocityX = object2.velocityX * -10;

    }
    if (object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
        object2.y - object1.y < object1.height / 2 + object2.height / 2) {
        object1.velocityY = object1.velocityY * -10;
        object2.velocityY = object2.velocityY * -10;
    }
}