let onGoingDungeon = false;

let floor = 1;
let objective

let canvas;
let c;
let previosCanvasWidth = window.innerWidth;

let playerDis;

const enemies = [];

const enemiesData = {
    goblin: {
        level: 1,
        health: 100,
        defence: 10,
        damage: 10,
        dodge: 0,
        color: "green"
    },
    spider: {
        level: 1,
        health: 175,
        defence: 0,
        damage: 15,
        dodge: 5 ,
        color: "black"
    },
    slime: {
        level: 1,
        health: 150,
        defence: 50,
        damage: 1,
        dodge: 0,
        color: "lightgreen"
    }
}

class Player{
    constructor(x, y, width, height, velocity){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
    }

    draw(){
        c.fillStyle = 'blue';
        c.fillRect(this.x, this.y, this.width, this.height);

    }
}

class Enemy{
    constructor({x, y, width, height, name}){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.health = enemiesData[name].health;
        this.defence = enemiesData[name].defence;
        this.damage = enemiesData[name].damage;
        this.dodge = enemiesData[name].dodge;
        this.color = enemiesData[name].color;
    }
    
    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }
    
    update(){
        this.draw();
        this.x -= Math.abs(playerDis.velocity.x)+Math.abs(playerDis.velocity.y)==10?playerDis.velocity.x/1.5:playerDis.velocity.x;
        this.y -= Math.abs(playerDis.velocity.x)+Math.abs(playerDis.velocity.y)==10?playerDis.velocity.y/1.5:playerDis.velocity.y;
    }
}




function startDungeon(){
    if(weaponsEquipped <= 0){ return; }
    
    // set variables
    onGoingDungeon = true;
    
    document.getElementById('currFloor').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    
    document.getElementById('dungeonScreen').innerHTML = `<canvas id="dungeonCanvas"><canvas>`

    // set up screen
    canvas = document.getElementById("dungeonCanvas");
    c = canvas.getContext("2d")
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    objective = getObjective(floor);

    // set objects

    playerDis = new Player(canvas.width/2-7.5, canvas.height/2-7.5, 15, 15, {x:0, y:0});

    // create enemys
    let min = -200;
    let max = 200;
    for(var i=0; i<objective; i++){
        enemies.push(new Enemy({
            x: (Math.random()*canvas.width)/*+((Math.random()*(max-min))-min)*/,
            y: (Math.random()*canvas.height)/*+((Math.random()*(max-min))-min)*/,
            width: 15,
            height: 15,
            name: Object.keys(enemiesData)[Math.floor(Math.random()*Object.keys(enemiesData).length)]
        }));
    }

    update();
}

function update(){
    requestAnimationFrame(update);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // get and display objective
    c.fillStyle = "black";
    c.font = "30px sarif";
    c.fillText(`Kill ${objective} Enemys`, canvas.width/2-85, 30);

    // draw objects to the screen
    playerDis.x = canvas.width/2 - 7.5;
    playerDis.y = canvas.height/2 - 7.5;
    playerDis.draw();

    enemies.forEach((enemy, index) => {
        if(window.innerWidth != previosCanvasWidth){
            enemy.x += canvas.width - previosCanvasWidth;
            if(index >= enemies.length-1){previosCanvasWidth = canvas.width;}
        }
        enemy.update();
    })
}

const getObjective = (floor) => {
    return Math.round((floor * (floor+10))/10)*10;
}

function attack(){
    player.equippedItems.forEach((item) => {
        if(item.type == "Weapon"){
            
        }
    }) 
}

window.onkeydown = function(e){
    // up
    if(e.key.toLowerCase() == 'w'){
        playerDis.velocity.y = -5;
    }
    // down
    if(e.key.toLowerCase() == 's'){
        playerDis.velocity.y = 5;
    }
    // left
    if(e.key.toLowerCase() == 'a'){
        playerDis.velocity.x = -5;
    }
    // down
    if(e.key.toLowerCase() == 'd'){
        playerDis.velocity.x = 5;  
    }
    if(e.key == " "){
        attack();
    }
};
window.onkeyup = function(e){
    if(e.key.toLowerCase() == 'w'){
        playerDis.velocity.y = 0;  
    }
    if(e.key.toLowerCase() == 's'){
        playerDis.velocity.y = 0;  
    }
    if(e.key.toLowerCase() == 'a'){
        playerDis.velocity.x = 0;  
    }
    if(e.key.toLowerCase()  == 'd'){
        playerDis.velocity.x = 0;  
    }
};
