import React from 'react'
import Image from 'next/image'
import Restu from "../images/resturann.jpeg"
import { Glava } from '../styleWrapper/glavaRestuWrapper'

const teamResturan = () => {
    return (
        <Glava >
            <div className="glavRestu">
                <Image className="miniRestu" src={ Restu } alt="Picture of the author" />
            </div>
        </Glava>
    )
}

export default teamResturan;
