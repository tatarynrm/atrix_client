import './HeaderBottom.scss';

import SearchInput from '../input/SearchInput';
import HeaderControl from '../header_control/HeaderControl';
import Logo from '../logo/Logo';
const HeaderBottom = () => {
    return (
        <div className='header__bottom'>
            <div className="header__bottom-inner container">
                <Logo />
                <SearchInput />
                <HeaderControl />
            </div>
        </div>
    )
}

export default HeaderBottom