import "./style.css"
import checkpointsImg from "../../assets/images/checkpoints.png"

const Checkpoints = () => {

    return (
        <section className="checkpoints-container">
            <img src={checkpointsImg} alt="" />
            <div className="cp-item cp-mission"></div>
            <div className="cp-item cp-dedication"></div>
            <div className="cp-item cp-excellence"></div>
            <div className="cp-item cp-vision"></div>
            <div className="cp-item cp-values"></div>
            <div className="cp-item cp-career"></div>
        </section>
    )
}

export default Checkpoints