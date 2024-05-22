
import React from "react";
import HeroSection from "../Home/HeroSection";
import { motion } from "framer-motion";


export default function SaiProductions() {
    return (
        <motion.div
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1}}>
            <HeroSection/>
        </motion.div>
    )
}