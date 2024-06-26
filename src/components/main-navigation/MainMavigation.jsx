import './MainMavigation.scss';
import qrcodeImg from '../../assets/png/qr-code.png'

import backArrow from '../../assets/svg/arrow-back.svg';
import homeSvg from '../../assets/svg/home.svg';
import nextArrow from '../../assets/svg/arrow-next.svg';
const MainMavigation = () => {
    return (
        <div className='main__navigation container'>
            <div className="qrcode">
                <span className='vertical__text'>MOBILE VERSION</span>
                <img src={qrcodeImg} alt="qr-code" />
            </div>


            <div className="navigation">
                <button className='btn-menu back'>
                    <img src={backArrow} alt="go_back" />
                    <span>Back</span>
                </button>
                <button className='btn-menu home'>
                <img src={homeSvg} alt="go_home" />
                <span>Home</span>
                </button>
                <button className='btn-menu next'>
                <img src={nextArrow} alt="go_next" />
                <span>Next</span>
                </button>
            </div>
        </div>
    )
}

export default MainMavigation