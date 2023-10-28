import { useEffect, useState } from "react";
import Service from "../Home/Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className="text-3xl text-[#FF3811] font-bold">Service</h1>
                <h2 className="mt-4 text-5xl font-bold text-[#151515]">Our Service Area</h2>
                <p className=" mt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {
                    services.map(services => <Service key={services.id} services={services}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;