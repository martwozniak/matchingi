import React from 'react'


export default function Searchbar() {
    return (
        <div className='w-full max-w-[50vw] min-h-[48px] text-xs hidden sm:flex'>
            <input placeholder="AI, Big Data, Python, TypeScript..." type={'text'} name='searchTerm' className='text-white py-2 sm:min-w-[320px] px-4 border border-white/10 rounded-lg justify-center mx-4 flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center' />
        </div>
    )
}