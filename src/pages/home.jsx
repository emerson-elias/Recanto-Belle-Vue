import Banner from '../components/home/banner/banner'
import Bio from '../components/home/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Experience from '../components/home/experience/experience'
import Services from '../components/home/services/services'
import Reviews from '../components/home/reviews/reviews'
import Others from '../components/home/others/others'

function Home() {
    return (
        <>
            <Banner />
            <Bio />
            <Video />
            <Roons />
            <Services />
            <Experience />
            <Reviews />
            <Others />
        </>
    )
}

export default Home