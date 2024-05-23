import "./style.css"

const BgGallery = ({ info }) => {

    console.log(info)

    return (
        <div className="bgGallety-container">
            <div className="bgGallety-bgContainer">
                <img src={info[0].img} alt="" />
            </div>
            <div className="bgGallety-contentContainer">
                <div className="bgGallety-content">
                    <h2>{info[0].title}</h2>
                    <p>{info[0].desc}</p>
                </div>
                <div className="bgGallety-imgButtonsContainer">
                    <div className="bgGallety-imgButton1">
                        <img src={info[0].img} alt="" />
                    </div>
                    <div className="bgGallety-imgButton2">
                        <img src={info[1].img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgGallery