import React from 'react';
import { PhoneCall } from "react-feather"

import "../style/index.css"


const MobileCallButton = () => {

    return (
        <a href="tel:669291602" className="mobileCallButton  ">
            <PhoneCall size={35}  />
        </a>
    )
}


export default MobileCallButton;