import React from 'react'
import '../assets/styles/main.css'
import '../assets/fonts/Font-Awesome/css/font-awesome.css'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Speakers from '../components/Speakers';
import Description from '../components/Description'
import TedxDescription from '../components/TEDxDescription'
import Team from '../components/Team'
import Footer from '../components/Footer'
import RegisterPopUp from '../components/RegisterPopUp';
import StickyNavbar from "../components/StickyNavbar";

function HomePage(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <StickyNavbar/>
            <Description/>
            <Speakers/>  
            <TedxDescription/>
            <Team/>
            <Footer/>
            <RegisterPopUp/>
        </div>
        
    )
}

export default HomePage;