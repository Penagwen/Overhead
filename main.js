let player = {
    
    stats: {
        health: 0,
        defence: 0,
        damage: 0,
        magic: 0,
        mana: 0,
        dodge: 0
    },
    
    invintory: [],
    
    equippedItems: [],
    
    level: 0,
    coins: 100
    
}

// ITEMS
const itemList = {
    WOODENSWORD: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon"
    },
    OAKWAND: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon"
    },
    WOODENHAMMER: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon"
    },
    WOODENKNIFE: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon"
    },
    BRONZESWORD: {
        damage: 25,
        accuracy: 100,
        cost: {min:50, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BRONZEGREATSWORD: {
        damage: 40,
        accuracy: 80,
        cost: {min:55, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BRONZEHAMMER: {
        damage: 50,
        accuracy: 50,
        cost: {min:50, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BRONZEBROADSWORD: {
        damage: 55,
        accuracy: 45,
        cost: {min:55, max:70},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BIRCHWAND: {
        damage: 40,
        accuracy: 100,
        cost: {min:55, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BIRCHSTAFF: {
        damage: 75,
        accuracy: 45,
        cost: {min:75, max:90},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BRONZEDAGGER: {
        damage: 20,
        accuracy: 90,
        cost: {min:55, max:70},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    BRONZEKNIFE: {
        damage: 15,
        accuracy: 100,
        cost: {min:50, max:65},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon"
    },
    IRONRAPIER: {
        damage: 45,
        accuracy: 85,
        cost: {min:190, max:220},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONSABER: {
        damage: 65,
        accuracy: 90,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONSWORD: {
        damage: 70,
        accuracy: 100,
        cost: {min:180, max:200},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONGREATSWORD: {
        damage: 90,
        accuracy: 60,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONHAMMER: {
        damage: 110,
        accuracy: 55,
        cost: {min:170, max:210},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    DOUBLEBARREL: {
        damage: 75,
        accuracy: 60,
        cost: {min:160, max:205},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    CANNON: {
        damage: 150,
        accuracy: 35,
        cost: {min:200, max:240},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONBROADSWORD: {
        damage: 100,
        accuracy: 75,
        cost: {min:195, max:225},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    GREATWOODWAND: {
        damage: 90,
        accuracy: 95,
        cost: {min:195, max:240},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    GREATWOODSTAFF: {
        damage: 160,
        accuracy: 55,
        cost: {min:220, max:280},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    SPELLBOOK: {
        damage: 95,
        accuracy: 85,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    AMULET: {
        damage: 80,
        accuracy: 100,
        cost: {min:235, max:245},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONDAGGER: {
        damage: 30,
        accuracy: 95,
        cost: {min:185, max:215},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    IRONKNIFE: {
        damage: 25,
        accuracy: 100,
        cost: {min:170, max:200},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    SMOKEBOMB: {
        damage: 0,
        accuracy: 100,
        cost: {min:50, max:55},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    POSINDART: {
        damage: 15,
        accuracy: 100,
        cost: {min:60, max:75},
        turns: 1,
        rarity: "RARE",
        type: "Weapon"
    },
    STICK1: {
        damage: 999,
        accuracy: 100,
        cost: {min:0, max:0},
        turns: 1,
        rarity: "LEGENDARY",
        type: "Weapon"
    },
    STICK2: {
        damage: 999999,
        accuracy: 100,
        cost: {min:0, max:0},
        turns: 1,
        rarity: "MYTHIC",
        type: "Weapon"
    },
    
    LEATHERHELMET: {
        defence: 2,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour'
    },
    LEATHERCHESTPLATE: {
        defence: 4,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour'
    },
    LEATHERPANTS: {
        defence: 3,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour'
    },
    LEATHERBOOTS: {
        defence: 1,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour'
    }
}

const Classes = {
    Warrior: {
        health: 120,
        defence: 10,
        damage: 50,
        magic: 0,
        mana: 20,
        dodge: 10
    },
    Mage: {
        health: 50,
        defence: 0,
        damage: 10,
        magic: 75,
        mana: 200,
        dodge: 5
    },
    Tank: {
        health: 150,
        defence: 50,
        damage: 20,
        magic: 0,
        mana: 10,
        dodge: 0
    },
    Ninja: {
        health: 100,
        defence: 0,
        damage: 40,
        magic: 30,
        mana: 100,
        dodge: 50
    },
}

function setClass(classs){
    player.stats = Classes[classs];
    document.getElementById("ClassContainer").style.display = 'none';
    document.getElementById('mainDiv').style.display = 'block';
    
    player.invintory.push("LEATHERHELMET");
    player.invintory.push("LEATHERCHESTPLATE");
    player.invintory.push("LEATHERPANTS");
    player.invintory.push("LEATHERBOOTS");
    if(classs == 'Warrior'){player.invintory.push("WOODENSWORD");}
    else if(classs == 'Mage'){player.invintory.push("OAKWAND");}
    else if(classs == 'Tank'){player.invintory.push("WOODENHAMMER");}
    else if(classs == 'Ninja'){player.invintory.push("WOODENKNIFE");}
    
    // update the tab bar
    document.getElementById("coins").innerHTML = `Coins ${player.coins}`;
    document.getElementById("level").innerHTML = `Level ${player.level}`;
    
    refreshCharaterScreen();
}

document.getElementById('NavBar').addEventListener('click', (event) => {
    if(event.target.className != 'currTab'){
        // update the tab bar
        document.getElementById("coins").innerHTML = `Coins ${player.coins}`;
        document.getElementById("level").innerHTML = `Level ${player.level}`;
        Object.values(event.target.parentElement.children).forEach((childEl) => {
            childEl.className = 'notCurrTab';
        })
        event.target.className = 'currTab';
    }
    if(event.target.firstChild.data == 'Shop'){
        document.getElementById('shopScreen').style.display = 'block';
        document.getElementById('characterScreen').style.display = 'none';
        document.getElementById('dungeonScreen').style.display = 'none';
    }else if(event.target.firstChild.data == 'Charater'){
        document.getElementById('shopScreen').style.display = 'none';
        document.getElementById('characterScreen').style.display = 'block';
        document.getElementById('dungeonScreen').style.display = 'none';
        refreshCharaterScreen();
    }else if(event.target.firstChild.data == 'Dungeon'){
        document.getElementById('shopScreen').style.display = 'none';
        document.getElementById('characterScreen').style.display = 'none';
        document.getElementById('dungeonScreen').style.display = 'block';
    }
})