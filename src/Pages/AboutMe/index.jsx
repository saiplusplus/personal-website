import AboutMe from "../Home/AboutMe";
import HeroSection from "../Home/HeroSection";
import MySkills from "../Home/MySkills";
import MyPortfolio from "../Home/MyPortfolio";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1}}
        
        >
            <AboutMe/>
            <MySkills/>
            <ContactMe/>
            <Footer/>
        </motion.div>
    )
}