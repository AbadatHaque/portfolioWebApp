import './home.css'
import { SiGithubactions } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";



// import Typist from "react-typist";
const Home = () => {
    return (
        <div className="containar">
            <div className="lhs">
            <div>
              <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
              <h1 className="color-name-blue text-boldest">{"I'm ABADAT"}</h1>
              {/* <span className="color-custom-grey h4">
                <Typist className="TypistExample-message" cursor={{ show: false }}>
                  <span>I'm a </span><span className="font-weight-bold">
                    <span className="font-weight-bold">Front-end <span className="font-weight-normal">Developer</span></span>
                    <Typist.Backspace count={19} delay={3500} /> Full Stack</span> Developer </Typist></span><br /> */}
              <span className="color-custom-grey h5">I specialized in developing pixel perfect user interfaces</span><br />
            </div>
            <div className="socialMediaButtons">
              <button><SiGithubactions  /></button>
              <button><TiSocialLinkedinCircular /></button>
              <button><FaSquareXTwitter /></button>
            </div>
            <button id="viewResume">View Resume</button>
            </div>
            <div className="rhs">
              <img className="homepageavtar" style={{maxWidth:'100%'}}  alt="coder" src="../public/avatar.png"
              />
            </div>
            
        </div>
    );
}

export default Home;
