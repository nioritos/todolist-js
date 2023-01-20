var taskname = '';

const input = document.querySelector('.type-taskname');
const buttonToTurn = document.querySelector('.button');

document.addEventListener('keydown', (v) => {
   console.log(v)
   
    if(v.key === 'Enter') {
        onClickAdd()
    }else {
        false
    }
})


function onChangeSave(ev) {
    taskname = input.value;
    if (taskname === '') {
        true
    } else {
        buttonToTurn.classList.remove("button-dont-has-word");
    }
}

function onClickAdd() {
    if (taskname === '') {
        alert('the input do not has a name, please type your task name here')
    } else {
        
        const card = document.createElement('div');
        const tasksArea = document.querySelector('.cards-area');
        const taskNameOnCard = document.createElement('input');
        const actionsArea = document.createElement('div')
        const deleteEvent = document.createElement('p');
        const editEvent = document.createElement('i');

        card.className = 'card';
        tasksArea.appendChild(card);

        taskNameOnCard.setAttribute('readonly', 'readonly');
        taskNameOnCard.type = 'text';
        taskNameOnCard.value = taskname;


        actionsArea.className.add = 'actions-card';
        editEvent.innerText = 'EDIT'
        
        deleteEvent.innerText = 'DELETE'
        
        actionsArea.appendChild(deleteEvent);
        actionsArea.appendChild(editEvent);
        card.appendChild(taskNameOnCard);
        card.appendChild(actionsArea)
    
        input.value = '';

        editEvent.addEventListener('click', () => {
            editNameTask(taskNameOnCard, editEvent);
            }) 
        
        deleteEvent.addEventListener('click', () => {
            removeCard(tasksArea, card);
        })
    }
};

function editNameTask(param, canEdit) {
    if(canEdit.innerText === 'EDIT') {
        canEdit.innerText = 'SAVE';
        param.removeAttribute('readonly');
        param.focus();
    }else if(canEdit.innerText === 'SAVE') {
        canEdit.innerText = 'EDIT';
        param.setAttribute('readonly', 'readonly');
        param.blur();
    }
}

function removeCard(param, arg) {
    param.removeChild(arg)   
}
