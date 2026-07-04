import type {Client} from "../../types/types.ts";
import {ExternalLink, LayoutGrid, Zap} from "lucide-react";

export const ClientCard = ({client}: { client: Client }) => (
    <section className="border border-[#262626] rounded-2xl bg-[#141414] p-5 md:p-8 flex flex-col gap-4 flex-wrap Shadow">
        <div className="flex items-start md:justify-between gap-2 flex-col md:flex-row ">
            <div className="flex flex-col gap-1 ">
                <span className="text-text-myGray! text-sm md:text-base">Since {client.since}</span>
                <h3 className=" font-medium text-xl md:text-2xl ">{client.name}</h3>
            </div>
            {client.websiteUrl && (
                <a
                    href={client.websiteUrl}
                    className="w-full md:w-auto bg-bg2 border border-border rounded-lg px-2 md:px-3 py-2  text-sm md:text-base font-medium hover:border-primary transition-colors flex justify-center gap-1.5 whitespace-nowrap my-2 md:my-0"
                    aria-label={`Visit ${client.name} website`}
                >
                    <ExternalLink className="h-auto w-4"/>
                    Visit Website
                </a>
            )}
        </div>

        <div className="grid grid-cols-2 gap-2">
            <div className="">
                <LayoutGrid size={17} color="#999999" className="inline mr-2"/>
                <span className="text-text-myGray! text-sm md:text-base">{client.domain}</span>
                <h4 className="block text-sm md:text-base max-w-2/4 md:max-w-4/4">Commercial Real Estate</h4>
            </div>
            <div className=" pl-2 border-l border-border">
                <Zap size={17} color="#999999" className="inline mr-2"/>
                <span className="text-text-myGray! text-sm md:text-base">{client.category}</span>
                <h4 className="block text-sm md:text-base max-w-2/4 md:max-w-4/4">Luxury Home Development</h4>
            </div>
        </div>

        <div className="border border-border rounded-lg p-5">
            <div className="flex flex-col gap-2">
                <span className="text-text-myGray! font-medium text-sm md:text-base ">What They Said 🤗</span>
                <p className="text-sm md:text-base leading-relaxed">{client.testimonial}</p>
            </div>
        </div>

    </section>
);
