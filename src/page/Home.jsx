import Componentlibrary from "../component/Componentlibrary"
import Header from "../component/Header"
import { motion } from "framer-motion";
import WeOffer from "../component/weOffer";
import Templates from "../component/Templates";
import Video from "../component/Video";

const Home = () => {
    return (
        <div className="pt-20">
            <Header />
            <motion.div
                className="flex justify-center py-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <WeOffer />
            </motion.div>
            <motion.div
                className="flex justify-center py-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Componentlibrary />
            </motion.div>
            <motion.div
                className="flex justify-center py-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Templates />
            </motion.div>
            <motion.div
                className="flex justify-center py-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Video />
            </motion.div>
        </div>
    )
}

export default Home