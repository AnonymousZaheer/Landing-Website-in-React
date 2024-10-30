export default function ThirdSection() {
    return (
        <div className="w-full flex flex-col gap-y-6 items-center mt-6 mb-6  bg-[#E7FAF5]">
            <div className="flex md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 gap-x-5 items-center rounded-xl mt-10 pt-10 pb-10 " >
                <div className="w-1/2" >
                    <img src="https://bestmedicalbilling.com/wp-content/uploads/2024/03/About-S2-P2.webp" alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-y-3 " >
                    <h2 className="font-bold text-2xl" >Our  Dedication to the <span className="text-[#33BE99]" > US </span>Healthcare Compliance</h2>
                    <p>The US healthcare System has so many rules and they are always changing. Following the rules for billing and coding is hard for doctors. At BMB, we take the rules very serioulsy. Our team stays up to date with billing coding rules to reduce the change of denied bills or audits for our clients.</p>
                </div>
            </div>
        </div>
    )
}