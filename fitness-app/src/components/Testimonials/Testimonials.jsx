import React, { useState } from 'react'
import './Testimonials.css'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import {TestimonialsData, testimonialsData} from "../../data/testimonialsData"
import {motion} from 'framer-motion'
const transition = {type: 'spring', duration : 3 }

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.length;
  return (
         <div className="Testimonials">
            <div className="left-t">
               <span>Testimonials</span>
               <span className='stroke-text'>What They</span>
               <span
              
               >Say About Us</span>
               <motion.span
                key={selected}
                initial={{opacity: 0, x:-100 }}
                animate={{opacity: 1, x:0 }}
                exit={{opacity: 0, x:100 }}
               >
                {testimonialsData[selected].review}
               </motion.span>
               <span>
               <span style={{color: 'orange'}}>
                {testimonialsData[selected].name}
                </span>
                <span> - {testimonialsData[selected].status}
                </span>
               </span>
            </div>
            <div className="right-t">
               <motion.div
               initial={{opacity: 0, x: -100}}
               transition={{ ...transition, duration: 2}}
               whileInView={{opacity: 1, x: 0}}>
                
               </motion.div>
               <motion.div
                 initial={{opacity: 0, x: 100}}
                 transition={{...transition, duration: 2}}
                 whileInView={{opacity: 1, x: 0}}></motion.div>
                 <motion.img
                 key={selected}
                 initial={{opacity: 0, x:100 }}
                 animate={{opacity: 1, x:0 }}
                 exit={{opacity: 0, x:-100 }}
                 
                 src={testimonialsData[selected].image} alt="" />

                 <div className="arrows">
                
                  <img 
                   onClick={()=>{
                     selected === 0 ? setSelected(tLenght -1):
                     setSelected((prev) => prev -1);
                    }}
                  src={leftArrow} alt="" />
                    <img 
                  onClick={()=>{
                     selected === tLenght - 1 ? setSelected(0):
                     setSelected((prev) => prev +1);
                    }} 
                     src={rightArrow} alt="" />
                 </div>
            </div>
         </div>
  )
}

export default Testimonials
