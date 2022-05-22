import React from 'react'
import {motion} from 'framer-motion'

import { images } from '../../constant'
import './Header.scss'

export default function Header() {

  const scaleVariants = {
    whileInView:{
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1, 
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Ariel Febrian</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
          <p className='p-text'>Programmer</p>
          <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
        whileInView={{ scale: [0, 1]}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        className='overlay_circle'
        alt="profile_circle"
        src={images.circle}
        />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}

      </motion.div>
    </div>
  )
}
