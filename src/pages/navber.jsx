import '../css/navbar.css'
const data = ['Home','Skill','Project','Contain']
const Navber = () => {

    return (
        <div className="navbar">
            <div className='title' >{"<Abadat/>"}</div>
            <ul>
                {
                    data.map((item,ind)=>(
                        <li key={ind}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navber;
