// 2. кнопка для создания туду
// 3. создать фильтр (done, undone, all)
// 6. при удалении тудухи показывать модалку
// 7. хранить тудухи в локалсторедже
// 8. ? текст менять
// 9. ? drag and drop

import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoFilter from './todo-filter';
import './index.css';


const todoList = new TodoList();
const todoFilter = new TodoFilter(todoList.setFilter.bind(todoList));
const todoInput = new TodoInput(todoList.addTodo.bind(todoList)); 

todoFilter.mount(document.body);
todoInput.mount(document.body);
todoList.mount(document.body);




