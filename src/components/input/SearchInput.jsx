import './SearchInput.scss'
import searchIcon from '../../assets/svg/search_icon.svg'
const SearchInput = () => {
    return (
        <div className='input__search'>
            <img src={searchIcon} alt="search_icon" />
            <input placeholder='Search...' />
        </div>
    )
}

export default SearchInput