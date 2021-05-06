/*dark mode function: 
-create dark mode class within css 
-set variable to body element using document.body
-toggle dark mode class using element.classList.toggle()

hide buttons function: 
-use js to access the button using document.getElementById()
-set the button to change display property to none onclick using .style.display = 'none'

save button function:
-use console.log to prompt user to enter title of note
-add object to object array
-return title name in variable
-select nav bar using document.getElementById()
-create new element using document.createElement() using title name variable
-add to nav using .appendChild()*/

const textarea1 = document.querySelector(".text-area");
const list = document.querySelector(".weight");
const addbtn = document.querySelector(".blue_button");
const weightbtn = document.querySelector(".weight_button")

let notelist = [{title: '', body: ''}];

function save(){
    var newtitle = prompt("Please enter the date: ");
    notelist.push({title: newtitle, body: textarea1.value});
}

function populatelist() {
    for (let item of notelist) {
        let elem = document.createElement("li");
        let text = document.createTextNode(item.title);
        elem.appendChild(text);
        list.appendChild(elem);
    }
}

function showbody(e){
    if (e.target !== e.currentTarget){
        var clickedNote = e.target.textContent;
        for (let item of notelist) {
            if (item.title === clickedNote){
                textarea1.value = item.body;
            }
        }
    }
}
function weight(){
    
}

addbtn.addEventListener("click", save);
addbtn.addEventListener("click", populatelist);
addbtn.addEventListener("click", weight)
list.addEventListener("click", showbody, false);
