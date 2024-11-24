import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/JIDE BABS.webp"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="logo"/>
                </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/babajide-joseph-babalola-49825717a/" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin">
        <FaLinkedin />
        </a>
        <a href="https://github.com/jaisleek" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/rhodestonerealty/profilecard" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
        <FaInstagram />
        </a>
        <a href="https://x.com/RhoddesRealty" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter">
        <FaSquareXTwitter />
        </a>
        </div>
    </nav>
  )
}

export default Navbar

