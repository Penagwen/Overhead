// Swich inv screen
document.getElementById('WeaponMenuBtn').addEventListener('click', (event) => {
    document.getElementById('WeaponMenu').style.display = 'block';
    document.getElementById('ArmourMenu').style.display = 'none';
    document.getElementById('WeaponMenuBtn').className = "InvNavPgActive";
    document.getElementById('ArmourMenuBtn').className = "";
    refreshCharaterScreen();
})
document.getElementById('ArmourMenuBtn').addEventListener('click', (event) => {
    document.getElementById('WeaponMenu').style.display = 'none';
    document.getElementById('ArmourMenu').style.display = 'block';
    document.getElementById('WeaponMenuBtn').className = "";
    document.getElementById('ArmourMenuBtn').className = "InvNavPgActive";
    refreshCharaterScreen();
})


// set the screen
refreshCharaterScreen();

function refreshCharaterScreen(){
    // refresh the stats of the charater
    if(player.equippedItems.length == 0){
        for(var i=0; i<6; i++){
            document.getElementById(`${Object.keys(player.stats)[i]}Stat`).innerHTML = `${Object.keys(player.stats)[i]}: ${Object.values(player.stats)[i]}`;
        }
    }else{
        for(var i=0; i<6; i++){
            let sum = 0;
            const stat = Object.keys(player.stats)[i];
            player.equippedItems.forEach((item) => {
                if(itemList[item][stat] != undefined){sum += itemList[item][stat]}
            })
            document.getElementById(`${Object.keys(player.stats)[i]}Stat`).innerHTML = `${Object.keys(player.stats)[i]}: ${Object.values(player.stats)[i]} ${sum > 0 ? `(+${sum})` : ''}`;
        }
    }
    // sort the invintory
    player.invintory.sort(
        function(a, b){
            return (itemList[b].type == 'Weapon' ? itemList[b].damage : itemList[b].defence) - (itemList[a].type == 'Weapon' ? itemList[a].damage : itemList[a].defence);
        });
    // put the selected items at the top
    for(var i=0; i<2; i++){
        Object.values(document.querySelector(`#${i == 1 ? 'Weapon' : 'Armour'}Menu`).children).forEach((element) => {
            if(element.id == 'equipped'){
                player.invintory.splice(player.invintory.indexOf(element.lastChild.data), 1)
                player.invintory.unshift(element.lastChild.data);
            }
        })
    }
    
    // clear the Menus to refresh their positions
    document.getElementById('WeaponMenu').replaceChildren();
    document.getElementById('ArmourMenu').replaceChildren();
    player.invintory.forEach((itemName, index) => {
        // Text for item name display 
        const name = document.createTextNode(itemName);
        // tooitp creator
        const tooltip = document.createElement('div');
        const tooltiptext = document.createElement('span');

        // put the items together
        tooltip.appendChild(tooltiptext);
        tooltip.appendChild(name);
        // put the tootip to the menu
        document.getElementById(`${itemList[itemName].type}Menu`).appendChild(tooltip); 

        tooltiptext.appendChild(document.createTextNode(itemName));
        tooltiptext.appendChild(document.createElement('br'));
        tooltiptext.appendChild(document.createTextNode(`Rarity: ${itemList[itemName].rarity}`));
        tooltiptext.appendChild(document.createElement('br'));
        if(itemList[itemName].type == 'Weapon'){
            tooltiptext.appendChild(document.createTextNode(`Damage: ${itemList[itemName].damage}`));
        }
        else if(itemList[itemName].type == 'Armour'){
            tooltiptext.appendChild(document.createTextNode(`Defence: ${itemList[itemName].defence}`));
        }
        // check if the player has the item equipped if so set it's id to equipped
        if(player.equippedItems.indexOf(itemName) > -1){
            tooltip.id = 'equipped';
            // clear the items from the invintory as to not set all the items with the same name as equipped
            player.equippedItems.splice(player.equippedItems.indexOf(itemName), 1);
        }else{
            tooltip.id = 'notEquipped';
        }
        tooltip.className = 'tooltip';
        tooltiptext.className = 'tooltiptext';

        // text color based on the rarity of the item
        if(itemList[itemName].rarity == 'BASIC'){tooltiptext.style.color = "grey"}
        else if(itemList[itemName].rarity == 'UNCOMMON'){tooltiptext.style.color = "green"}
        else if(itemList[itemName].rarity == 'RARE'){tooltiptext.style.color = "blue"}
        else if(itemList[itemName].rarity == 'EPIC'){tooltiptext.style.color = "purple"}
        else if(itemList[itemName].rarity == 'LEGENDARY'){tooltiptext.style.color = "orange"}
        else if(itemList[itemName].rarity == 'MYTHIC'){tooltiptext.style.color = "pink"}
    })
    // put the players equiped items back in the invintory after removed
    // repeat for each menu
    for(var i=0; i<2; i++){
        // get the menus children (the tool tips) and then turn it into an array to loop over
        Object.values(document.querySelector(`#${i == 1 ? 'Weapon' : 'Armour'}Menu`).children).forEach((element) => {
            if(element.id == 'equipped'){
                player.equippedItems.push(element.lastChild.data);
            }
        })
    }
}


// equip and unequip items
let weaponsEquipped = 0;
let armourEquipped = {
    helmet: false,
    chestplate: false,
    pants: false,
    boots: false
}
document.getElementById('characterScreen').addEventListener('click', (event) => {
    // equip items
    const equipItem = () => {
        if(itemList[event.target.lastChild.data].type == 'Weapon' && weaponsEquipped < 4){
            weaponsEquipped ++;
        }else if(itemList[event.target.lastChild.data].type == 'Armour'){
            if(itemList[event.target.lastChild.data].piece == 'Helmet' && !armourEquipped.helmet){
                armourEquipped.helmet = true;
            }else if(itemList[event.target.lastChild.data].piece == 'Chestplate' && !armourEquipped.chestplate){
                armourEquipped.chestplate = true;
            }else if(itemList[event.target.lastChild.data].piece == 'Pants' && !armourEquipped.pants){
                armourEquipped.pants = true;
            }else if(itemList[event.target.lastChild.data].piece == 'Boots' && !armourEquipped.boots){
                armourEquipped.boots = true;
            }else{ return; }
        }else{ return; }
        
        
        
        event.target.id = 'equipped';
        // push the name of the item to the players equipped items
        
        player.equippedItems.push(event.target.lastChild.data);
        refreshCharaterScreen();
    }
    
    if(event.target.id == 'notEquipped'){
        equipItem();
    }else if(event.target.id == 'equipped'){
        if(itemList[event.target.lastChild.data].type == 'Weapon'){
            weaponsEquipped --;
        }else if(itemList[event.target.lastChild.data].type == 'Armour'){
            if(itemList[event.target.lastChild.data].piece == 'Helmet'){
                armourEquipped.helmet = false;
            }else if(itemList[event.target.lastChild.data].piece == 'Chestplate'){
                armourEquipped.chestplate = false;
            }else if(itemList[event.target.lastChild.data].piece == 'Pants'){
                armourEquipped.pants = false;
            }else if(itemList[event.target.lastChild.data].piece == 'Boots'){
                armourEquipped.boots = false;
            }
        }
        event.target.id = 'notEquipped';
        
        player.equippedItems.splice(player.equippedItems.indexOf(event.target.lastChild.data), 1);
        refreshCharaterScreen();
    }
})