import './HeaderControl.scss';
import arrowDown from  '../../assets/svg/arrow-down.svg'
const HeaderControl = () => {
  return (
    <div className='header__control'>
        <div className="language__switch">
            <span>En</span>
            <img src={arrowDown} alt="arrow_down" />
        </div>
    </div>
  )
}

export default HeaderControl