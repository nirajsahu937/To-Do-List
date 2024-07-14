document.getElementById('add-btn').addEventListener('click', function() {
    let task = document.getElementById('todo-input').value;
    if (task) {
        let li = document.createElement('li');
        li.innerHTML = task + '<span onclick="removeTask(this)">&#x2716;</span>';
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});

function removeTask(element) {
    element.parentElement.remove();
}
