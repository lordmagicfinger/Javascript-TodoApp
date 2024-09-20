const userInput = document.getElementById('userInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

// what does the button do when clicked

addTaskBtn.addEventListener('click', function (){
    const taskText = userInput.value.trim();
    if (taskText){
        addTask(taskText);
        userInput.value = "";
    }
});
// addTask function should create a list item any time the addTaskBtn is clicked and the userInput is not empty
function addTask(text){
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.textContent = text;

    // add an editButton to the new task anytime it is created
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = "Edit";
    
    //what does the editBtn do anytime it is clicked
    
    editBtn.addEventListener('click', () => editTask(listItem, text));
    
    // add a deleteButton tto the new task anytime it is created
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = "Delete";

    // what does the deleteBtn do any time it is clicked

    deleteBtn.addEventListener('click', () =>{
        taskList.removeChild(listItem);
    });

    //Append The Edit and Delete Buttons to the task list

    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
};
// Create the EditTask Function

function editTask(listItem, oldText){
    const newText = prompt('Enter a new task : ', oldText);
    if (newText !== null && newText !== ""){
        listItem.childNodes[0].textContent = newText;
    };
};