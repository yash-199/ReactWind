import React from 'react'
import CookieConsentBanner from '../../Cookie/CookieConsentBanner'
import CookieIconWithBtn from '../../Cookie/CookieIconWithBtn'
import CookieInCenterwithBtn from '../../Cookie/CookieInCenterwithBtn'

const AppCookieUI = () => {
    return (
        <div className="px-2 py-2 text-white">
            <h1 className="text-3xl pb-2 font-semibold font-serif">Cookie</h1>
            <CookieConsentBanner />
            <CookieIconWithBtn />
            <CookieInCenterwithBtn />
        </div>
    )
}

export default AppCookieUI