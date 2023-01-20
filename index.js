var taskname = '';
const input = document.querySelector('.type-taskname');



function onChangeSave(ev) {
    taskname = input.value;
    if (taskname === '') {
        true
    } else {
        const buttonToTurn = document.querySelector('.button');
        buttonToTurn.classList.remove("button-dont-has-word");
    }
}

function onClickAdd() {
    if (taskname === '') {
        alert('the input do not has a name, please type your task name here')
    } else {
        const tasksArea = document.querySelector('.cards-area');
        
        const card = document.createElement('div');
        card.className = 'card';
        tasksArea.appendChild(card);

        const taskNameOnCard = document.createElement('input');
        taskNameOnCard.setAttribute('readonly', 'readonly');
        taskNameOnCard.type = 'text';
        taskNameOnCard.value = taskname;

        const editEvent = document.createElement('p');
        editEvent.innerText = 'edit'

        card.appendChild(taskNameOnCard);
    
        input.value = '';
    }
};

function editNameTask() {
    const inputToEdit = document.querySelector('.text-card');
    input.removeAttribute('readonly');
    input.focus();
}

function removeCard(index) {

}
