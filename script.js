// script.js

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskEntry = document.getElementById('task-entry').value;
  const priority = document.getElementById('priority').value;
  const category = document.getElementById('category').value;
  const dueDate = document.getElementById('due-date').value;

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.textContent = `${taskEntry} (${priority}) - ${category} - Due: ${dueDate}`;
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('checked');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  taskForm.reset();
});
