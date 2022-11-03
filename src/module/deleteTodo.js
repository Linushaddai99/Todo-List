const deleteTodo = (index) => {
  const List = JSON.parse(localStorage.getItem('todoList'));
  const newList = List.filter((todo) => todo.index !== index);
  newList.forEach((todo) => {
    todo.index -= 1;
  });
  localStorage.setItem('todoList', JSON.stringify(newList));
  window.location.reload();
};

export default deleteTodo;