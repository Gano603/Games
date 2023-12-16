import { FaHome } from "react-icons/fa";
import { RiStockLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import { lineAnim } from "../variants/Vars";


const Sidebar = () => {

    const { side } = useSelector(state => state.state)
    const loc = useLocation();
    const nav = useNavigate();

    return (
        <motion.div
            whileHover={{ width: "12%" }}
            className={`w-[4%] relative h-[100vh] bg-black overflow-hidden`}>
            <div className="w-full absolute left-0 px-3 flex flex-col justify-between items-center">
                <div className="h-72 w-full"></div>
                <div className="w-full h-full">
                    <div className="my-5 flex items-center cursor-pointer" onClick={() => nav("/")}>
                        <div className="relative">
                            <FaHome className="text-white text-4xl my-2 mx-auto hover:text-green-500 transition-colors duration-300" />
                            {loc.pathname === "/" && <motion.div
                                variants={lineAnim}
                                initial={"initial"}
                                animate={"animate"}
                                className="h-1 w-full absolute -bottom-2 bg-green-500 shadow-2xl shadow-green-500"></motion.div>}
                        </div>
                        <p className="text-white text-2xl mx-8 hover:text-green-500">Home</p>
                    </div>
                    <div className="flex my-5 items-center cursor-pointer" onClick={() => nav("/market")}>
                        <div className="relative my-5">
                            <RiStockLine className="text-white text-4xl my-2 hover:text-green-500 transition-colors duration-300" />
                            {loc.pathname === "/market" && <motion.div
                                variants={lineAnim}
                                initial={"initial"}
                                animate={"animate"}
                                className="h-1 w-full absolute bottom-0 bg-green-500 shadow-2xl shadow-green-500"></motion.div>}
                        </div>
                        <p className="text-white text-2xl mx-8 hover:text-green-500">Market</p>
                    </div>
                </div>
                <div className="h-72 w-full"></div>
            </div>

        </motion.div>
    )
}

export default Sidebar