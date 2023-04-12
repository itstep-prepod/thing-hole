
export const isClickedOn = (target, className) => 
    target.classList.contains(className) ||
    target.parentElement?.classList.contains(className);

export const createButton = (btnName, ...classNames) => {
    const btn = document.createElement('button');
    btn.classList.add(...classNames);
    btn.innerText = btnName;
    return btn;
};