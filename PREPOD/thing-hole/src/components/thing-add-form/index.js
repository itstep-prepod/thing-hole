import React, {useState} from "react";
import {Input} from '../input';
import {FileInput} from '../file-input';
import {MapCoordsSelector} from '../map-coords-selector';
import {Button} from '../button';



export const ThingAddForm = ({onThingAdd}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [coords, setCoords] = useState(null);

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const onDescriptionChange = ({target: {value}}) => {
        setDescription(value);
    };

    const onFileInputChange = (imgUrl) => {
        setImgUrl(imgUrl);
    };

    const onAddClick = () => {
        const thing = {title, description, imgUrl, coords};
        onThingAdd(thing);
    };

    // TODO2: MapCoordsSelector two way binding

    return (
        <>
            <MapCoordsSelector/>
            <Input 
                label='Title'
                onChange={onTitleChange}
                value={title}
            />
            <Input 
                label='Description'
                onChange={onDescriptionChange}
                value={description}
            />
            <FileInput 
                onChange={onFileInputChange}
                value={imgUrl}
            />
            <Button onClick={onAddClick}>
                OK
            </Button>
        </>
    );
};



