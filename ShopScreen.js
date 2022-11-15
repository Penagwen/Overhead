const shop = {
    level1: [],
    level2: [],
    level3: []
}

const possibleItems = {
    level1: [],
    level2: [],
    level3: []
}

// set up the possible items
Object.keys(itemList).forEach((itemName) => {
    if(itemList[itemName].rarity == 'BASIC' ||  itemList[itemName].rarity == 'UNCOMMON'){possibleItems.level1.push(itemName)}
    else if(itemList[itemName].rarity == 'RARE' || itemList[itemName].rarity == 'EPIC'){possibleItems.level2.push(itemName)}
    else if(itemList[itemName].rarity == 'LEGENDARY' || itemList[itemName].rarity == 'MYTHIC'){possibleItems.level3.push(itemName)}
})

function refreshShop(){
    shop.level1 = [];
    shop.level2 = [];
    shop.level3 = [];
    
    // repet 3 times
    for(var i=1; i<4; i++){
        // push an item 3 times
        for(var r=0; r<3; r++){
            // basically shop.level1 = possibleItems.level1[(random number)]
            eval(`shop.level${i}`).push(eval(`possibleItems.level${i}`)[Math.floor(Math.random()*eval(`possibleItems.level${i}`).length)])
        }
    }
    document.querySelector('#level1').replaceChildren();
    document.querySelector('#level2').replaceChildren();
    document.querySelector('#level3').replaceChildren();
    for(var i=1; i<4; i++){
        eval(`shop.level${i}`).forEach((itemName, index) => {
            // Text for item name display 
            const name = document.createTextNode(itemName);
            //cost of the item
            const cost = document.createTextNode(`cost: ${Math.floor(Math.random()*(itemList[itemName].cost.max-itemList[itemName].cost.min))+itemList[itemName].cost.min}`);
            
            // tooitp creator
            const tooltip = document.createElement('div');
            const tooltiptext = document.createElement('span');
        
            // put the items together
            tooltip.appendChild(tooltiptext);
            tooltip.appendChild(name);
            tooltip.appendChild(document.createElement('br'));
            tooltip.appendChild(document.createElement('br'));
            tooltip.appendChild(cost);
            // put the tootip to the menu   
            document.querySelector(`#level${i}`).appendChild(tooltip); 
        
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
            tooltip.className = 'tooltip';
            if(index == 2){
                tooltiptext.className = 'tooltiptext right';
            }else{
                tooltiptext.className = 'tooltiptext';
            }
        
            // text color based on the rarity of the item
            if(itemList[itemName].rarity == 'BASIC'){tooltiptext.style.color = "grey"}
            else if(itemList[itemName].rarity == 'UNCOMMON'){tooltiptext.style.color = "green"}
            else if(itemList[itemName].rarity == 'RARE'){tooltiptext.style.color = "blue"}
            else if(itemList[itemName].rarity == 'EPIC'){tooltiptext.style.color = "purple"}
            else if(itemList[itemName].rarity == 'LEGENDARY'){tooltiptext.style.color = "orange"}
            else if(itemList[itemName].rarity == 'MYTHIC'){tooltiptext.style.color = "pink"}        
        })
    }
}
// buy the items
document.getElementById('shopScreen').addEventListener('click', (event) => {
    if(event.target.className == 'tooltip'){
        if(player.coins >= parseInt(event.target.lastChild.data.replace('cost: ', ''))){
            player.coins -= parseInt(event.target.lastChild.data.replace('cost: ', ''));
            player.invintory.push(event.target.childNodes['1'].nodeValue);
            //remove the item from the shop
            event.target.parentElement.removeChild(event.target);
            // update the tab bar
            document.getElementById("coins").innerHTML = `Coins ${player.coins}`;
        }
    }
})

//TODO: on when reaching a level TBD unlock the next levels of the shop
let currLevel = 1;
function unlockNextLevel(){
    document.getElementById(`level${currLevel+1}`).className = `level ${currLevel == 1 ? 'two' : 'three'} unlockedLevel`;
    currLevel ++;
}

//TODO: REMOVE ONLY FOR TESTING
unlockNextLevel();
unlockNextLevel();



// put items in the shop 
refreshShop();