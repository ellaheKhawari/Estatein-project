import { Outlet } from "react-router-dom";
import AnnouncementBar from "../components/header/annoucementBar.tsx";
import Header from "../components/header/index.tsx";
import Footer from "../components/footer";

export function MainLayout() {
    return (
        <>
            <AnnouncementBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}