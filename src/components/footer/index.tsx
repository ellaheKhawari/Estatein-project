import Title from "../mainTitle"
import footerBg from "../../assets/bg3.png";
import {Facebook, Instagram, Linkedin, MailPlus, Send, Twitter} from "lucide-react";
import logo from "../../assets/Logo.png";
import {footerLinks} from "./footerLinks.ts";
import { useState } from "react";
import {toast} from "sonner";

const Footer = () => {

    const [email, setEmail] = useState('');
    const handleSend = () => {
        setEmail('');
        toast('Your email has been sent.');
    };

    return (
        <section>
            <section
                className=" border-y border-border w-full bg-no-repeat bg-cover "
                style={{backgroundImage: `url(${footerBg})`}}>
                <section className='Wrapper my-12'>
                    <Title
                        title='Start Your Real Estate Journey Today'
                        description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
                        buttonProps={{
                            text: 'Explore Properties',
                            color: 'primary'
                        }}
                        sparklesIcons={false}
                    />
                    <div className='md:hidden text-sm'>
                        <button
                            className='bg-primary hover:bg-primary-65 w-full font-semibold px-5 py-3 rounded-lg transition-colors '>
                            Explore Properties
                        </button>
                    </div>
                </section>
            </section>


            <section className='Wrapper my-12'>

                <section className='flex flex-col md:flex-row gap-7'>
                    <div className='md:flex-1/4 w-full'>
                        <a href="#">
                            <img src={logo} alt="Estatein logo" className="w-24 lg:w-28 h-auto mb-5"/>
                        </a>
                        <div className='border border-border rounded-lg flex gap-1.5 items-center py-3 px-3'>
                            <MailPlus color='#999999' size='18' />
                            <input
                                className='focus:border-none focus:outline-none min-w-5/6 selection:bg-none selection:bg-bg focus:bg-bg'
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="send-btn" onClick={handleSend}>
                                <Send color="#999999" size='24' />
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-wrap flex-row md:flex-none md:grid md:grid-cols-5  items-start gap-4 md:gap-6 s:justify-items-center ">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-3 border-r border-border px-3 mb-8">
                                <h4 className="text-text-myGray! md:text-lg font-medium mb-3">{section.title}</h4>
                                {section.links.map((links: { label: string; href: string }) => (
                                    <a
                                        key={links.label}
                                        href={links.href}
                                    >
                                        {links.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <section
                className=" bg-bg2 w-full">
                <div
                    className='Wrapper flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <p className="text-sm md:text-base">© 2026 Ellahe-Khawari ellahe.khawari@gmail.com All rights
                        reserved.
                        <a href="#" className="md:pl-4 ">Terms & Conditions</a>
                    </p>
                    <div className="flex gap-3 rounded-3xl bg-bg p-2 border-border border mb-4 md:my-4 ">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <button
                                key={i}
                                className="w-9 h-9 rounded-lg  text-text-myGray! flex items-center justify-center transition-colors"
                            >
                                <Icon/>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    );
}
export default Footer