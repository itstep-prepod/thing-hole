import React, {useState} from "react";
import {Input} from '../input';
import {FileInput} from '../file-input';
import {MapCoordsSelector} from '../map-coords-selector';




export const ThingAddForm = () => {
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
    }

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
          
        </>
    );
};



