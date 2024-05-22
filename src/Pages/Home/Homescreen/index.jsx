import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1}}
        
        >
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyPortfolio/>
            <ContactMe/>
            <Footer/>
        </motion.div>
    )
}