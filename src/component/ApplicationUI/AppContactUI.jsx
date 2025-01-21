import CenteredContactForm from '../../ContactForm/CenteredContactForm'
import ContactFormWithConsentBox from '../../ContactForm/ContactFormWithConsentBox'
import SimpleContact from '../../ContactForm/SimpleContact'

const AppContactUI = () => {
    return (
        <div className="px-0 sm:px-6 py-2 text-white">
            <h1 className="text-3xl pb-2 font-semibold font-serif">Contact</h1>
            <p className="text-lg text-justify">Authentication, sign in, sign up, login, registration forms for Tailwind CSS by TailGrids. The Signin-Signup Tailwind component can help in developing another important part of a website. When done with Tailwind CSS UI components, it becomes much more versatile and can be adapted to all kinds of websites and needs.</p>
            <SimpleContact />
            <CenteredContactForm />
            <ContactFormWithConsentBox />
        </div>
    )
}

export default AppContactUI