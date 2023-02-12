import Link from 'next/link'
import React from 'react'

const Button = ({ href, onClick, children }) => {
    let BtnType = 'Link';
    const props = {};
    if (href) {
        BtnType = Link;
        props.href = href;
        props.target = '_blank';
    } else {
        BtnType = 'button';
        props.onClick = onClick;
    }
    return (
        <BtnType
            { ...props }
            className='btn-fill inline-block rounded-full font-bold text-lg text-center px-8 py-3 transition-all cursor-pointer select-none group'
        >
            { children }
        </BtnType>
    )
}

export default Button