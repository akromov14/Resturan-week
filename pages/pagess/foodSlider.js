import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link'
import 'react-alice-carousel/lib/alice-carousel.css';
import { FoodWrapper } from '../styleWrapper/foodSliderWrapp';
import Image from 'next/image'
import Food from '../images/food.png'
import Food2 from '../images/food2.png'
import Food3 from '../images/food3.png'
import Food4 from '../images/food4.png'
import Food5 from '../images/food5.png'

const items = [
    <div className="item" data-value="1">
         <Image src={ Food } alt="Picture of the author" />
    </div>,
    <div className="item" data-value="2">
        <Image src={ Food2 } alt="Picture of the author" />
    </div>,
    <div className="item" data-value="3">
        <Image src={ Food3 } alt="Picture of the author" />
    </div>,
    <div className="item" data-value="4">
        <Image src={ Food4 } alt="Picture of the author" />
    </div>,
    <div className="item" data-value="5">
         <Image src={ Food5 } alt="Picture of the author" />
    </div>,
];

const Carousel = () => (
    <FoodWrapper>
        <h1 className="title pt-3">Foods</h1>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 alice-1">
                <AliceCarousel
                    animationType="fadeout" 
                    animationDuration={800}
                    disableButtonsControls
                    infinite
                    items={items}
                    mouseTracking
                    className="alice-1"
                 />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 alice-2">
                <div className="food">
                    <h1 >Taom nomi</h1>
                    <p>Taom haqida malumot</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <button className="btn btn-warning keyingi-2 shadow">
                        <Link href="/pagess/menu" className="Keyingi">
                            <a className="text-light Keyingi">Click menu</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        <div className="style-12"></div>
    </FoodWrapper>
);

export default Carousel;