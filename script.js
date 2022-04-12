//selectors

const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoOutput = document.querySelector('.todo-list')
const filterOptions = document.querySelector('.todo-filter-options')

//Event listener

toDoButton.addEventListener('click', todo);

toDoOutput.addEventListener('click', deletecheck);

filterOptions.addEventListener('click', filterOut);

//functions

function todo() {
    //DIV ELEMENT
    const divElement = document.createElement('div');
    divElement.classList.add('todo');
    //UL ELEMENT
    const Li = document.createElement('li');
    Li.classList.add('todo-list-items');
    Li.innerText = toDoInput.value;



    //  CHECK BUTTON ELEMENT  
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button')
    checkButton.innerHTML = '<i class="fas fa-check-circle"></i>';

    //  DELETE BUTTON ELEMENT
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    //APPENDING
    divElement.appendChild(Li);
    divElement.appendChild(checkButton);
    divElement.appendChild(deleteButton);



    // GRABBING UL
    // if (toDoInput.value != " " && toDoInput.value != "") {
    if (toDoInput.value.trim() !== "") {
        const ulMain = document.querySelector('.todo-list');
        ulMain.appendChild(divElement);
    }

    //CLEARING INPUT
    toDoInput.value = "";
}

// CHECK-DELETE FUNCTION
function deletecheck(e) {
    const element = e.target;
    if (element.classList[0] === 'delete-button') {
        const toDoListItem = element.parentElement;
        toDoListItem.classList.add('transition');
        toDoListItem.addEventListener('transitionend', () => toDoListItem.remove())

    }
    else if (element.classList[0] === 'check-button') {
        element.parentElement.classList.toggle('completed');
    }
}

//FILTER-TODO-LIST-ITEMS
function filterOut(e) {
    const filterToDo = toDoOutput.childNodes;


    filterToDo.forEach(function (ele) {

        switch (e.target.value) {
            case 'all': ele.style.display = "flex";
                break;

            case 'completed': if (ele.classList.contains("completed")) {

                ele.style.display = 'flex';

            }
            else {
                ele.style.display = 'none';
            }
                break;

            case 'pending': if (!ele.classList.contains("completed")) {

                ele.style.display = 'flex';

            }
            else {
                ele.style.display = 'none';
            }
                break;
        }
    });


}



