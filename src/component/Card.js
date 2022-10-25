import React from 'react'

const Card = ({ menuData }) => {
    return (
        <div>
            <div className='main-card--cointainer'>
                {menuData.map((currentEle)=>{
                    const {id,category,name,image,price} = currentEle
                    return(

                    <>
                        <div className='card-container' key={id}>
                            <div className='card rounded-3xl'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className='card-description subtle'>
                                    {currentEle.description}
                                    </span>
                                    <div className='card-read'>{price}</div>
                                </div>
                                <img src= {image} alt="" className='card-media' />
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    </>
                )})}

            </div>
        </div>

    )
}

export default Card
