import axios from 'axios';
import './GalleryItem.css';
import {useState} from 'react'

function GalleryItem ({item, getGalleryList}) {
    const [isHidden, setIsHidden] = useState(true)

    const handleLike = () => {
        console.log('like button works', item);

        const likeCount = item.likes + 1

        const data = {
            isLiked: likeCount
        }

        axios.put(`/gallery/like/${item.id}`, data)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err);
        })

    }

    // const handleToggle = () => {
    //     console.log('image clicked', item);

    //     // const data = {
    //     //     isClicked: !item.isClicked
    //     // }

    //     axios.put(`/gallery/${item.id}`)
    //     .then(response => {
    //         console.log(response);

    //     }).catch(err => {
    //         console.log(err)
    //     })
            
    // }

    return (
        <div className="listItem">
            { isHidden ? (
                <div>
                    <img onClick={() => setIsHidden(!isHidden)} src={item.path} />
                </div>
            ) : (
                <div onClick={() => setIsHidden(!isHidden)}>
                {item.description}
                </div>
            )}

            <div>
                {/* {item.description}
                <img src={item.path} onClick={handleToggle} /> */}
                <button onClick={handleLike}>Like</button>
                <p>{item.likes} people liked this!</p>
            </div>
            {/* <button onClick={() => setIsHidden(!isHidden)}>
                {!isHidden ? 'Show Photo' : 'Show Info'}
            </button> */}
            
        </div>
    )
};


export default GalleryItem;