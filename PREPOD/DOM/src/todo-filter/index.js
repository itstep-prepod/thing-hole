import AbstractMountable from "../shared/mountable";
import { createButton } from "../shared/utils";
import { isClickedOn } from "../shared/utils";
import { FILTER_TYPE } from '../constants';
import './index.css';


export default class TodoFilter extends AbstractMountable {
    constructor (sendButtonType = () => {}) {
        super();


        const wrapper = document.createElement('div');
        wrapper.classList.add('todo-filter');

        const btnAll = createButton('All', 'filter-all', 'todo-btn');
        const btnDone = createButton('Done', 'filter-done', 'todo-btn');
        const btnUndone = createButton('Undone', 'filter-undone', 'todo-btn');
        btnAll.value = FILTER_TYPE.ALL;
        btnDone.value = FILTER_TYPE.DONE;
        btnUndone.value = FILTER_TYPE.UNDONE;

        wrapper.addEventListener('click', ({target}) => {
            if (isClickedOn(target, 'todo-btn')) {
                sendButtonType(target.value);
            } 
        });

        wrapper.append(btnAll);
        wrapper.append(btnDone);
        wrapper.append(btnUndone);

        this.element = wrapper;
    }

}
