const form=document.getElementById('my-form');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.items');
const userList = document.querySelector('#users');
//var n=document.getElementById('name').value;
//var em=document.getElementById('email').value;
    

    const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', saveToLocalStorage);
myForm.addEventListener('DOMContentLoaded',function(e){});

function saveToLocalStorage(e)
{
  e.preventDefault();
  const n=e.target.name.value;
  const em=e.target.email.value;
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
      var linebreak=document.createElement('br');
      
const obj={ n,em};
localStorage.setItem(obj.em,JSON.stringify(obj));
const li = document.createElement('li');
userList.appendChild(document.createTextNode(` ${obj.n} : ${obj.em}` ));
userList.appendChild(linebreak);

//let myobj_deserialized=JSON.parse(localStorage.getItem(myobj));
    /*localStorage.setItem('name',n);
localStorage.setItem('email',em);*/
  }
  

  
}
/*localStorage.removeItem('name');
sessionStorage.setItem('name','Ashwini');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
document.cookie='name=ashwini; expires='+ new Date(2020,0,6).toUTCString();
console.log(document.cookie)*/
