
export const isClickedOn = (target, className) => 
    target.classList.contains(className) ||
    target.parentElement?.classList.contains(className);