import { CareFuture, FrontPage, InfiniteGallery } from "../../components"
import "./style.css"

const Home = () => {
    return (
        <main>
            <FrontPage />
            <InfiniteGallery />
            <CareFuture />
        </main>
    )
}

export default Home