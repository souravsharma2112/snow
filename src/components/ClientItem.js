import React from 'react'
export default function ClientItem(props) {
    return (
        <>
            <li>
                <div class="client_img">
                    <img src={props.clientImage} alt="" srcset=""/>
                </div>
            </li>
        </>
    )
}
