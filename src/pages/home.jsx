import Banner from '../components/home/banner/banner'
import Bio from '../components/home/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Experience from '../components/home/experience/experience'
import Services from '../components/home/services/services'

function Home() {
    return (
        <>
            <Banner />
            <Bio />
            <Video />
            <Roons />
            <Services />
            <Experience />
        </>
    )
}

export default Home