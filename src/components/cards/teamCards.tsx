import type {TeamMember} from "../../types/types.ts";
import {Send, Twitter} from "lucide-react";

export const TeamCard =({ member }: { member: TeamMember }) => {
    return (
        <div className="border border-border rounded-lg p-4 md:p-7 flex-col flex gap-4 mx-2 md:mx-0">
            <div className="relative py-3 w-full">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto md:h-64 object-cover object-top rounded-lg"
                />
                {/* Twitter badge on image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="bg-primary rounded-full px-5 py-2">
                        <Twitter fill="white" color="white"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full text-center">
                <h3 className=" font-medium text-lg mt-2">{member.name}</h3>
                <p className="text-text-myGray! my-2">{member.role}</p>

                <div className="flex items-center justify-between border rounded-full bg-bg2 border-border p-3 my-2">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Say Hello 👋"
                            className="text-text-myGray! text-base md:text-lg focus:outline-none selection:outline-none "
                        >
                        </input>
                    </div>
                    {member.telegramUrl && (
                        <a
                            href={member.telegramUrl}
                            className="bg-primary rounded-full p-2"
                            aria-label={`${member.name} Telegram`}
                        >
                            <Send fill="white" color="white" className="w-4 md:w-6 h-auto" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}