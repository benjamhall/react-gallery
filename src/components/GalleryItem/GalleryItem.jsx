import axios from 'axios';
import './GalleryItem.css';
import {useState} from 'react'

function GalleryItem ({item, getGalleryList}) {

    const [liked, setLiked] = useState(0);

    const handleLike = () => {
        console.log('like button works', item);

        const data = {
            counter
        }

        axios.put(`/gallery/${item.id}`, data)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className="listItem">
            <div>
                {item.description}
                <img src={item.path} />
                <button onClick={handleLike}>Like</button>
                <p>Likes:{liked} </p>
            </div>
            <button onClick={() => setIsHidden(!isHidden)}></button>
            
        </div>
    )
};


export default GalleryItem;