import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="bg-[#04805F] w-full p-10">
            <div className="bg-[#E7FAF5] w-[95%] p-10 flex gap-x-8 rounded-3xl" >
                <div className="w-1/4 flex flex-col gap-y-3 items-start" >
                    <Link to='/' ><img src="https://bestmedicalbilling.com/wp-content/uploads/2023/12/bestmedicalbilling_newlogo.svg" alt="" /></Link>
                    <p>Best Medical Billing providers full service medical billing for practices across the USA. We handle billing end to end claims, follow up, collections. Outsource billing and refocus on heartfelt patient care.</p>
                    <button className="bg-[#33be99] pt-1 pb-1 pl-4 pr-4 rounded text-white " >Start Now </button>
                </div>
                <div className="w-1/4 flex flex-col">
                    <h2 className="text-[#33be99] font-semibold text-xl">Services</h2>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Medical Billing</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Medical Coding</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >RCM</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Denial Management</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Medical Billing Software</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Healthcare Digital Marketing</p>
                </div>
                <div className="w-1/4 flex flex-col">
                    <h2 className="text-[#33be99] font-semibold text-xl">Trust & Legal</h2>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Privacy Policy</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Contact Us</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >About Us</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Pricing</p>
                </div>
                <div className="w-1/4 flex flex-col">
                    <h2 className="text-[#33be99] font-semibold text-xl">Socials</h2>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Facebook</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >Instagram</p>
                    <p className="font-semibold text-bsae mt-1 mb-1" >LinkedIn</p>
                </div>
            </div>
        </div>
    )
}