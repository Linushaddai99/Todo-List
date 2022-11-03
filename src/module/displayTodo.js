import editTodo from './editTodo.js';
import deleteTodo from './deleteTodo.js';
import complete from './complete.js';

const todoContainer = document.querySelector('#todo-container');

const displayTodo = (todo) => {
  const li = document.createElement('li');
  li.className = 'main-item';

  const checkbox = document.createElement('span');
  checkbox.classList = 'material-symbols-outlined checkbox icon';
  checkbox.textContent = 'check_box_outline_blank';
  li.appendChild(checkbox);

  const check = document.createElement('span');
  check.classList = 'material-symbols-outlined hide check';
  check.textContent = 'done';
  li.appendChild(check);

  const p = document.createElement('p');
  p.textContent = todo.description;
  li.appendChild(p);

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo.description;

  const miniForm = document.createElement('form');
  miniForm.classList = 'edit-me hide';
  miniForm.appendChild(input);

  li.appendChild(miniForm);

  const editIcon = document.createElement('span');
  editIcon.classList = 'material-symbols-outlined more icon';
  editIcon.textContent = 'edit';
  li.appendChild(editIcon);

  editIcon.addEventListener('click', () => {
    li.classList.add('edit-background');
    input.classList.add('edit-background');
    p.classList.add('hide');
    miniForm.classList.remove('hide');
  });

  miniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editTodo(input.value, todo.index);
  });

  const deleteIcon = document.createElement('span');
  deleteIcon.classList = 'material-symbols-outlined icon';
  deleteIcon.textContent = 'delete';
  li.appendChild(deleteIcon);

  checkbox.addEventListener('click', () => {
    p.style.textDecoration = 'line-through';
    complete(todo.index);
    checkbox.classList.add('hide');
    check.classList.remove('hide');
  });

  if (todo.completed === true) {
    checkbox.classList.add('hide');
    check.classList.remove('hide');
    p.style.textDecoration = 'line-through';
  }

  deleteIcon.addEventListener('click', () => {
    deleteTodo(todo.index);
  });

  todoContainer.appendChild(li);
};

export default displayTodo;