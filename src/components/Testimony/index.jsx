import "./style.css"
import star from "../../assets/testimonies/star.png"

const Testimony = ({ content }) => {

    const renderStars = (number) => {
        return Array.from({ length: number }, (_, i) => (
            <img key={i} src={star} alt="star" />
        ));
    }


    return (
        <div className="testimonyContainer">
            <h3>{content.title}</h3>
            <div>
                {renderStars(content.stars)}
            </div>
            <p className="testimony-desc">{content.desc}</p>
            <div className="testimony-infoContainer">
                <div className="testimony-info-imgContainer">
                    <img src={content.img} alt="" />
                </div>
                <div className="testimony-info-textContainer">
                    <h4>{content.name}</h4>
                    <p>{content.job}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimony