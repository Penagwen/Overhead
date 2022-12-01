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
        type: "Weapon",
        attackType: "melee"
    },
    OAKWAND: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon",
        attackType: "ranged"
    },
    WOODENHAMMER: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon",
        attackType: "melee"
    },
    WOODENKNIFE: {
        damage: 10,
        accuracy: 100,
        cost: {min:10, max:15},
        turns: 1,
        rarity: "BASIC",
        type: "Weapon",
        attackType: "melee"
    },
    BRONZESWORD: {
        damage: 25,
        accuracy: 100,
        cost: {min:50, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    BRONZEGREATSWORD: {
        damage: 40,
        accuracy: 80,
        cost: {min:55, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    BRONZEHAMMER: {
        damage: 50,
        accuracy: 50,
        cost: {min:50, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    BRONZEBROADSWORD: {
        damage: 55,
        accuracy: 45,
        cost: {min:55, max:70},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    BIRCHWAND: {
        damage: 40,
        accuracy: 100,
        cost: {min:55, max:60},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "ranged"
    },
    BIRCHSTAFF: {
        damage: 75,
        accuracy: 45,
        cost: {min:75, max:90},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "ranged"
    },
    BRONZEDAGGER: {
        damage: 20,
        accuracy: 90,
        cost: {min:55, max:70},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    BRONZEKNIFE: {
        damage: 15,
        accuracy: 100,
        cost: {min:50, max:65},
        turns: 1,
        rarity: "UNCOMMON",
        type: "Weapon",
        attackType: "melee"
    },
    IRONRAPIER: {
        damage: 45,
        accuracy: 85,
        cost: {min:190, max:220},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    IRONSABER: {
        damage: 65,
        accuracy: 90,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    IRONSWORD: {
        damage: 70,
        accuracy: 100,
        cost: {min:180, max:200},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    IRONGREATSWORD: {
        damage: 90,
        accuracy: 60,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    IRONHAMMER: {
        damage: 110,
        accuracy: 55,
        cost: {min:170, max:210},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    DOUBLEBARREL: {
        damage: 75,
        accuracy: 60,
        cost: {min:160, max:205},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    CANNON: {
        damage: 150,
        accuracy: 35,
        cost: {min:200, max:240},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    IRONBROADSWORD: {
        damage: 100,
        accuracy: 75,
        cost: {min:195, max:225},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    GREATWOODWAND: {
        damage: 90,
        accuracy: 95,
        cost: {min:195, max:240},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    GREATWOODSTAFF: {
        damage: 160,
        accuracy: 55,
        cost: {min:220, max:280},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    SPELLBOOK: {
        damage: 95,
        accuracy: 85,
        cost: {min:200, max:230},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    AMULET: {
        damage: 80,
        accuracy: 100,
        cost: {min:235, max:245},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    IRONDAGGER: {
        damage: 30,
        accuracy: 95,
        cost: {min:185, max:215},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    IRONKNIFE: {
        damage: 25,
        accuracy: 100,
        cost: {min:170, max:200},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "melee"
    },
    SMOKEBOMB: {
        damage: 0,
        accuracy: 100,
        cost: {min:50, max:55},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    POSINDART: {
        damage: 15,
        accuracy: 100,
        cost: {min:60, max:75},
        turns: 1,
        rarity: "RARE",
        type: "Weapon",
        attackType: "ranged"
    },
    STICK1: {
        damage: 999,
        accuracy: 100,
        cost: {min:0, max:0},
        turns: 1,
        rarity: "LEGENDARY",
        type: "Weapon",
        attackType: "melee"
    },
    STICK2: {
        damage: 999999,
        accuracy: 100,
        cost: {min:0, max:0},
        turns: 1,
        rarity: "MYTHIC",
        type: "Weapon",
        attackType: "melee"
    },
    
    LEATHERHELMET: {
        defence: 2,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour',
        piece: 'Helmet'
    },
    LEATHERCHESTPLATE: {
        defence: 4,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour',
        piece: 'Chestplate'
    },
    LEATHERPANTS: {
        defence: 3,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour',
        piece: 'Pants'
    },
    LEATHERBOOTS: {
        defence: 1,
        cost: {min:10, max:15},
        rarity: 'BASIC',
        type: 'Armour',
        piece: 'Boots'
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
    if(event.target.firstChild.data == 'Shop' && !onGoingDungeon){
        document.getElementById('shopScreen').style.display = 'block';
        document.getElementById('characterScreen').style.display = 'none';
        document.getElementById('dungeonScreen').style.display = 'none';
    }else if(event.target.firstChild.data == 'Charater' && !onGoingDungeon){
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