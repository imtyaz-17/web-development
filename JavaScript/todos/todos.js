function loadTodos() {
    //  console.log('loading');
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}
function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container');

    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>Tittle: ${todo.tittle}</h3>
            <p>User: ${todo.userId}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }

}
loadTodos();