import {
    createDeleteButton,
    createSpan,
    createToggleButton,
} from './utils';
import { isClickedOn } from '../shared/utils';
import { ICON } from '../constants';
import AbstractMountable from '../shared/mountable';
import './index.css';

export default class Todo extends AbstractMountable {
    constructor (text, sendId) {
        super();
        this.text = text;
        this.isDone = false; 

        const todoId = Date.now();
        this.id = todoId;
      

        const div = document.createElement('div');
        div.className = 'todo';

        div.addEventListener('click', ({target, currentTarget}) => { 
         
            if (isClickedOn(target, 'todo-delete')) {
                sendId(currentTarget.id);
            }
      
            if ( isClickedOn(target, 'todo-toggle') ) {
               this.toggle();
            }
        });

        div.append(createSpan(text));
        div.append(createToggleButton());
        div.append(createDeleteButton());
        div.id = todoId;

        this.element = div;
    }

    toggle () {
        this.isDone = !this.isDone;
        this.element.classList.toggle('done');
        const btn = this.element.getElementsByClassName('todo-toggle')[0];
        btn.innerHTML = this.isDone ? ICON.DONE : ICON.UNDONE;
    }

    remove () {
        this.element.remove();
    }

}








