import Style from './Style.product.scss'
import Icon from "../../assets/images/best-choice-icon.png";
import builderIcon from "../../assets/images/builder-icon.png";
import Images from "../../assets/images/IMAGE.png";
import RatingStar from "../../assets/images/rating-star.png";
import { useState } from 'react';
const ProductList = () => {

    return (

        <div className="product-container">

            <div className="product-content"></div>
            <div className="product-text">
                <p><strong>WixPro 72-Inch Responsive Website
                    Builder-</strong> Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites
                    and Online Stores (Black/Blue)
                </p>
            </div>
            <div className="number"></div>
            <div className="number-count">1</div>
            <div className='best-choice'></div>
            <div className='best-choice-icon'>
                <img src={Icon} />
            </div>
            <div className="best-choice-text">
                <h2>Best Choice</h2>
            </div>
            <div className="build-icon">
                <img src={builderIcon} />
            </div>
            <div className="builder-icon-text">
                <span>Builder1</span>
            </div>
            <div className="main-highlights">
                <h1>Main highlights</h1>
            </div>
            <div className="main-highlight-text">
                <p>[What You Get]: Receive the WixPro website builder suite,
                    access to premium design templates, an extensive library
                    of widgets and apps, and detailed step-by-step guides.</p>
            </div>
            <div className="show-more">
                <select name="show" id="show">
                    <option value="hide">Show More</option>
                </select>
            </div>
            <div className="ratings-template"></div>
            <div className="ratings">
                <h2>9.8</h2>
            </div>
            <div className="ratings-icon">
                <img id='icon' src={Images} />
            </div>
            <div className="ratings-text">
                <h3>Exceptional</h3>
            </div>
            <div className="ratings-star">
                <img src={RatingStar} />
            </div>
            <div className="ratigs-button">
                <button className='ratings-button'>View</button>
            </div>





        </div >




    );
}

export default ProductList;