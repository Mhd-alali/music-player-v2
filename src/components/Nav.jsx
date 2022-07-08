import React from 'react';

function Nav({isLibraryOpen, setIsLibraryOpen}) {

    return (<>
        <nav className={`flex w-full items-center justify-between lg:max-w-2xl md:max-w-lg max-w-md mx-auto mt-3 `}>
            <h1 className='text-xl  font-bold'>Music Player V2</h1>
            <button onClick={()=>{setIsLibraryOpen(!isLibraryOpen)}} className='font-semibold border-4 rounded border-gray-900 px-2 py-1 hover:text-white hover:fill-white hover:bg-gray-900 transition'>
                Library
                <svg className='w-5 inline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11 3L11 4L11 8L11 14.541016 A 4 4 0 0 0 9 14 A 4 4 0 0 0 5 18 A 4 4 0 0 0 9 22 A 4 4 0 0 0 13 18L13 8L19 8L19 3L11 3 z" />
                </svg>
            </button>
        </nav>
    </>);
}

export default Nav;