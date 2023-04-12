
// 1. нам нужно чтобы после фильтров тудухи стояли на своих прежних местах
// 2. нужно чтобы удаляло только из ВЬЮ! но не из МОДЕЛИ!
// 3. нужно после после возвращения тудушка была в том же состоянии что и до исчезновения (тогглинг, текст)
// 5. в TodoList реализовать логику фильтрации


import AbstractMountable from "../shared/mountable";
import Todo from "../todo";
import { EVENT_TYPE, FILTER_TYPE } from "../constants";
import './index.css';

export default class TodoList extends AbstractMountable {
    constructor () {
        super();
        this.todos = [];
        this.currentFilter = FILTER_TYPE.ALL;

        const wrapper = document.createElement('div');
        wrapper.classList.add('todo-list');

        this.element = wrapper;
    }

    addTodo (text) {
        const newTodo = new Todo(text, this.onClick.bind(this));
        this.todos.push(newTodo);
        newTodo.mount(this.element);
        this.filter();
    }

    onClick ({id, eventType}) {
        switch (eventType) {
            case EVENT_TYPE.DELETE:
                this.#removeTodo(id);
                break;
            case EVENT_TYPE.TOGGLE:
                this.#toggleTodo(id);
                break;
            default:
                throw new Error('no such event type!');
        }   
    }

    #toggleTodo (selectedId) {
        const indexToToggle = this.todos.findIndex(({id}) => 
            String(id) === String(selectedId));
        this.todos[indexToToggle].toggle();
        this.filter();
    }

    #removeTodo(selectedId) {
        const indexToDelete = this.todos.findIndex(({id}) => 
            String(id) === String(selectedId));
        this.todos[indexToDelete].remove();
        this.todos.splice(indexToDelete, 1);
    }

    setFilter (val) {
        this.currentFilter = val;
        this.filter();
    }

    filter () {
        [...this.element.children].forEach((child) => child.remove());


        switch (this.currentFilter) {
            case FILTER_TYPE.DONE:
                this.todos.forEach((todo) => {
                    if (todo.isDone) {
                        todo.mount(this.element)
                    } else {
                        todo.remove();
                    }
                });
                break;
            case FILTER_TYPE.UNDONE:
                this.todos.forEach((todo) => {
                    if (!todo.isDone) {
                        todo.mount(this.element)
                    } else {
                        todo.remove();
                    }
                });
                break;
            case FILTER_TYPE.ALL:
                this.todos.forEach((todo) => todo.mount(this.element));
                break;
        }
    }
}