import Header from "../header/Header"
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const countries = require('../../data/db.json')

function Home(){
    return(
        <>
        <Header/>
        {
            countries.map(element=>{
                return(
                    <Tours
                    countryName = {element.name}
                    image = {element.image}
                    />
                )
            })
        }
        <Footer/>
        </>
    )
    
}
export default Home;