import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList ((list, getGalleryList)) {
    return (
        <div>
            {list.map(item => {
                console.log(item)
                return (
                    <Test>
                )
            })}
        </div>
    )
}

export default GalleryList;