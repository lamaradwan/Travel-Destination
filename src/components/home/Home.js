import Header from "../header/Header"
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import TourDetails from "../TourDetails/TourDetails";
import { Route, Routes } from "react-router-dom";


function Home(){
    return(
        <>
        <Header/>
        <Tours/>
        {/* <Routes>
        <Route path='/city/:id' element={<TourDetails/>}/>
        </Routes> */}
        <Footer/>
        </>
    )
    
}
export default Home;