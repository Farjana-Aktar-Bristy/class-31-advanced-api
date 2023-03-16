fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        var orderedList = document.getElementById("todos");
        todos.map(function (todo) {
            var list = document.createElement("li");
            var todoText = document.createTextNode(todo.title);
            var todoCompletedBold = document.createElement("b");
            var todoCompetedText = document.createTextNode(" " + todo.completed);
            todoCompletedBold.appendChild(todoCompetedText);
            list.appendChild(todoText);
            list.appendChild(todoCompletedBold);
            orderedList.appendChild(list);
        });
    });