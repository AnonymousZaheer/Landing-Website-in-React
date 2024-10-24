export default function ThirteenSection() {
    return (
        <div className="w-full flex flex-col gap-y-6 items-center pt-8 pb-[70px]" >
            <div className="flex md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 md:p-0 gap-x-2" >
                <div className="bg-[#04805f] p-10 rounded-xl rounded-tr-[60px] w-1/3 flex flex-col gap-y-4 justify-center -mr-8 z-10 -mt-6 ">
                    <h2 className="text-white text-3xl font-bold" >Best Medical Billing Specialties & States</h2>
                    <hr className="w-2/3" />
                    <p className="text-white" >Best Medical Billing services takes care of your medical practice revenue collection regardless of your location and specialty.</p>
                </div>
                <div className="bg-[#E7FAF5] w-2/3 rounded-xl flex gap-x-2 mt-4 -mb-8 ">
                    <div className="w-1/2 flex flex-col gap-y-2 ">
                        <img src="https://bestmedicalbilling.com/wp-content/uploads/2024/09/Group-2026.webp" alt="" />
                        <div className="p-7 flex flex-col items-start gap-y-3 border-[3px] border-r-[#33be99] border-t-0 border-b-0 border-l-0 w-11/12 self-end " >
                            <h2 className="font-semibold text-xl" >Choos your Specialty</h2>
                            <p>Over 50+ Specialties managed by team of certified billers and coders</p>
                            <button className="text-blue-600" >Learn More</button>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-2 " >
                        <img src="https://bestmedicalbilling.com/wp-content/uploads/2024/09/Group-2025.webp" alt="" />
                        <div className="p-7 flex flex-col items-start gap-y-2 " >
                            <h2 className="font-semibold text-xl" >Choos your Location</h2>
                            <p>Available across United States. We are 100% HIPAA- Compliant Company.</p>
                            <button className="text-blue-600" >Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}