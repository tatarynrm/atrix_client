import './Footer.scss'

import master from '../../assets/png/payment/master.png'
import maestro from '../../assets/png/payment/maestro.png'
import visa from '../../assets/png/payment/visa.png'
import discover from '../../assets/png/payment/discover.png'
import american from '../../assets/png/payment/american-express.png'

import chatSvg from '../../assets/svg/chat.svg'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <div className="company">
          <span>©Atrix, 2024 </span>
        </div>
        <div className="cookies column">
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
        <div className="terms column">
          <span>Terms & Conditions</span>
          <span>FAQ</span>
        </div>
        <div className="payment column">
          <span>Terms & Conditions</span>
          <div className='icons'>
            <img src={master} alt="master__card" />
            <img src={maestro} alt="maestro__card" />
            <img src={visa} alt="visa__card" />
            <img src={discover} alt="discover__card" />
            <img src={american} alt="american__card" />
          </div>
        </div>
        <div className="chat__us">
          <button className='chat__with-us'>
            <img src={chatSvg} alt="chat__img"/>
            <span>Chat with us</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer