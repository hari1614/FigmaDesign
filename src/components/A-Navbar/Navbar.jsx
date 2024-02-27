import searchIcon from "../../assets/images/search-icon.png";
import Style from './Style.scss'
const Navbar = () => {
  return (

    <div className="navbar">
      <div className="search">
        <input type="search" />
      </div>
      <div className="nav-icon">
        <img src={searchIcon} />
      </div>
      <div className="list-items">
        <ul className="list-item">
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;