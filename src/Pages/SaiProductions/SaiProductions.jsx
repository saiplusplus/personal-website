
import React from "react";
import Navbar from '../Home/Navbar';
import HeroSection from "../Home/HeroSection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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