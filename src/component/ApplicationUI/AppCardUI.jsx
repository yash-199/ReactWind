import BlogCard from "../../CardUI/BlogCard"
import CardCompImg from "../../CardUI/CardCompImg"
import CardWAuthorImg from "../../CardUI/CardWAuthorImg"
import CardWithBenBut from "../../CardUI/CardWithBenBut"
import ImgCardwTitndDesc from "../../CardUI/ImgCardwTitndDesc"
import PricingCard from "../../CardUI/PricingCard"
import ZigZagCardImg from "../../CardUI/ZigZagCardImg"

const AppCardUI = () => {
    return (
        <div className="px-2 py-2 text-white">
            <h1 className="text-3xl pb-2 font-semibold font-serif">Cards</h1>
            <p className="text-lg">Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase content on your website. With industry-standard designs and multiple options, these cards enhance user experience, attract attention, and add value to your landing pages.</p>
            <CardCompImg />
            <BlogCard />
            <ImgCardwTitndDesc />
            <CardWAuthorImg />
            <PricingCard />
            <CardWithBenBut />
            <ZigZagCardImg />
        </div>
    )
}

export default AppCardUI