import React from 'react'


export default function MegaMenu() {
    return (
        <div className='text-xs text-white/90'>
            <ul className='flex gap-4'>
                <li className='cursor-pointer'>Offers</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Blog</li>
            </ul>
        </div>
    )
}