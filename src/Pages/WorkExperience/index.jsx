
import Intro from './Intro';
import TA from './TA';
import ContactMe from '../Home/ContactMe';
import Footer from '../Home/Footer';
import { motion } from "framer-motion";


export default function WorkExperience() {
    return (
        <motion.div
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1}}>
            <Intro/>
            <TA/>
            <ContactMe/>
            <Footer/>
        </motion.div>
    )
}