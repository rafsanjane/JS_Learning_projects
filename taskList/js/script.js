let form = document.querySelector('#task_form');
let taskinput = document.querySelector('#input_task');
let tasklist = document.querySelector('ul');
let filter = document.querySelector('#task_filter');
let clearTask = document.querySelector('#clearTask');


// define Listener

form.addEventListener('submit', addTask);
tasklist.addEventListener('click', removeTask);
clearTask.addEventListener('click', clearAllTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);
// Define Fumction
//Add Task

function addTask(e) {
    e.preventDefault();
    if (taskinput.value === '') {
        alert('Add a Task');
    } else {
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskinput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('class', 'crossbtn grid');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);

        storeTaskInLocalStroage(taskinput.value);

        taskinput.value = '';

    }

}

// remove task

function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are You sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
    }
}

//clear Task
function clearAllTask(e) {
    //tasklist.innerHTML = "";
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
    localStorage.clear();
}
//Filter Task
function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = 'none';
        }
    });
    console.log(text);
}

// Storage Funcation

function storeTaskInLocalStroage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(task => {
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('class', 'crossbtn grid');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);
    });
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }

    let li = taskItem;
    console.log(taskItem);
    li.removeChild(li.lastChild);
    //console.log(li.removeChild(li.lastChild));
    tasks.forEach((task, index) => {

        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
            console.log(`${index}:-- value: ${tasks}`);

        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}