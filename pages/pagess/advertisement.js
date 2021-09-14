import React from 'react'
import Image from 'next/Image'
import Reklama from './../images/reklama.jpg'

const Advertisement = () => {
    return (
        <div>
            <Image src={ Reklama } alt="reklama"/>
        </div>
    )
}

export default Advertisement
