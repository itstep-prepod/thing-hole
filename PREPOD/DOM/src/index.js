// 2. кнопка для создания туду
// 3. создать фильтр (done, undone, all)
// 6. при удалении тудухи показывать модалку
// 7. хранить тудухи в локалсторедже
// 8. ? текст менять
// 9. ? drag and drop

import {BASIC_TEMPLATE} from './constants';
import TodoInput from './todo-input';
import './index.css';
import TodoList from './todo-list';


document.body.insertAdjacentHTML('afterbegin', BASIC_TEMPLATE);

const todoList = new TodoList();

const todoInput = new TodoInput(todoList.addTodo.bind(todoList)); 

todoInput.mount(document.body);
todoList.mount(document.body);
