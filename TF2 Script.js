




//Navigate to either the hats, weapons, or stranges for sale and copy and paste all of this into the chrome developer console and press enter


//--------------- GET CRAFT HATS WITH ONLY ONE COPY OR PAINTS OR CRAFT NUMBERS-----------------------------------------

var check_title = document.title;
if (check_title.includes('Hat')) {

    var loopy = function (kitty) {
        item_container_list = [document.getElementsByClassName('items-container')[3], document.getElementsByClassName('items-container')[2]];
        for (var f = 0; f < 2; f++) {
            for (var i = 0; i < (item_container_list[f].children.length); i++) {
                
                if (parseInt(item_container_list[f].children[i].dataset.numAvailable) > 1) {
                    item_container_list[f].children[i].style.display = 'none';
                
                }

                if (item_container_list[f].children[i].dataset.content.includes("Craft #")) {
                    console.log('in')
                    var old_string_to_use = item_container_list[f].children[i].dataset.content;
                    var item_mod_str = item_container_list[f].children[i].getElementsByClassName('item-value-indicator')[0];
                    item_mod_str.innerHTML = item_mod_str.innerHTML + "<br> CRAFT # " +  old_string_to_use.substring(old_string_to_use.indexOf("Craft #") + 7, old_string_to_use.indexOf(">", old_string_to_use.indexOf("Craft #") + 7));

                    var checkCraftNumber = parseInt(old_string_to_use.substring(old_string_to_use.indexOf("Craft #") + 7, old_string_to_use.indexOf(">", old_string_to_use.indexOf("Craft #") + 7)));
                    
                    if (checkCraftNumber < 100) {

                        item_mod_str.style.backgroundColor = "green";

                    }

                    else if (checkCraftNumber < 200) {

                        item_mod_str.style.backgroundColor = "orange";

                    }

                }
            }
        
            for (var i = 0; i < (item_container_list[f].children.length); i++) {
                
                if (item_container_list[f].children[i].dataset.itemGroupHash.includes('p')) {

                    console.log('made a paint big');
                    item_container_list[f].children[i].style.backgroundColor = "blue";
                }
            }};
        }

} else if (check_title.includes("Weapon")) {

//---------------------------------------------------------------------------------------------------;


//--------------- GET CRAFT WEAPONS WITH ONLY ONE COPY -----------------------------------------

    var loopy = function (kitty) {
        for (var i = 0; i < (document.getElementsByClassName('items-container')[1].children.length); i++) {
            console.log('in loop');
            if (parseInt(document.getElementsByClassName('items-container')[1].children[i].dataset.numAvailable) > 2) {
                document.getElementsByClassName('items-container')[1].children[i].style.display = 'none';
                console.log('removed an element')}}};


//---------------------------------------------------------------------------------------------------;

} else if (check_title.includes("Strange")) {

//---------------- CHECK FOR STRANGE PARTS AND SINGLE COPIES-------------------
    var loopy = function (kitty) {
        item_container_list = [document.getElementsByClassName('items-container')[1]];
        for (var f = 0; f < 1; f++) {
            for (var i = 0; i < (item_container_list[f].children.length); i++) {
                
                if (parseInt(item_container_list[f].children[i].dataset.numAvailable) > 1) {
                    item_container_list[f].children[i].style.display = 'none';
                
                }

                if (item_container_list[f].children[i].dataset.content.includes("Strange Part:")) {
                    console.log('in')
                    var old_string_to_use = item_container_list[f].children[i].dataset.content;
                    var item_mod_str = item_container_list[f].children[i].getElementsByClassName('item-value-indicator')[0];
                    item_mod_str.innerHTML = item_mod_str.innerHTML + "<br> PART: " +  old_string_to_use.substring(old_string_to_use.indexOf("Strange Part:") + 13, old_string_to_use.indexOf(">", old_string_to_use.indexOf("Strange Part:") + 13));

                }
            }
        }
    };
}
loopy();