// let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
// var search = document.getElementById('search');
// let data = '';
// for (let i = 0; i < arr.length; i++) {
//     data += `<div class="col-md-4 pb-4">
//                 <div>
//                     <h2 class="p-5 border-success border text-center text-success">${arr[i]}</h2>
//                 </div>
//             </div>`
// }
// document.getElementById('h2').innerHTML = data;

// search.onkeyup=function(e){
//     let data='';
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].toLowerCase().includes(e.target.value.toLowerCase())){
//             data+= `<div class="col-md-4 pb-4">
//             <div>
//                 <h2 class="p-5 border-success border text-center text-success">${arr[i]}</h2>
//             </div>
//         </div>`
//         }

//     }
//     document.getElementById('h2').innerHTML=data;
// }

let arr = ["A", "B", "C", "D", "E", "F"];
let search = document.getElementById("search");
let data = "";
for (let i = 0; i < arr.length; i++) {
  data += `<div class="col-md-4 mb-3">
                <div class=" p-5 border-success border text-center text-success">${arr[i]}</div>
            </div>`;
}
document.getElementById("h2").innerHTML = data;

search.onkeyup = function (e) {
  let val = e.target.value;
  let data = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes(val.toLowerCase())) {
      data += `<div class="col-md-4 mb-3">
                <div class=" p-5 border-success border text-center text-success">${arr[i]}</div>
            </div>`;
    }
  }
  document.getElementById("h2").innerHTML = data;
};
