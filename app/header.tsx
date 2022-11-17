import React from 'react'

function Header() {
    return (
        <header className='flex bg-white shadow-md justify-items-center justify-around p-4'>
            <div><h1 className='flex-1 text-[28px] font-bold text-black'>tour</h1></div>
            <div>
                <ul className='flex items-center space-x-8'>
                    <li className='text-sm text-gray-800'>Home</li>
                    <li className='text-sm text-gray-400'>Product</li>
                    <li className='text-sm text-gray-400'>Resources</li>
                    <li className='text-sm text-gray-400'>Contact</li>
                    <li className='text-sm text-gray-400'>Blogs</li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center justify-end space-x-4'>
                    <li>Login</li>
                    <li><button className='rounded-full bg-white px-6 p-1 outline outline-offset-2 outline-1'>Signup</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header