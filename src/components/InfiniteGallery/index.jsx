import "./style.css"
import boca from "../../assets/clubs/boca.png"
import botafogo from "../../assets/clubs/botafogo.png"
import corinthians from "../../assets/clubs/corinthians.png"
import crest from "../../assets/clubs/crest.png"
import cruzeiro from "../../assets/clubs/cruzeiro.png"
import independiente from "../../assets/clubs/independiente.png"
import newell from "../../assets/clubs/newell.png"
import palmeiras from "../../assets/clubs/palmeiras.png"
import ska from "../../assets/clubs/ska.png"
import spfc from "../../assets/clubs/spfc.png"
import usa from "../../assets/clubs/usa.png"
import vasco from "../../assets/clubs/vasco_da_gama.png"

const InfiniteGallery = ({hasTitle = true}) => {

    const TAGS = [
        boca,
        botafogo,
        corinthians,
        crest,
        cruzeiro,
        independiente,
        newell,
        palmeiras,
        ska,
        spfc,
        usa,
        vasco
    ];
    const DURATION = 40000;
    const ROWS = 1;
    const TAGS_PER_ROW = 12;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

    const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
        return (
            <div className='loop-slider' style={{
                '--duration': `${duration}ms`,
                '--direction': reverse ? 'reverse' : 'normal'
            }}>
                <div className='inner'>
                    {children}
                    {children}
                </div>
            </div>
        );
    };

    const Tag = ({ text, color }) => (
        <div className='tag' style={{ '--color': color }}>
            <img src={text} alt="" />
        </div>
    );


    return (
        <div className='tag-list'>
            {hasTitle && <h2 className="tag-list-title">Official Sponsors</h2>}
            <div className="tag-list-wrapper">
                {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                        {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                            <Tag text={tag} key={tag} />
                        ))}
                    </InfiniteLoopSlider>
                ))}
            </div>
            <div className='fade' />
        </div>
    )
}

export default InfiniteGallery