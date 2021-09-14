import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Food from './../images/food4.png'
import Drink from './../images/drik.png'
import { MenuWrapper } from '../styleWrapper/MenuWrapper'

const Menu = () => {
    return (
        <MenuWrapper>
            <div className="menu-23">
                <h1>Menu Drink</h1>
            </div>
            <div className="row ubuntu">
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-22">
                    <Image src={ Drink } alt="prosta rasm" className="prosta-rasm"/>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-2">
                    <div className="ipsum-1">
                        <div>
                            <h1>El-Italiano</h1>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo eos ratione
                                eligendi! Mollitia, aspernatur doloribus natus excepturi explicabo corporis ut aut assumenda 
                                rem itaque! Excepturi eius enim voluptas tenetur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ubuntu">
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-2">
                    <div className="ipsum-1">
                        <div>
                            <h1>El-Italiano</h1>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo eos ratione
                                eligendi! Mollitia, aspernatur doloribus natus excepturi explicabo corporis ut aut assumenda 
                                rem itaque! Excepturi eius enim voluptas tenetur?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-22">
                    <Image src={ Drink } alt="prosta rasm" className="prosta-rasm"/>
                </div>
            </div>
            <div className="row ubuntu">
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-22">
                    <Image src={ Drink } alt="prosta rasm" className="prosta-rasm"/>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 ubuntu-2">
                    <div className="ipsum-1">
                        <div>
                            <h1>El-Italiano</h1>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo eos ratione
                                eligendi! Mollitia, aspernatur doloribus natus excepturi explicabo corporis ut aut assumenda 
                                rem itaque! Excepturi eius enim voluptas tenetur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ubuntu">
                <div className="col-sm-6 col-lg-6 col-md-6  ubuntu-2">
                    <div className="ipsum-1">
                        <div>
                            <h1>El-Italiano</h1>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo eos ratione
                                eligendi! Mollitia, aspernatur doloribus natus excepturi explicabo corporis ut aut assumenda 
                                rem itaque! Excepturi eius enim voluptas tenetur?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 col-sm-6 ubuntu-22">
                    <Image src={ Drink } alt="prosta rasm" className="prosta-rasm"/>
                </div>
            </div>
            <div className="center">
                <button className="btn btn-primary home-22">
                    <Link href="/">
                        <a className="text-light">Home</a>
                    </Link>
                </button>
            </div>
        </MenuWrapper>
    )
}

export default Menu;
