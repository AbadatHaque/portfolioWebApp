import './home.css'
import { SiGithubactions } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';




// import Typist from "react-typist";
const Home = () => {
    return (
        <div className="containar">
            <div className="lhs">
            <div className="headingTex">
              <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
              <h1 className="color-name-blue text-boldest">{"I'm ABADAT"}</h1>
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am a Frontend Developer .',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am a React JS Developer .',
                1000,
                'I am a Wep App Developer .',
                1000,
                'I am a Fullstack Developer .',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5rem', display: 'block' }}
              repeat={Infinity}
            />
            </div>
            <div style={{margin:'0px 0px 2rem'}}>
              <span className="color-custom-grey h5">I specialized in developing pixel perfect user interfaces</span><br />
            </div>
            <div className="socialMediaButtons">
              <button  onClick={() => window.open('https://github.com/AbadatHaque', '_blank')}><SiGithubactions  /></button>
              <button  onClick={() => window.open('https://www.linkedin.com/in/sk-abadat-haque-a1516b179/', '_blank')}><TiSocialLinkedinCircular /></button>
              <button><FaSquareXTwitter /></button>
            </div>
            <button onClick={() => window.open('/static/abadat_resume.pdf', '_blank')} id="viewResume">View Resume</button>
            </div>
            <div className="rhs">
              <img className="homepageavtar" style={{maxWidth:'100%'}}  alt="coder" src="../public/avatar.png"
              />
            </div>
            
        </div>
    );
}

export default Home;
