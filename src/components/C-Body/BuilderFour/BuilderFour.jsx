import Style from './Builder.four.scss';
import Icon from "../../../assets/images/best-choice-icon.png";
import builderIcon from "../../../assets/images/builder-icon.png";
import Images from "../../../assets/images/IMAGE.png";
import tickIcon from "../../../assets/images/tick-icon.png";
import RatingStar from "../../../assets/images/rating-star.png";

const BuilderFour = () => {
    return (
        <div className="builder-four">
            <div className="product-content-four"></div>
            <div className="product-text-four">
                <p><strong>CDK Resposive Builder:</strong>
                    An extensive library of widgets
                    and apps, and detailed step-by
                    -step guides
                </p>
            </div>
            <div className="discount-template"></div>
            <div className="discount"><p>26% Off</p></div>
            <div className="number-four"></div>
            <div className="number-count-four">4</div>
            <div className="build-icon-four">
                <img src={builderIcon} />
            </div>
            <div className="builder-icon-text-four">
                <span>Builder4</span>
            </div>
            <div className="main-highlights-four">
                <h1>Main highlights</h1>
            </div>
            <div className="main-highlight-text-four">

            </div>
            <div className="highlight-point">
            </div>
            <div className='point-one'>
                <p>9.6</p>
            </div>
            <div className="highlight-point-two">
            </div>
            <div className='point-two'>
                <p>8.9</p>
            </div>
            <div className="highlight-point-three">
            </div>
            <div className='point-three'>
                <p>9.6</p>
            </div>
            <div className="highlight-text-one">
                <p>Building Responsive</p>
            </div>
            <div className="highlight-text-two">
                <p>Cool</p>
            </div>
            <div className="highlight-text-three">
                <p>Docs</p>
            </div>
            <div className="summary">
                <h3>Why we love it</h3>
            </div>
            <div className="summary-img-one">
                <img src={tickIcon} />
            </div>
            <div className="summary-img-two">
                <img src={tickIcon} />
            </div>
            <div className="summary-img-three">
                <img src={tickIcon} />
            </div>
            <div className="summary-txt-one">
                <p>Documentation</p>
            </div>
            <div className="summary-txt-two">
                <p>easy use</p>
            </div>
            <div className="summary-txt-three">
                <p>out of box</p>
            </div>

            <div className="show-more-four">
                <select name="show" id="show">
                    <option value="hide">Show More</option>
                </select>
            </div>
            <div className="ratings-template-four"></div>
            <div className="ratings-four">
                <h2>9.8</h2>
            </div>
            <div className="ratings-icon-four">
                <img id='icon' src={Images} />
            </div>
            <div className="ratings-text-four">
                <h3>Exceptional</h3>
            </div>
            <div className="ratings-star-four">
                <img src={RatingStar} />
            </div>
            <div className="ratings-button-fur">
                <button className='ratings-button-four'>View</button>
            </div>
        </div>
    );
}

export default BuilderFour;