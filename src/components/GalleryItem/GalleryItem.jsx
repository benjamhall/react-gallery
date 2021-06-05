import axios from 'axios';
import './GalleryItem.css';
import {useState} from 'react'

function GalleryItem ({item, getGalleryList}) {

    const [liked, setLiked] = useState(0);

    const handleLike = () => {
        console.log('like button works', item);

        const data = {
            isLiked: 
            counter ++
        }

        axios.put(`/gallery/${item.id}`, data)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err);
        })

    }

    const handleDescription = () => {
        console.log('image clicked', item);

        axios.put(`/gallery/${item.id}`)
            
    }

    return (
        <div className="listItem">
            <div>
                {item.description}
                <img src={item.path} onClick={handleDescription} />
                <button onClick={handleLike}>Like</button>
                <p>{liked} people liked this!</p>
            </div>
            <button onClick={() => setIsHidden(!isHidden)}></button>
            
        </div>
    )
};


export default GalleryItem;