
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";

const GallerySection = () => {

    const basePath = import.meta.env.BASE_URL;

    const photos = [
        { src: `${basePath}av-portrait-3.JPG`, width: 900, height: 1600 },
        { src: `${basePath}av-landscape-1.JPG`, width: 1600, height: 900 },
        { src: `${basePath}av-landscape-2.JPG`, width: 1600, height: 1000 },
        { src: `${basePath}av-portrait-2.JPG`, width: 900, height: 1400 },
        { src: `${basePath}av-landscape-3.JPG`, width: 1600, height: 900 },
    ];


    return (
        <section className="section-container primary-bg py-[50px] px-[20px] space-y-8">
            <h1 className="primary-text font-funnel text-[24px]">Our Gallery</h1>
            <div className="w-full max-w-4xl">
                <PhotoAlbum
                    layout="rows"           
                    photos={photos}         
                    targetRowHeight={250}  
                    spacing={10}        
                    defaultContainerWidth={500}
                />
            </div>
        </section>
    )
}

export default GallerySection