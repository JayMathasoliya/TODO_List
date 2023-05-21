const data = [];
const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        if (this.value != "") {
            addToDo(this.value)
            this.value = ""
        }
    }
})

const saveTodo = (item)=>{
    data.push(item)
    if(data.length === 0){
        localStorage.removeItem('todo');
    }
    else{
        localStorage.setItem('todo', JSON.stringify(data))
    }
}

const addToDo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item}
    <i class="fas fa-times"></i>`;

    listItem.querySelector('i').addEventListener('click', function () {
        listItem.remove();
    })

    toDoBox.appendChild(listItem);
    saveTodo(item);
}

(
    function (){
        const lstodo = JSON.parse(localStorage.getItem('todo'))
        if(lstodo != null){
            lstodo.forEach(element => {
                addToDo(element);
            });
        }
        
    }
)()