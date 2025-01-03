import React from 'react'

const Video = () => {
    return (
        <div className='mx-auto drop-shadow-lg w-full max-w-2xl backdrop-blur-lg  bg-[#1C1F26] border-2 border-[#343942] rounded px-10 py-10 text-center'>
            <iframe className='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/nYxIoRDJbjU?si=9EstuIEC1VkjRgF3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className='m-5 text-2xl text-white font-serif font-semibold'>Pixel Perfect ReactWind UI Components that you can copy-paste</p>
            <p className='m-3 text-md text-white '>Building Web User-interface using React &Tailwind CSS has never been easier. All you need to choose a block you need and copy-paste the block on your project.</p>
            <center>
                <p className='m-3 bg-white shadow-lg w-full max-w-40 font-semibold px-4 py-2 rounded cursor-pointer'>Get Access Now</p>
            </center>
        </div>
    )
}

export default Video