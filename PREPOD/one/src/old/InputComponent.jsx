import  React, {useState, useEffect} from 'react';
import preloaderSrc from './assets/preloader.gif';

// 1. используя useState useEffect необходимо показывать прелоадер в течении 2 сек
// 2. после 2 сек показать компонент h2+input
// 3. вынести прелоадер в отдельный компонент Preloader


export const InputComponent = () => {
    const [isPreloaderON, setIsPreloaderON] = useState(true);

    const preloader = <img src={preloaderSrc}/>;

    useEffect(() => {
        setTimeout(
            () => setIsPreloaderON((prevVal) => !prevVal),
            2000
        );
    }, []);

    return isPreloaderON ? preloader : (
        <>
            <h2>user input</h2>
            <input type='text'/>
        </>
    );
};