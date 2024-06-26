import { navigation_menu } from '../../data/navigation_menu'
import './HomeMenu.scss'
const HomeMenu = () => {
    return (
        <div className='home__menu'>
            <div className="grid-container">

                {navigation_menu.map((item, idx) => {
                    return <div className='menu-item' style={{borderRadius:`${item?.settings?.borderRadius}`,backgroundColor:`${item?.settings?.bacgroundColor}`}}>
                        <img src={item.img} alt="" />
                        <span>{item.main_title}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HomeMenu