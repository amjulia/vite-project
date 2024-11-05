import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection:"column", margin: "20px"}}>
         <h1>О нас</h1>
         <Link to="/" style={{color: "#000"}}>Главная</Link>
         
     </div>
 );
}

export default About