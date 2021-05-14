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
const plan = document.querySelector(".plan")
const addbtn = document.querySelector(".blue_button");
const planbtn = document.querySelector(".plan_button")
const unitWeight = document.querySelector(".weight-toggle")

let notelist = [{title: '', body: ''}];
let planlist = [{title: '', body: ''}];

let lb = false;

function units() {
    lb = !lb

}

function save(wlist){
    var newtitle = prompt("Please enter the date: ");
    if (wlist === notelist){
        if (lb === false){
            wlist.push({title: newtitle, body: textarea1.value + 'kg'});
        }
        if (lb === true){
            wlist.push({title: newtitle, body: textarea1.value + 'lbs'});
        }
    }
    if (wlist === planlist){
        wlist.push({title: newtitle, body: textarea1.value});
    }
}


function populatelist(loc) {
    loc.innerHTML= '';
    if (loc === list){
        for (let item of notelist) {
            let elem = document.createElement("li");
            let text = document.createTextNode(item.title);
            elem.appendChild(text);
            loc.appendChild(elem);
        }
    }
    if (loc === plan){
        for (let item of planlist) {
            let elem = document.createElement("li");
            let text = document.createTextNode(item.title);
            elem.appendChild(text);
            loc.appendChild(elem);
        }
    }
}

function showbodyweight(e){
    if (e.target !== e.currentTarget){
        var clickedNote = e.target.textContent;
        for (let item of notelist) {
            if (item.title === clickedNote){
                textarea1.value = item.body;
            }
        }
    }
}

function showbodyplan(e){
    if (e.target !== e.currentTarget){
        var clickedNote = e.target.textContent;
        for (let item of planlist) {
            if (item.title === clickedNote){
                textarea1.value = item.body;
            }
        }
    }
}
function formula() {
	var select = document.getElementById('selectOption');
 	var selectOption = select.options[select.selectedIndex].value;

    if(selectOption === "pound") {
        reset();
        document.getElementById("output").style.visibility ="visible";
                document.getElementById("lbsInput").addEventListener('input',function(e){
                let lbs = e.target.value;
                document.getElementById('poundOutput').innerHTML=lbs *1
	            document.getElementById('kgOutput').innerHTML = lbs /2.2046
});
    }else if (selectOption === "kg") {
        reset();
        document.getElementById("output").style.visibility = "visible";
                document.getElementById('lbsInput').addEventListener('input',function(e){
			    let lbs=e.target.value;
			    document.getElementById('kgOutput').innerHTML=lbs * 1;
	            document.getElementById('poundOutput').innerHTML = lbs * 2.20462;
})

} else if(selectOption === "default"){
    document.getElementById("output").style.visibility="hidden";
    }
}
function reset(){
	document.getElementById("lbsInput").value="";
	document.getElementById("lbsInput") .focus();
}
addbtn.addEventListener("click", save.bind(null, notelist), false);
addbtn.addEventListener("click", populatelist.bind(null, list));
planbtn.addEventListener("click", save.bind(null, planlist), false);
planbtn.addEventListener("click", populatelist.bind(null, plan), false);
list.addEventListener("click", showbodyweight, false);
plan.addEventListener("click", showbodyplan, false);
unitWeight.addEventListener("click", units);
