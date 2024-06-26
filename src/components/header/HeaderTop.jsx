import './HeaderTop.scss';
import { navigation_menu } from '../../data/navigation_menu';
const HeaderTop = () => {
    return (
        <div className='header__top'>

            <div className="header__top-inner container">
            {navigation_menu.map((item,idx)=>{
                return <span key={idx}>{item.header_title}</span>
            })}
            </div>

        </div>
    )
}

export default HeaderTop