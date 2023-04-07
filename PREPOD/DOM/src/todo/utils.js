import { ICON } from "../constants"; 

export const createSpan = (text) => {
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.innerText = text;

    return span;
};

export const createToggleButton = () => {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'todo-toggle';
    toggleButton.innerHTML = ICON.UNDONE;

    return toggleButton;
};

export const createDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'todo-delete';
    deleteButton.innerHTML = ICON.TRASH;

    return deleteButton;
};

