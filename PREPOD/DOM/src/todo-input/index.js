import AbstractMountable from '../shared/mountable';
import './index.css';

export default class TodoInput extends AbstractMountable {
    constructor (clickHandler) {
        super();

        const input = document.createElement('input');
        input.classList.add('todo-input');

        this.input = input;

        const button = document.createElement('button');
        button.innerText = 'Ok';
        button.addEventListener('click', () => clickHandler(this.getText()) );
       
        button.classList.add('todo-add-btn');
      
        const wrapper = document.createElement('div');
        wrapper.classList.add('todo-add-wrapper');

        wrapper.append(input);
        wrapper.append(button);

        this.element = wrapper;
    }

    getText () {
        const text = this.input.value;
        this.input.value = '';
        return text;
    }
}
