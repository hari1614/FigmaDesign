
import Style from './Builder.two.scss';
import Icon from "../../assets/images/best-choice-icon.png";
import builderIcon from "../../assets/images/builder-icon.png";
import Images from "../../assets/images/IMAGE.png";
import RatingStar from "../../assets/images/rating-star.png";

const BuilderTwo = () => {
  return (
    <div className="product-container-two">
      <div className="product-content-two"></div>
      <div className="product-text-two">
        <p><strong>SiteCraft 68-Inch Ultimate Web Design
          Studio-</strong> Advanced Site Creation Toolkit, I
          ntuitive Drag-and-Drop Editor for Dynamic
          Websites and E-commerce Platforms
          (Green/White)
        </p>
      </div>
      <div className="number-border-two"></div>
      <div className="number-count-two">2</div>
      <div className='best-value-two'></div>
      <div className='best-value-icon-two'>
        <img src={Icon} />
      </div>
      <div className="best-value-text-two">
        <h2>Best Choice</h2>
      </div>
      <div className="build-icon-two">
        <img src={builderIcon} />
      </div>
      <div className="builder-icon-text-two">
        <span>Builder2</span>
      </div>
      <div className="main-highlights-two">
        <h1>Main highlights</h1>
      </div>
      <div className="main-highlight-text-two">
        <p>[What You Get]: Gain access to the SiteCraft
          design studio, featuring a robust selection of
          design elements, SEO optimization tools, and
          e-commerce integrations..</p>
      </div>
      <div className="show-more-two">
        <select name="show" id="show">
          <option value="hide">Show More</option>
        </select>
      </div>
      <div className="ratings-template-two"></div>
      <div className="ratings-two">
        <h2>9.5</h2>
      </div>
      <div className="ratings-icon-two">
        <img id='icon' src={Images} />
      </div>
      <div className="ratings-text-two">
        <h3>Exceptional</h3>
      </div>
      <div className="ratings-star-two">
        <img src={RatingStar} />
      </div>
      <div className="ratings-button-to">
        <button className='ratings-button-two'>View</button>
      </div>
    </div>
  );
}

export default BuilderTwo;
