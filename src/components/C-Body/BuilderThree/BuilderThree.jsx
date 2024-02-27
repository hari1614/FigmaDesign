import Style from './Builder.three.scss';
import Icon from "../../../assets/images/best-choice-icon.png";
import builderIcon from "../../../assets/images/builder-icon.png";
import Images from "../../../assets/images/IMAGE.png";
import RatingStar from "../../../assets/images/rating-star.png";

const BuilderThree = () => {
    return (
        <div className="product-container-three">
            <div className="product-content-three"></div>
            <div className="product-text-three">
                <p><strong>WixPro 72-Inch Responsive Website Builder-
                </strong>
                    Comprehensive Digital Platform Creation
                    Tool, Streamlined Design Interface for
                    Professional Websites and Online Stores
                    (Black/Blue)
                </p>
            </div>
            <div className="number-three"></div>
            <div className="number-count-three">3</div>
            <div className="build-icon-three">
                <img src={builderIcon} />
            </div>
            <div className="builder-icon-text-three">
                <span>Builder3</span>
            </div>
            <div className="main-highlights-three">
                <h1>Main highlights</h1>
            </div>
            <div className="main-highlight-text-three">
                <p>[What You Get]: Receive the WixPro
                    website builder suite, access to
                    premium design templates, an extensive
                    library of widgets and apps, and
                    detailed step-by-step guides.</p>
            </div>
            <div className="show-more-three">
                <select name="show" id="show">
                    <option value="hide">Show More</option>
                </select>
            </div>
            <div className="ratings-template-three"></div>
            <div className="ratings-three">
                <h2>9.3</h2>
            </div>
            <div className="ratings-icon-three">
                <img id='icon' src={Images} />
            </div>
            <div className="ratings-text-three">
                <h3>Exceptional</h3>
            </div>
            <div className="ratings-star-three">
                <img src={RatingStar} />
            </div>
            <div className="ratigs-button-tree">
                <button className='ratings-button-three'>View</button>
            </div>
        </div>
    );
}

export default BuilderThree;
