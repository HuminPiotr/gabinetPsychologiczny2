import React from 'react';


const RoundedImage = ({src}) => {
    return (
        <img className="rounded-full mx-auto mb-10 md:ml-20 shadow-xl w-64 order-2 md:order-1 " src={src} alt="Anna Humin"/>
    )
}

export default RoundedImage;