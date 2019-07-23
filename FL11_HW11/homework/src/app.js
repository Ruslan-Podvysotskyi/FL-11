let addBtn = document.querySelector('#add');
let newTask = document.querySelector('#new-task');
let list = document.querySelector('#list');
let counter = 0;
let msgError = document.querySelector('.title-error')
let newPosition;

function createNewTask(value) {
    let taskList = document.createElement('li');
    taskList.className = 'task';
    taskList.setAttribute('draggable', 'true');
    taskList.setAttribute('ondragstart', 'drag(event)');

    let taskWrap = document.createElement('div');
    taskWrap.className = 'task-cont';

    let wrapper = document.createElement('div');
    wrapper.className = 'task-wrapper';

    let chekBtn = document.createElement('button');
    chekBtn.className = 'check-btn';
    chekBtn.innerHTML = '<i class="material-icons task__check">check_box_outline_blank</i>';

    let label = document.createElement('label');
    label.className = 'task__description';
    label.innerText = value;

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="material-icons list__item-edit">edit</i>';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="material-icons">delete</i>';

    taskWrap.appendChild(chekBtn);
    taskWrap.appendChild(label);
    taskWrap.appendChild(editBtn);
    wrapper.appendChild(taskWrap);
    wrapper.appendChild(deleteBtn);
    taskList.appendChild(wrapper);

    return taskList;
}

let check = 10;
function addNewTask() {
    if (counter >= check) {
        return msgError.classList.add('open');
    }

    counter++;

    let editElement = `<input type="text" class="task-edit">
            <button class="save-btn">
                <i class="material-icons">save</i>
            </button>`;

    let editWrapper = document.createElement('div');
    editWrapper.className = 'edit-wrapper';
    editWrapper.innerHTML = editElement;

    let description = newTask.value;

    if (description) {
        let newTaskDescription = createNewTask(description);
        list.appendChild(newTaskDescription);
        newTask.value = '';
    }

    let delButtons = document.querySelectorAll('.delete-btn');
    delButtons.forEach(function (delBtn) {
        delBtn.onclick = function () {
            list.removeChild(delBtn.closest('.task'));
            counter--;
            msgError.classList.remove('open');
        }
    })

    let checkButtons = document.querySelectorAll('.check-btn');
    checkButtons.forEach(function (chekBtn) {
        chekBtn.onclick = function () {
            this.innerHTML = '<i class="material-icons task__check">check_box</i>'
        }
    })

    let editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(function (editBtnEl) {
        editBtnEl.onclick = function (e) {
            let editBtn = e.currentTarget;
            let descriptionEl = editBtn.previousSibling;
            let taskValue = descriptionEl.textContent;
            let thisTask = editBtn.closest('.task');
            thisTask.appendChild(editWrapper);

            document.querySelectorAll('.task-wrapper').forEach(function (taskWrp) {
                if (taskWrp.classList.contains('edit-mode')) {
                    taskWrp.classList.remove('edit-mode');
                }
            });

            let taskWraper = editBtn.parentNode.parentElement;
            taskWraper.classList.toggle('edit-mode');

            let input = editWrapper.childNodes[0];
            input.value = taskValue;
            let saveBtn = editWrapper.childNodes[2];
            saveBtn.onclick = function () {
                let newValue = input.value;
                descriptionEl.textContent = newValue;
                taskWraper.classList.toggle('edit-mode');
                thisTask.removeChild(editWrapper);
            }
        }
    });
}


addBtn.addEventListener('click', addNewTask);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    newPosition = ev.target;
}

function drop(ev) {
    ev.preventDefault();
    list.appendChild(newPosition);
}