import { useState } from 'react';
import axios from 'axios';


function GalleryForm ({getGalleryList}) {
    
    const [pathInput, setPathInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPhoto = {
            path: pathInput,
            description: descriptionInput
        }

        //Submit the information in the input fields to the server
        axios.post('/gallery', newPhoto).then(response => {
            console.log(response);
            getGalleryList();
            clearInputs();
        }).catch(err=> {
            console.error(err);
        })
    }

    //Clear input fields by resetting the item
    const clearInputs = () => {
        console.log('in inputs');

        setPathInput('');
        setDescriptionInput('');
    }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={pathInput}
                        onChange={(event) => setPathInput(event.target.value)}
                        placeholder=" Valid url"
                        />
                    <input
                        value={descriptionInput}
                        onChange={(event) => setDescriptionInput(event.target.value)}
                        placeholder="Description"
                        />
                    <button type="submit">Add to Gallery</button>
                    
                </form>
            </div>
        )
}

export default GalleryForm;
    