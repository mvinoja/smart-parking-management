let box=document.getElementById('d1');
let popup=document.getElementById('popup');
let closeBtn=document.getElementById('close');
let selectedCode="";
 for(let i=1; i<=20; i++){  
    let div=document.createElement('div');
    div.classList.add('slot');
    div.innerHTML=i;
    let code='C'+i;

    div.addEventListener('click',function(){
        document.querySelectorAll('.slot').forEach(function(s) { 
            s.classList.remove('active');
        });
        div.classList.add('active');
        selectedCode=code;
        popup.style.display = "flex";
    });
    box.appendChild(div);
 }
 closeBtn.addEventListener('click', function () {
    popup.style.display = "none";
    let activeSlot = document.querySelector('.slot.active');
    if (activeSlot) {
        activeSlot.classList.remove('active');
    }
});
let nameInp=document.getElementById('name');
let carInp=document.getElementById('car');
let timeInp=document.getElementById('time');
let codeInp=document.getElementById('code');

let submit=document.getElementById('submit');

submit.addEventListener('click',function(e){
    e.preventDefault();
    
    let userCode=codeInp.value;

    if(userCode!==selectedCode){
        alert('❌ Invalid Code! Please enter correct slot code shown at your selected slot.');
        return;
    }
    
    
    let parkingData={
        name:nameInp.value,
         car: carInp.value,
        time: timeInp.value,
        code: codeInp.value
    }
    localStorage.setItem('Booking Data',JSON.stringify(parkingData));

    alert("✅ Booking Confirmed!");
    popup.style.display='none';
    
    
    nameInp.value = "";
    carInp.value = "";
    timeInp.value = "";
    codeInp.value = "";

})

let word1="SPEED UP";
let word2="BOOKING";

let t1=document.getElementById("text1");
let t2=document.getElementById("text2");
let i=0;
let j=0;
function typeFirst(){
    if(i<word1.length){
        t1.innerHTML+=word1.charAt(i);
        i++;
        setTimeout(typeFirst,80);
    }
     else {
        setTimeout(typeSecond, 300); // delay before second word
    }
}

function typeSecond(){
    if(j<word2.length){
        t2.innerHTML+=word2.charAt(j);
        j++;
        setTimeout(typeSecond,80);
    }
}
typeFirst();  