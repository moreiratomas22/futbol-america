import { AutoGallery } from "../../components"
import "./style.css"
import image1 from "../../assets/images/autoGallery/image1.png"
import image2 from "../../assets/images/autoGallery/image2.png"
import image3 from "../../assets/images/autoGallery/image3.png"
import image4 from "../../assets/images/autoGallery/image4.png"
import image5 from "../../assets/images/autoGallery/image5.png"
import image6 from "../../assets/images/autoGallery/image6.png"
import image7 from "../../assets/images/autoGallery/image7.png"

const AutoGalleryContainer = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ]

    return (
        <section className="autoGallery-section">
            <AutoGallery images={images} />
        </section>
    )
}

export default AutoGalleryContainer