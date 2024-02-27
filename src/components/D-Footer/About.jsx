import Style from './Style.about.scss'
const About = () => {
    return (

        <div className="about-main">
            <div className="categories">
                <h1>Categories</h1>
                <ul>

                    <li><a href="#">Web Builder</a></li>
                    <li><a href="#">Hosting</a></li>
                    <li><a href="#">Data Center</a></li>
                    <li><a href="#">Robotic-Automation</a></li>
                </ul>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <ul>
                    <li><a href="/category/Sports">Contact</a></li>
                    <li><a href="/category/Sports">Privacy Policy</a></li>
                    <li><a href="/category/Sports">Terms Of Service</a></li>
                    <li><a href="/category/Sports">Categories</a></li>
                    <li><a href="/category/Sports">About</a></li>
                </ul>
            </div>
            <div className="option">
                <select name="Country">
                    <option value="United States">United States</option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                </select>
            </div>


        </div>
    );
}

export default About;