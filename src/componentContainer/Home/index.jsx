import { CareFuture, FrontPage, InfiniteGallery } from "../../components"
import DoubleScrollGallery from "../DoubleScrollGallery"
import "./style.css"

const Home = () => {
    return (
        <main>
            <FrontPage />
            <InfiniteGallery />
            <CareFuture />
            <DoubleScrollGallery />
        </main>
    )
}

export default Home