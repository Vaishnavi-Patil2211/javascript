 let namastebtn=document.querySelector('button');
 namastebtn.addEventListener('click',inputMsg);
 function inputMsg(){

    let name = prompt('Enter Name Of Student');
    namastebtn.textContent = 'Roll No. 1:' +  name;
     

}