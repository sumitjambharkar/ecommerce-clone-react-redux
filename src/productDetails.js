import React from 'react'

const productDetails = () => {
    return (
        <>
        <div>
        <img className="img" src={curElement.image}/>
            <p className="name">{curElement.name}</p>
            <p>{curElement.price}</p>
            </div>
        </>
    )
}

export default productDetails
