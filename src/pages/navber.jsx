import '../css/navbar.css'
import { HashLink } from 'react-router-hash-link';
const data = ['Home','About','Skill','Project','Contain']
const Navber = () => {

    return (
        <div className="navbar">
            <div className='title' >{"<Abadat/>"}</div>
            <ul>
                {
                    data.map((item,ind)=>(
                        <li id={item} key={ind}>
                             <HashLink smooth to={`/#section-${item}`}>
                             {item}
                             </HashLink></li>
                        

                    ))
                }
            </ul>
        </div>
    );
}

export default Navber;
