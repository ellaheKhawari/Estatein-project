import {Hero} from "./heroSection.tsx";
import {OfficeLocationSection} from "./officeLocationSection.tsx";
import {ContactFormSection} from "./contactFormSection.tsx";
import {GallerySection} from "./gallerySection.tsx";

export default function ConnectSection() {
    return (
        <>
            <Hero/>
            <ContactFormSection/>
            <OfficeLocationSection/>
            <GallerySection/>
        </>
    );
}
