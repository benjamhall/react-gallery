import './GalleryItem.css'

function GalleryItem ({item}) {

    //const []

    return (
        <div className="listItem">
            <div>
                {item.description}
                <img src={item.path} />
            </div>
        </div>
    )
}


export default GalleryItem;