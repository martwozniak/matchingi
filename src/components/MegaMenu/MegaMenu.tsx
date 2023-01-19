import React from 'react'


export default function MegaMenu() {
    return (
        <div className='text-xs text-white/90'>
            <ul className='flex gap-4 items-center'>
                <li className='cursor-pointer transition-all hover:text-cyan-500'>Offers</li>
                <li className='cursor-pointer transition-all hover:text-cyan-500'>Products</li>
                <li className='cursor-pointer transition-all hover:text-cyan-500'>Blog</li>
            </ul>
        </div>
    )
}