import {
    createDeleteButton,
    createSpan,
    createToggleButton,
    isClickedOn
} from './utils';
import { ICON } from '../constants';
import AbstractMountable from '../shared/mountable';
import './index.css';

export default class Todo extends AbstractMountable {
    constructor (text) {
        super();
        this.text = text;
        this.isDone = false;

        const div = document.createElement('div');
        div.className = 'todo';

        div.addEventListener('click', ({target}) => { 
            if ( isClickedOn(target, 'todo-toggle') ) {
               this.#toggle();
            }
        });

        div.append(createSpan(text));
        div.append(createToggleButton());
        div.append(createDeleteButton());

        this.element = div;
    }

    #toggle () {
        this.isDone = !this.isDone;
        this.element.classList.toggle('done');
        const btn = this.element.getElementsByClassName('todo-toggle')[0];
        btn.innerHTML = this.isDone ? ICON.DONE : ICON.UNDONE;
    }

    remove () {
        this.element.remove();
    }
}


// todo.toggle()
// todo.delete()






