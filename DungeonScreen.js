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
        this.health = enemies[name].health;
        this.defence = enemies[name].defence;
        this.damage = enemies[name].damage;
        this.dodge = enemies[name].dodge;
    }
    
    draw(){
        const enemyContainer = document.createElement('div')
        enemyContainer.id = 'enemyContainer';
        const enemy = document.createElement('div');
        enemy.id = 'enemy';
        enemy.style.backgroundColor = 'black';
        
        const enemyHealthBarContainer = document.createElement('div')
        enemyHealthBarContainer.id = 'enemyHealthBarContainer';
        const healthDis = document.createElement('div');
        healthDis.style.backgroundColor = 'red';
        healthDis.id = 'healthBar';
        
        const enemyNameContainer = document.createElement('div');
        const enemyName = document.createTextNode(this.name.toUpperCase());
        enemyNameContainer.id = 'enemyName';
        
        enemyNameContainer.appendChild(enemyName);
        enemyContainer.appendChild(enemyNameContainer);
        enemyHealthBarContainer.appendChild(healthDis);
        enemyContainer.appendChild(enemyHealthBarContainer);
        enemyContainer.appendChild(enemy);
        document.getElementById('dungeonScreen').appendChild(enemyContainer);
    }
    
    update(){
        if(this.health <= 0){
            this.health = 0;
            Object.values(document.getElementById('dungeonScreen').children).forEach((el) => {
                if(el.className == ''){ document.getElementById('dungeonScreen').removeChild(el); }
            })
            currEnemy = getCurrEnemy();
            setUpScreen();
        }else{
            document.getElementById('healthBar').style.width = (this.health / enemies[this.name].health)*100 + '%';
        }
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
}

function stopDungeon(){
    Object.values(document.getElementById('dungeonScreen').children).forEach((el) => {
        if(el.className == ''){ document.getElementById('dungeonScreen').removeChild(el); }
        else{ el.style.display = 'block'; }

        onGoingDungeon = false;
    })
}

const getCurrEnemy = () => new Enemy(Object.keys(enemies)[Math.floor(Math.random()*Object.keys(enemies).length)]);

function setUpScreen(){
    currEnemy.draw();
    currEnemy.update();

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

document.getElementById('dungeonScreen').addEventListener('click', (event) => {
    if(event.target.id == 'move'){
        if(event.target.innerHTML.indexOf('WAND') > -1 || event.target.innerHTML.indexOf('STAFF') > -1 || event.target.innerHTML.indexOf('BOOK') > -1 || event.target.innerHTML.indexOf('AMULET') > -1 ){
            currEnemy.health -= itemList[event.target.innerHTML].damage + player.stats.magic;
        }else{
            currEnemy.health -= itemList[event.target.innerHTML].damage + player.stats.damage;
        }
        currEnemy.update();
    }
})