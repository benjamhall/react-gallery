import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList ({list, getGalleryList}) {
    return (
        <div>
            {list.map(item => {
                console.log(item)
                return (
                    <GalleryItem getGalleryList={getGalleryList} key={item.id} item={item} className="style" />
                )
            })}
        </div>
    )
}

export default GalleryList;