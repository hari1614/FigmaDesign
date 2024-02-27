import Images from "../../assets/images/IMAGE.png";
import Image2 from "../../assets/images/img2.png";
import { ReactComponent as Icon } from '../../assets/svg/Vector.svg';
import Style from './Style.header.scss'

const Header = () => {
    const heading = 'Best Website builders in the US';
    const lastUpdated = 'Last updated - February 22, 2020';
    const advertisingDisclosure = 'Advertising Disclosure';

    return (

        <div className="header-container">
            <div className='header-content'>
                <h1>{heading}</h1>
                <span>
                    <img id="icon-1" src={Images} />
                    <span id="icon-detail-1"> {lastUpdated} </span>
                    <img id="icon-2" src={Image2} alt="" />
                    <span id="icon-detail-2"> {advertisingDisclosure}</span>
                    <select id="select-details" name="Country">
                        <option value="United States">Top Relevant</option>
                    </select>
                </span>
            </div>
            <div className="categories">
                <span>
                    <span>Tools</span>
                    <span>AWS Builder</span>
                    <span>Start Build</span>
                    <span>Build Supplies</span>
                    <span>Tooling</span>
                    <span>BlueHosting</span>
                </span>
            </div>
            <div class="sub-categories">
                <ul>
                    <li><a href="#">Home</a></li>
                    <Icon/>
                    <li><a href="#">Hosting for all</a></li>
                    <Icon/>
                    <li><a href="#">Hosting</a></li>
                    <Icon/>
                    <li><a href="#">Hosting6</a></li>
                    <Icon/>
                    <li><a href="#">Hosting5</a></li>      
                </ul>
            </div>
        </div>
    );
}

export default Header;