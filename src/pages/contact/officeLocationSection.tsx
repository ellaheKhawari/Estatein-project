import type {Office} from "../../types/types.ts";
import { Mail, MapPin, Phone} from "lucide-react";
import Title from "../../components/mainTitle";
import Button from "../../components/button";


export const OfficeLocationSection = () => {

    const offices: Office[] = [
        {
            name: "Main Headquarters",
            address: "123 Estatein Plaza, City Center, Metropolis",
            description:
                "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
            email:"info@estatein.com",
            phone:"+1 (123) 456-7890",
            location:"Metropolis",
        },
        {
            name: "Regional Offices",
            address: "456 Urban Avenue, Downtown District, Metropolis",
            description:
               "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            email:"info@estatein.com",
            phone:"+1 (123) 456-7890",
            location:"Metropolis",
        },
    ];

    return (
        <section className="Wrapper ">
            <div className="">
                <Title
                    title='Discover Our Office Locations'
                    description=' Visit one of our offices to meet our team in person and explore
                    our latest listings over a cup of coffee.'
                    buttonComponent={false}
                />
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {offices.map((office) => (
                        <div
                            key={office.name}
                            className="flex flex-col justify-between rounded-2xl border border-border bg-bg md:p-10 p-6"
                        >
                            <div>
                                <span className='text-sm md:text-base'>{office.name}</span>
                                <h3 className="text-lg md:text-2xl font-semibold my-3">{office.address}</h3>
                                <p className=" text-text-myGray! text-sm md:text-base">
                                    {office.description}
                                </p>
                            </div>
                            <div className='flex flex-row flex-wrap md:flex-nowrap gap-3 mt-4 text-sm md:text-base'>
                                <button className='border border-border bg-bg2 py-3 px-3.5 rounded-full flex gap-1 items-center'>
                                    <Mail className='w-4 md:w-5 h-auto'/>
                                    {office.email}
                                </button>
                                <button className='border border-border bg-bg2 py-3 px-3.5 rounded-full flex gap-1 items-center'>
                                    <Phone className='w-4 md:w-5 h-auto'/>
                                    {office.phone}
                                </button>
                                <button className='border border-border bg-bg2 py-3 px-3.5 rounded-full flex gap-1 items-center'>
                                    <MapPin className='w-4 md:w-5 h-auto'/>
                                    {office.location}
                                </button>
                            </div>
                            <div >
                                <button
                                    className='border border-primary bg-primary w-full py-3 md:py-4 rounded-2xl mt-6 font-medium'
                                >
                                    Get Direction
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}