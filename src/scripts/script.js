
//main
const btnCount = document.getElementById('btnCount');
let count = 0;
btnCount.onclick = () =>{
count++;
btnCount.innerText = "Count is: " + count
}