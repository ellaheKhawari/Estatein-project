import {Sparkles , X} from "lucide-react";
import navbarbg from '../../assets/navbarbg.png'
import {useState} from "react";

const AnnouncementBar = ()=> {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <section className='mx-auto'>
            <section className=' border-b border-border h-10 flex justify-center items-center gap-2 relative
                 md:h-12 md:gap-3 lg:h-12 lg:gap-4 bg-bg2'>
                <div className='opacity-20 bg-no-repeat bg-cover bg-top absolute inset-0 ' style={{ backgroundImage: `url(${navbarbg})` }}></div>
                <div className='flex items-center z-10 '>
                    <Sparkles className='mx-1 shrink-0' color='#703bf7' size='14'/>
                    <p className=' text-sm md:text-lg text-center '> Discover Your Dream Property with Estatein
                        <a href="#" className='font-semibold underline underline-offset-2' > Learn More</a>
                    </p>
                    <button className='absolute right-3 top-1/2 rounded-3xl p-1 bg-white/15 -translate-y-1/2 ' onClick={() => setVisible(false)}>
                        <X color='white' size='14'/>
                    </button>
                </div>
                {/*<section className='border border-green-800 '></section>*/}
            </section>
        </section>
    )
}
export default AnnouncementBar;