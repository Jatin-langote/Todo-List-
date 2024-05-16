const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const todoText = document.getElementById('todo-input').value;

  // Create a new list item
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    listItem.classList.toggle('completed');
  });
  const label = document.createElement('label');
  label.textContent = todoText;
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  // Add the item to the list
  todoList.appendChild(listItem);

  // Clear the input field
  todoForm.reset();
});
