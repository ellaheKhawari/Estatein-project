import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {navLinks} from "../../types/componentsTypes.ts";
import logo from "../../assets/Logo.png";
import Button from "../button";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className=' bg-bg2  mx-auto transition-all duration-300 '>
                <div className="Wrapper ">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        <a href="#" >
                            <img src={logo} alt="Estatein logo" className="w-20 md:w-24 lg:w-28 h-auto"/>
                        </a>

                        <div className="hidden md:flex items-center gap-8 ">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`border rounded-2xl py-3 px-4.5 font-medium text-lg transition-colors duration-200 relative group hover:bg-bg hover:border hover:border-border 
                                    ${pathname === link.href ? "bg-bg  border-border "
                                    : " border-bg2"}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className='hidden md:block'>
                            <Button
                                text='Contact Us'
                                color='secondary'
                                onClick={()=>navigate('/contact')}
                            />
                        </div>

                        <button
                            className="md:hidden  p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>


                {isOpen && (
                    <div className="md:hidden bg-bg2 backdrop-blur-md border-t border-border">
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="block font-medium py-2 "
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-3 border-t border-border text-center ">
                                <button className=" text-sm font-medium py-2">Contact Us</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>

    );
}
export default Header