import Style from './Web.builder.scss';
import builderIcon from "../../../assets/images/builder-icon.png";
const WebBuilder = () => {
    return (
        <div className='box-container'>
            <div className="box-head">
                <h1>Related deals you might like for</h1>
            </div>
            <div className="flex-box">
                <div className="box-one">
                    <div className="box-one-img">

                        <img src={builderIcon} />
                    </div>
                    <div className="box-text-offer">
                        <div-p>
                            <p>20% Off</p>
                        </div-p>
                        <div-p2>
                            <p>Limited time </p>
                        </div-p2>
                    </div>
                    <div className="text-one">
                        <h1>Webbuilder1</h1>
                    </div>
                    <div className="text-two">
                        <p>Computer  Modern clasic with wix support</p>
                    </div>
                    <div className="text-tree">
                        <p id='sub1'>$49.96</p>
                        <p id='sub2'>$39.96</p>
                        <p id='sub3'>(20%Off)</p>
                    </div>
                    <div className="box-btn">
                        <button id='btn'>View Deal</button>
                    </div>


                </div>
                <div className="box-two">
                    <div className="box-one-img">

                        <img src={builderIcon} />
                    </div>
                    <div className="box-text-offer">
                        <div-p>
                            <p>20% Off</p>
                        </div-p>
                        <div-p2>
                            <p>Limited time </p>
                        </div-p2>
                    </div>
                    <div className="text-one">
                        <h1>Webbuilder1</h1>
                    </div>
                    <div className="text-two">
                        <p>Computer  Modern clasic with wix support</p>
                    </div>
                    <div className="text-tree">
                        <p id='sub1'>$49.96</p>
                        <p id='sub2'>$39.96</p>
                        <p id='sub3'>(20%Off)</p>
                    </div>
                    <div className="box-btn">
                        <button id='btn'>View Deal</button>
                    </div>


                </div>


                <div className="box-three">
                    <div className="box-one-img">

                        <img src={builderIcon} />
                    </div>
                    <div className="box-text-offer">
                        <div-p>
                            <p>20% Off</p>
                        </div-p>
                        <div-p2>
                            <p>Limited time </p>
                        </div-p2>
                    </div>
                    <div className="text-one">
                        <h1>Webbuilder1</h1>
                    </div>
                    <div className="text-two">
                        <p>Computer  Modern clasic with wix support</p>
                    </div>
                    <div className="text-tree">
                        <p id='sub1'>$49.96</p>
                        <p id='sub2'>$39.96</p>
                        <p id='sub3'>(20%Off)</p>
                    </div>
                    <div className="box-btn">
                        <button id='btn'>View Deal</button>
                    </div>


                </div>

                <div className="ending">
                    <h1>Sign up and get exclusive
                        special deals</h1>
                </div>

            </div>


        </div>



    );
}

export default WebBuilder;