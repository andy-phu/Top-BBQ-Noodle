import React from "react";
import { AiOutlineInstagram} from "react-icons/ai"
import { BsYelp} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const style = {color:"white !important", opacity:"100%"}
  const bStyle = {color:"black", opacity:"100%"}

  return (
    <footer className="bg-[black] text-white">
      <div className="flex justify-center bg-zinc-800 py-10">        
        <a target='blank' className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black mr-4 " href="https://www.instagram.com/top_bbq_noodle/?utm_medium=copy_link">
            <AiOutlineInstagram className={`text-3xl transition-colors duration-300 text-white/80 hover:text-white hover:scale-75 transition:ease-in-out`} />
        </a>
        <a target='blank' className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black mr-4" href="https://www.facebook.com/topbbqnoodle">
            <FaFacebookF className={`text-2xl transition-colors duration-300 text-white/80 hover:text-white hover:scale-75 transition:ease-in-out`} />
        </a>
        <a target='_blank' className='flex items-center justify-center w-10 h-10 rounded-full border-2 border-black' href='https://www.yelp.com/biz/top-bbq-and-noodle-gardena-2'>
            <BsYelp className={`text-2xl duration-300 text-white/80 hover:text-white hover:scale-75 transition:ease-in-out`} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
