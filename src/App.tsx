import './App.css'
import { MainLayout } from "./layout/mainLayout.tsx";
import { lazy, Suspense } from "react";
import {Toaster} from "sonner";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./pages/home/index.tsx"));
const About = lazy(() => import("./pages/about/index.tsx"));
const Properties = lazy(() => import("./pages/properties/index.tsx"));
const Services = lazy(() => import("./pages/services/index.tsx"));
const PropertyDetails = lazy(() => import("./pages/properties/propertyDetails.tsx"))
const Login = lazy(() => import("./pages/auth/login.tsx"));
const Register = lazy(() => import("./pages/auth/register.tsx"));
const NotFound = lazy(() => import("./pages/notFound/index.tsx"));
const ConnectSection = lazy(() => import("./pages/contact/index.tsx"));
const Loading = lazy(() => import("./pages/loading/index.tsx"));

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/properties" element={<Properties/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/contact" element={<ConnectSection/>}/>
                    </Route>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/propertyDetails/:id" element={<PropertyDetails/>} />
                    <Route path="*" element={<NotFound/>}/>

                </Routes>
            </Suspense>
            <Toaster position="top-right" toastOptions={{
                classNames: {
                    toast: 'bg-[#141414]! border-border! text-xl',
                },
            }}/>
        </QueryClientProvider>
    );
}

export default App;