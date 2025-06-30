import Banner from '../components/home/banner/banner'
import Bio from '../components/home/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Experience from '../components/home/experience/experience'

function Home() {
    return (
        <>
            <Banner />
            <Bio />
            <Video />
            <Roons />
            <Experience />
        </>
    )
}

export default Home