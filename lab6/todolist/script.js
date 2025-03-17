const addTaskButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText.length > 50) {
        alert("Task should not exceed 50 characters!");
        return;
    }
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskItem.querySelector('span').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(taskItem);
            }
        });
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
