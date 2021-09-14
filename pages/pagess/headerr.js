import React, {useSelector} from 'react'
import Logo from '../images/resLogo.png'
import Image from 'next/image'
import { HeadWrapper } from '../styleWrapper/HeadWrapper'
import Restur from '../images/resturann.jpeg'
import { motion } from 'framer-motion';


const Headerr = () => {

    return (
        <HeadWrapper>
                <Image
                    layout="fill"
                    className="object-center"
                    src={ Restur }
                    />
                <div class="row">
                    <div className="col-lg-6 col-md-6 text-2">
                        <div className="text">
                        <motion.div initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                delay: .4
                                }
                            },

                            }}
                            whileHover={{
                                scale: 1.4,
                                transition: {
                                  duration: .2
                                }
                              }} >
                            <h1 className="title">
                                Wubba Lubba Dub Dub!
                            </h1>
                        </motion.div>
                              <motion.h2
                             whileHover={{
                                position: 'relative',
                                zIndex: 1,
                                // background: 'white',
                                scale: [1, 1.4, 1.2],
                                rotate: [0, 10, -10, 0],
                                transition: {
                                  duration: .2
                                }
                              }}>
                                 Resturant
                              </motion.h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit incidunt 
                                    amet veritatis natus quo cum, quidem harum culpa 
                                    architecto vitae facere illo ut? Voluptates eos tenetur consequatur asperiores modi?
                                </p>
                                <div>
                                    <button className="me">Click Me</button>
                                    <button className="menga">Menga bosing</button>
                                </div>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-6 logoGl-2">
                        <div className="logoGl">
                            <motion.div
                             whileHover={{
                                position: 'relative',
                                zIndex: 1,
                                // background: 'white',
                                scale: [1, 1.2, 1.2],
                                rotate: [0, 10, -10, 0],
                                transition: {
                                  duration: .2
                                }
                              }}>
                                <Image src={ Logo } alt="Picture of the author" className="teturLogo"/>
                                <h1 className="week-1">Resturan Week</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
        </HeadWrapper>
    )
}

export default Headerr
