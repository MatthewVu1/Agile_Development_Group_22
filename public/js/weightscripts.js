// const textarea1 = document.querySelector(".text-area");
// const list = document.querySelector(".weight");
// const addbtn = document.querySelector(".blue_button");
// const unitWeight = document.querySelector(".weight-toggle");
// const eplan = document.querySelector(".plan");
// const planbtn = document.querySelector(".plan_button");
// const deletebtn = document.querySelector(".red_button");

// let lb = false;

// function units() {
//     lb = !lb
// };

var wlist = {date: "05/10/2021", weight: 165.0, unit: "lbs"};

exports.newEntry = function exp () {
    return wlist;
};

// addbtn.addEventListener('click', function(e) {
//   console.log('button was clicked');

//   fetch('/', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('new entry entered');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
// exports.newEntry = function save(){
//     var newdate = prompt("Please enter the date: ");
//     if (lb === true){
//         wlist.push({date: newdate, weight: textarea1.value, unit: 'lbs'});
//     }
//     if (lb === false){
//         wlist.push({date: newdate, weight: textarea1.value, unit: 'kg'});
//     }
//     return wlist;
// };

// exports.s = save;




// function populatelist(loc) {
// loc.innerHTML= '';
// for (let item of notelist) {
//     let elem = document.createElement("li");
//     let text = document.createTextNode(item.title);
//     elem.appendChild(text);
//     loc.appendChild(elem);
//     }
// }

// function showbodyweight(e){
//     if (e.target !== e.currentTarget){
//         var clickedNote = e.target.textContent;
//         for (let item of notelist) {
//             if (item.title === clickedNote){
//                 textarea1.value = item.body;
//             }
//         }
//     }
// }

// function delete_(){
//     list.innerHTML = "";
//     textarea1.value = "";
//     for (i=0; i < notelist.length; i++){
//         notelist.pop();
//     }
// }

// document.getElementById("output").style.visibility="hidden";
// document.getElementById("lbsInput").addEventListener('input',
//    function(e){
//     document.getElementById("output").style.visibility ="visible";
//     let lbs = e.target.value;
//     document.getElementById('poundOutput').innerHTML=lbs *1
// 	document.getElementById('kgOutput').innerHTML = lbs /2.2046
// });



// addbtn.addEventListener("click", save, false);
// addbtn.addEventListener("click", populatelist.bind(null, list));
// list.addEventListener("click", showbodyweight, false);
// deletebtn.addEventListener("click", delete_, false);
// unitWeight.addEventListener("click", units);