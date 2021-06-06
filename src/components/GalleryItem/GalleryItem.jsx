import axios from 'axios';
import './GalleryItem.css';
import {useState} from 'react'

function GalleryItem ({item, getGalleryList}) {
    const [isHidden, setIsHidden] = useState(true)

    // This function handles the Like button, so that when it is clicked it will update the number of likes
    const handleLike = () => {
        console.log('like button works', item);

        //Sends the information to the server
        axios.put(`/gallery/like/${item.id}`)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err);
        })

    }

    // Deletes image from the database
    const handleDelete = () => {
        console.log('delete button clicked');
        axios.delete(`/gallery/${item.id}`)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className="listItem">
            <div onClick={() => setIsHidden(!isHidden)} className="listItem" >
            { isHidden ? (
                <div>
                    <img onClick={() => setIsHidden(!isHidden)} src={item.path} />
                </div>
            ) : (
                <div onClick={() => setIsHidden(!isHidden)}>
                {item.description}
                </div>
            )}
            </div>

            <div>
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDelete}>Delete</button>
                <p>{item.likes} people liked this!</p>
            </div>
            {/* <button onClick={() => setIsHidden(!isHidden)}>
                {!isHidden ? 'Show Photo' : 'Show Info'}
            </button> */}

        </div>
    )
};


export default GalleryItem;