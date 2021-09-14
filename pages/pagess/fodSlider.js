import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link'
import Image from 'next/image'
import 'react-alice-carousel/lib/alice-carousel.css';
import { FodWrapper } from '../styleWrapper/fodWrapper';
import Food from '../images/sharbat3.png'
import Food2 from '../images/cola2.png'
import Food3 from '../images/sharbat.png'
import Food4 from '../images/kampot1.png'
import Food5 from '../images/sharbat4.png'


const items = [
    <div className="item" data-value="1">
         <Image src={ Food } alt="" />
    </div>,
    <div className="item" data-value="2">
        <Image src={ Food2 } alt="" />
    </div>,
    <div className="item" data-value="3">
        <Image src={ Food3 } alt="" />
    </div>,
    <div className="item" data-value="4">
        <Image src={ Food4 } alt="" />
    </div>,
    <div className="item" data-value="5">
         <Image src={ Food5 } alt="" />
    </div>,
];

const Carusel = () => (
        <FodWrapper>

            <h1 className="title2 pt-3">Cool Drink</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="food2">
                        <h1 >Drink</h1>
                        <p>Kampot</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        
                    <button className="btn soz shadow">
                            <Link href="/pagess/menucopy">
                                <a>Click menu</a>
                            </Link>
                    </button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <AliceCarousel
                            animationType="fadeout" 
                            animationDuration={800}
                            disableButtonsControls
                            infinite
                            items={items}
                            mouseTracking
                        />
                </div>
            </div>
            <div className="style-123"></div>
        </FodWrapper>
    
);

export default Carusel;