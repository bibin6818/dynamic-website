// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="delete" onclick="removeTask(this)">❌</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(element) {
    element.parentElement.remove();
}
