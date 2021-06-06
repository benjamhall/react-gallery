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

        axios.post('/gallery', newPhoto).then(response => {
            getGalleryList()
        }).catch(err=> {
            console.error(err);
        })
    }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={pathInput}
                        onChange={(event) => setPathInput(event.target.value)}
                        placeholder="url"
                        />
                    <input
                        value={descriptionInput}
                        onChange={(event) => setDescriptionInput(event.target.value)}
                        placeholder="description"
                        />
                    <button type="submit">Add to Gallery</button>
                    
                </form>
            </div>
        )
}

export default GalleryForm;
    