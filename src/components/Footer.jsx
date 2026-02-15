import { socialLinks } from "../constants"
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer font-poppins text-center justify-center items-center mt-1">
        <hr className=" border-slate-200" />
        <div className="footer-container ">

            <p>
                &copy; 2026 <strong> Suhail </strong>, All right reserved.
            </p>
        </div>
        <div className=" flex gap-3 justify-center items-center">
            {
                socialLinks.map((link,index)=>{
                    return(
                        <Link key={index} to={link.link} target="_blank">
                            <img src={link.iconUrl} alt={link.name} className=" w-6 h-6 object-contain" />
                        </Link>
                    )
                })
            }

        </div>
            
    </footer>
  )
}

export default Footer