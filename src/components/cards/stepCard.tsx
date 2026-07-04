
import type {ProcessStep} from "../../types/types.ts";

export const StepCard = ({step}: { step: ProcessStep }) => (
    <section>
        <div
            className="px-4 py-2"
            style={{
                borderImage: "linear-gradient(to right, #703bf7, transparent) 1",
                borderBottom: "1px solid",
                borderLeft: "1px solid",
            }}
        >
            <span className=" text-sm md:text-base">{step.stepNumber}</span>
        </div>

        <div
            className="p-6 md:p-8 rounded-lg overflow-hidden "
            style={{
                borderImage: "linear-gradient(to bottom, #7c3aed, transparent) 1",
                borderLeft: "1px solid",
                boxShadow: "1px 1px 0 rgba(38,38,38,1), 1px 0 0 rgba(38,38,38,1)",
            }}
        >
            <h3 className="font-semibold leading-snug text-lg mb-2">{step.title}</h3>
            <p className="text-text-myGray! text-sm md:text-base leading-relaxed min-h-20 md:min-h-28">{step.description}</p>
        </div>
    </section>
);
