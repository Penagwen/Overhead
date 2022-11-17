const enemies = {
    goblin: {
        level: 1,
        health: 100,
        defence: 10,
        damage: 10,
        dodge: 0
    },
    spider: {
        level: 1,
        health: 175,
        defence: 0,
        damage: 15,
        dodge: 5 
    },
    slime: {
        level: 1,
        health: 150,
        defence: 50,
        damage: 1,
        dodge: 0
    }
}

class Enemy{
    constructor(name){
        this.name = name;
        this.health = enemies[this.name].health;
        this.defence = enemies[this.name].defence;
        this.damage = enemies[this.name].damage;
        this.dodge = enemies[this.name].dodge;
    }
    
    draw(){
        const enemyContainer = document.createElement('div')
        enemyContainer.id = 'enemyContainer';
        const enemy = document.createElement('div');
        enemy.id = 'enemy';
        enemy.style.backgroundColor = 'black';
        
        const enemyHealthBarContainer = document.createElement('div')
        enemyHealthBarContainer.id = 'enemyHealthBarContainer';
        const health = document.createElement('div');
        health.style.backgroundColor = 'red';
        health.id = 'healthBar';
        

        enemyHealthBarContainer.appendChild(health);
        enemyContainer.appendChild(enemyHealthBarContainer);
        enemyContainer.appendChild(enemy);
        document.getElementById('dungeonScreen').appendChild(enemyContainer);
    }
    
    update(){
        document.getElementById('healthBar').style.width = (currEnemy.health / enemies[currEnemy.name].health)*100 + '%';
    }
}

let floor = 1;
let currEnemy

function startDungeon(){
    document.getElementById('currFloor').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    
    
    currEnemy = getCurrEnemy();
    setUpScreen();
    
    currEnemy.update()
}

const getCurrEnemy = () => new Enemy(Object.keys(enemies)[Math.floor(Math.random()*Object.keys(enemies).length)]);

function setUpScreen(){
    currEnemy.draw();
}