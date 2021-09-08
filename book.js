const form=document.getElementById('my-form');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.items');
//var n=document.getElementById('name').value;
//var em=document.getElementById('email').value;
    

    const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', saveToLocalStorage);

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


    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    localStorage.setItem('name',n);
localStorage.setItem('email',em);
  }

  
}
/*localStorage.setItem('name','bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
sessionStorage.setItem('name','Ashwini');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
document.cookie='name=ashwini; expires='+ new Date(2020,0,6).toUTCString();
console.log(document.cookie)*/

