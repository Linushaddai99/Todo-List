import addTodo from './module/addTodo.js'
import displayTodo from './module/displayTodo.js';
import Todo from './module/Todo'
import deleteTodo from './module/deleteTodo.js';
import './style.css';

const mainForm = document.querySelector('.form-main');
const inputElement = document.querySelector('#todo');
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const clearCompleted = document.querySelector('.clear');

  
todoList.forEach((todo) => {
  displayTodo(todo);
});


mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = new Todo(inputElement.value, false, todoList.length + 1);

  todoList.push(todo);
  addTodo(todoList);
  mainForm.reset();
});

clearCompleted.addEventListener('click', () => {
  todoList.forEach(todo => {
    if(todo.completed === true) {
      deleteTodo(todo.index);
    }
  })
})