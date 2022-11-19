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
        
        const enemyNameContainer = document.createElement('div');
        const enemyName = document.createTextNode(this.name.toUpperCase());
        enemyNameContainer.id = 'enemyName';
        
        enemyNameContainer.appendChild(enemyName);
        enemyContainer.appendChild(enemyNameContainer);
        enemyHealthBarContainer.appendChild(health);
        enemyContainer.appendChild(enemyHealthBarContainer);
        enemyContainer.appendChild(enemy);
        document.getElementById('dungeonScreen').appendChild(enemyContainer);
    }
    
    update(){
        document.getElementById('healthBar').style.width = (currEnemy.health / enemies[currEnemy.name].health)*100 + '%';
    }
}

let onGoingDungeon = false;

let floor = 1;
let currEnemy

function startDungeon(){
    if(weaponsEquipped <= 0){ return; }
    
    onGoingDungeon = true;
    
    document.getElementById('currFloor').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    
    
    currEnemy = getCurrEnemy();
    setUpScreen();
    
    currEnemy.update()
}

function stopDungeon(){
    console.log(document.getElementById('dungeonScreen').children);
}

const getCurrEnemy = () => new Enemy(Object.keys(enemies)[Math.floor(Math.random()*Object.keys(enemies).length)]);

function setUpScreen(){
    currEnemy.draw();
    
    const moveContainer = document.createElement('div');
    moveContainer.id = 'moveContainer';
    
    if(floor == 1){
        const leaveBtn = document.createElement('div')
        leaveBtn.id = 'leaveBtn';
        leaveBtn.setAttribute("onclick", "stopDungeon()");
        leaveBtn.appendChild(document.createTextNode('Leave'));
        document.getElementById('dungeonScreen').prepend(leaveBtn);
    }
    
    attackBtns(moveContainer);
    
    document.getElementById('dungeonScreen').appendChild(moveContainer);
    
}

function attackBtns(moveContainer){
    player.equippedItems.forEach((itemName) => {
        if(itemList[itemName].type == 'Weapon'){
            const move = document.createElement('div');
            move.id = 'move';
            move.style.width = `${100/weaponsEquipped}%`;
            
            const moveName = document.createTextNode(itemName);
            
            move.appendChild(moveName);
            moveContainer.appendChild(move);
        }
    })
}