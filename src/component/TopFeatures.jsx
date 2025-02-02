import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AllUI from './AllUI'
import CoreComponents from './CoreComponents'
const TopFeatures = () => {

    const [selectedSection, setSelectedSection] = useState('applicationUI')

    return (
        <div className='flex flex-col items-center gap-4 py-16 text-white'>
            <h1 className='text-white text-3xl font-medium'>Find By Components</h1>
            <div className='flex sm:justify-center gap-10 pt-5 w-full overflow-x-auto'>
                <Link onClick={() => setSelectedSection('applicationUI')} >
                    <p className={` border border-white font-bold py-3 px-5 uppercase rounded duration-300 transition-all 
                            ${selectedSection === 'applicationUI' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
                    >
                        Application UI
                    </p>
                </Link>
                <Link onClick={() => setSelectedSection('corecomponents')}>
                    <p className={`border border-white font-bold py-3 px-5 uppercase rounded duration-300 transition-all
                        ${selectedSection === 'corecomponents' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>
                        Core Components
                    </p>
                </Link>
                <Link onClick={() => setSelectedSection('landingpage')}>
                    <p className={`border border-white font-bold py-3 px-5 uppercase rounded duration-300 transition-all
                        ${selectedSection === 'landingpage' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>
                        Landing Page
                    </p>
                </Link>
            </div>

            <div className='w-10/12'>
                {/* Application UI */}
                {selectedSection === 'applicationUI' && <AllUI />}
                {/* Core Components */}
                {selectedSection === 'corecomponents' && <CoreComponents />}
            </div>
        </div>
    )
}

export default TopFeatures