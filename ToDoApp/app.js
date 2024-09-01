document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});
