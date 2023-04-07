
// 2. класс должен иметь метод mount() (при вызове метода маунт листа, должны быть вызваны методы маунт всех тудух этого листа)


// 6. метод .sort('all' | 'done' | 'undone') который сортировать массив тудух НЕ МУТИРУЯ ЕГО
// .sortedTodos
// 7. контроль над удалением тудух должен быть у этого класса (нужно дергать метод .remove()  +  удалять инстанс тудухи из массива )
// 8. у этого класса должен быть обработчик на click который должен понимать кликнули ли по тудухе, кликнули ли у этой тудухе по кноке delete, должен понимать ПО КАКОЙ ИМЕННО тудухе кликнули, удалять соответствующую тудуху


import AbstractMountable from "../shared/mountable";
import Todo from "../todo";
import { isClickedOn } from "../shared/utils";

export default class TodoList extends AbstractMountable {
    constructor () {
        super();
        this.todos = [];

        const wrapper = document.createElement('div');
        wrapper.classList.add('todo-list');

        this.element = wrapper;
        
    }

    addTodo (text) {
        const newTodo = new Todo(text, this.onClick.bind(this));
        this.todos.push(newTodo);
        newTodo.mount(this.element);
    }

    onClick (selectedId) {
        const indexToDelete = this.todos.findIndex(({id}) => String(id) === String(selectedId));
        this.todos[indexToDelete].remove();
        this.todos.splice(indexToDelete, 1);
    }

    removeTodo() {}
}