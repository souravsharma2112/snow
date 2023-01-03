import React from 'react'

export default function Productitem(props) {
    return (
        <>
            <li>
                <div class="product_img">
                    <img src={props.productImage} alt=""/>
                </div>
                <div class="product_name">
                    <h2>{props.productName}</h2>
                </div>
            </li>
        </>
    )
}
