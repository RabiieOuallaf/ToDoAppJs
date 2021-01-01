const input = document.getElementById('input');
const addBtn = document.getElementById('btn');
const removeBtn = document.getElementById('removeBtn');
const doneBtn = document.getElementById('doneBtn');
const todoList = document.getElementById('todoList');
var ulElement = document.createElement('ul');
let placeholderValue = '';

// This code is for clear placeholder value
input.addEventListener('focus' , () => {
    placeholderValue = input.placeholder;
    input.placeholder = '';
});
input.addEventListener('blur' , () => {
    input.placeholder = placeholderValue;
});
// this function is for add to do to a list
function addTodo(){

    let liElements = document.createElement('li');
    
    todoList.appendChild(ulElement);
    ulElement.appendChild(liElements);
    liElements.innerHTML = input.value;
    liElements.setAttribute('id' , 'li')
    // this code is for make todos done one by one
    liElements.addEventListener('contextmenu' , (e)=> {
        e.preventDefault();
        liElements.classList.toggle('done');
        TodoLs()
    });
    // this code is for remove todos one by one
    liElements.addEventListener('dblclick' , (e) => {
        e.preventDefault()
        liElements.remove()
    }); 
    // this code is for make all todos done
    doneBtn.addEventListener('click' , () => {
        liElements.classList.add('done');
        TodoLs()
    });
}; 
// this function is for removing input value on submit
function removeInpV(){
    input.value = ''
};
addBtn.addEventListener('click' , addTodo);
 
// this code is for remove all todos in one time
removeBtn.addEventListener('click' , () => {
    while(ulElement.firstChild)ulElement.removeChild(ulElement.firstChild);
    ulElement.remove()
});
// this code if for add todo by click on enter 
input.onkeydown = () => {
    if (window.event.keyCode == '13'){
        addTodo();
        removeInpV();
    };
};