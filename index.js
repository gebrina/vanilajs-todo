// Import stylesheets
import './style.css';
const form= document.querySelector('form');
const todos = [];
const message = document.createElement('p');
message.textContent=todos.length===0&&"No Todos";
const table = document.querySelector('table');
const parent = table.parentElement;
parent.appendChild(message)
form.addEventListener('submit',(e)=>{
  e.preventDefault();
 const inputs = e.target.querySelectorAll('input');
 const formValue={};
 inputs.forEach(input=>{
   formValue.id=Math.floor(Math.random()*1000)
   if(input.type=="checkbox"){
   formValue[input.getAttribute('name')] = input.checked;
   input.checked=false;
   }else{ 
   formValue[input.getAttribute('name')] = input.value;
   input.value='';
   }

 })

 todos.push(formValue)
 updateTable();
})

const updateTable = ()=>{
  const tBody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const id = document.createElement('td');
  const title = document.createElement('td');
  const description = document.createElement('td');
  const isDoneWrapper = document.createElement('td');
  const isDone = document.createElement('input');
  isDone.setAttribute('type','checkbox');

  todos.sort((a,b)=>a.id-b.id).forEach(todo=>{
    message.textContent='';
    id.innerHTML=todo.id;
    title.textContent=todo.title;
    description.textContent=todo.description;
    isDone.checked=todo.isDone;
  })
  isDoneWrapper.appendChild(isDone)
  tr.appendChild(id)
  tr.appendChild(title)
  tr.appendChild(description)
  tr.appendChild(isDoneWrapper)
  tBody.appendChild(tr)

}