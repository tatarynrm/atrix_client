import HomeMenu from '../../components/home-menu/HomeMenu'
import PageTitle from '../../components/page-title/PageTitle'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__inner container">
                <PageTitle title={'Your Travel Guide'} />
                <HomeMenu />
            </div>

        </div>
    )
}

export default Home