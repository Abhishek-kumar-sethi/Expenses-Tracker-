document.addEventListener('DOMContentLoaded',function(){
var clearall = document.getElementById("clearall")
var overlay = document.querySelector('.overlay')
var data = document.getElementById("data");
var int = document.getElementById('item')
var amount = document.getElementById("amount")
var input = document.querySelectorAll('input')
var ul = document.getElementById('ul')
var cancel = document.getElementById("cancel");
var confirmdel = document.getElementById("confirmdel")
var Additem = document.getElementById('additem')
const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
var time = new Date();
var date = time.getDate()+'-'+monthNames[time.getMonth()]+'-'+time.getMonth()+" "+time.getHours()+":"+time.getMinutes();
console.log(date)
console.log(Additem)
console.log(int)
clearall.addEventListener('click', () => {
        overlay.style.display = "flex";
        console.log("working")
    })
cancel.addEventListener("click",function(){
        overlay.style.display = "none";
    })
    Additem.addEventListener('click',function(){
        var array = []
if(int.value.trim() !== '' &&  amount.value.trim() !== '')
{
    for (let index = 0; index < input.length; index++) {
        input[index].nextElementSibling.style.display = "none";
        input[index].style.borderColor = "rgba(0,0,0,0.2)"
    }
    let li = document.createElement("li")
    let itemspan= document.createElement('span')
    let amountspan = document.createElement('span')
    let createdspan = document.createElement('span')
    let delspan = document.createElement('span')
    let delicon = document.createElement('ion-icon');
    let itemvalue = int.value;
    let amountvalue = amount.value;
    let datevalue = date;
    delicon.setAttribute('name','trash-outline');
    delspan.setAttribute("id","delete")
    li.setAttribute("id","div")
    delspan.appendChild(delicon)
    itemspan.append(itemvalue)
    amountspan.append(amountvalue)
    createdspan.append(datevalue)
    li.append(itemspan,amountspan,createdspan,delspan)
    ul.appendChild(li)
    console.log(delspan)
    var delbtn = document.getElementById("delete");
    itemspan.addEventListener('click', () =>{
        console.log(li)
        li.remove()
    })
    delspan.addEventListener('click',() =>{
        console.log(li);
        li.remove(); 
    })
    confirmdel.addEventListener('click',() =>{
        console.log(li);
        li.remove();
        overlay.style.display = "none";
    })
}
else{
  for (let index = 0; index < input.length; index++) {
    if(input[index].value == ''){
        console.log(input[index].nextElementSibling)
        input[index].nextElementSibling.style.display = "block";
        input[index].style.borderColor = "red";
    }
  }
}
amount.value = '';
int.value = '';
    })
})
