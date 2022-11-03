const complete = (index) => {
    const listOfTodo = JSON.parse(localStorage.getItem('todoList'));
    listOfTodo.forEach((todo) => {
      if (todo.index === index) {
        todo.completed = true;
      }
    });
    localStorage.setItem('todoList', JSON.stringify(listOfTodo));
  };
  
  export default complete;