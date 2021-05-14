const textarea1 = document.querySelector(".text-area");
const list = document.querySelector(".weight");
const addbtn = document.querySelector(".blue_button");
const unitWeight = document.querySelector(".weight-toggle");
const eplan = document.querySelector(".plan");
const planbtn = document.querySelector(".plan_button");

let notelist = [{title: '', body: ''}];

let lb = false;

function units() {
    lb = !lb
}

function save(wlist){
    var newtitle = prompt("Please enter the date: ");
    wlist.push({title: newtitle, body: textarea1.value});
}

function populatelist(loc) {
    loc.innerHTML= '';
    for (let item of notelist) {
        let elem = document.createElement("li");
        let text = document.createTextNode(item.title);
        elem.appendChild(text);
        loc.appendChild(elem);
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

function formula() {
	var select = document.getElementById('selectOption');
 	var selectOption = select.options[select.selectedIndex].value;

    if(selectOption === "pound") {
        reset();
        document.getElementById("output").style.visibility ="hidden";
                document.getElementById("lbsInput").addEventListener('input',function(e){
                    document.getElementById("output").style.visibility ="visible";
                let lbs = e.target.value;
                document.getElementById('poundOutput').innerHTML=lbs *1
	            document.getElementById('kgOutput').innerHTML = lbs /2.2046
});
    }else if (selectOption === "kg") {
        reset();
        document.getElementById("output").style.visibility = "hidden";
                document.getElementById('lbsInput').addEventListener('input',function(e){
                    document.getElementById("output").style.visibility ="visible";
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
list.addEventListener("click", showbodyweight, false);
unitWeight.addEventListener("click", units);