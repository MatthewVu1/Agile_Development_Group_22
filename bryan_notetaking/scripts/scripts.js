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

const btn = document.querySelector(".darkbutton");
const rightcolor = document.querySelector(".right");
const leftcolor = document.querySelector(".left");
// const cancelbtn = document.querySelector(".cancelbutton");
const savebtn = document.querySelector(".savebutton");
const newnotebtn = document.querySelector(".newnote");
const textarea1 = document.querySelector(".notesarea");
const list = document.querySelector(".notes");
const addbtn = document.querySelector(".add")

let notelist = [{title: 'note one', body: 'this is my first note'}];

function darkMode(){
    rightcolor.classList.toggle("dark-mode");
    leftcolor.classList.toggle("dark-mode");
}

function changeButtonText(){
    if (btn.textContent === "Dark Mode"){
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode"
    }
}

function cancel(){
    textarea1.style.display = 'none';
    cancelbtn.style.display = 'none';
    savebtn.style.display = 'none';
}

function newnote(){
    if (cancelbtn.style.display === 'none'){
        textarea1.style.display = 'block';
        cancelbtn.style.display = 'block';
        savebtn.style.display = 'block';
    } else {
        textarea1.value='';
    }
}

function save(){
    var newtitle = prompt("Please enter a title for your note: ");
    notelist.push({title: newtitle, body: textarea1.value});
}

function populatelist() {
    list.innerHTML='';
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

btn.addEventListener("click", darkMode);
btn.addEventListener("click", changeButtonText);
// cancelbtn.addEventListener("click", cancel);
newnotebtn.addEventListener("click", newnote);
addbtn.addEventListener("click", save);
addbtn.addEventListener("click", populatelist);
list.addEventListener("click", showbody, false);
