import './style.css';

const todoContainer = document.querySelector('#todo-container');

const todoArr = [
  {
   description: 'Wash the car',
   completeted: false,
   index: 1
  },
  {
    description: 'Buy a bottle of milk',
    completeted: false,
    index: 2
   },
   {
    description: 'Call my mom',
    completeted: false,
    index: 3
   }
];

const displayTodo = (arr) => {
  arr.forEach(todo => {
    let li = document.createElement('li');
    li.className = 'main-item';
    li.innerHTML = `<span class="material-symbols-outlined checkbox">check_box_outline_blank</span>
      <p>${todo.description}</p>
      <span class="material-symbols-outlined more">more_vert</span>`;
  todoContainer.appendChild(li);
  })
}

displayTodo(todoArr);