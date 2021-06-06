import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

// This function lists each items in the gallery
function GalleryList ({list, getGalleryList}) {
    return (
        <div>
            {/* Loops through each item in the list */}
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