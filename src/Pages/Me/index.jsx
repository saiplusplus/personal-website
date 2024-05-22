
import Intro from './Intro';
import Bio from './Bio';
import ContactMe from '../Home/ContactMe';
import Footer from '../Home/Footer';
import { motion } from "framer-motion";


export default function Me() {
    return (
        <motion.div
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1}}>
            <Intro/>
            <Bio/>
            <ContactMe/>
            <Footer/>
        </motion.div>
    )
}