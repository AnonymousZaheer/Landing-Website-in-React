export default function FirstSection() {
    return (
        <div className="w-full flex flex-col gap-y-6 items-center mt-6 mb-6" >
            <div className="flex md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 md:p-0 gap-x-5 items-stretch shadow-lg rounded-xl " >
                <div className="w-2/3 flex flex-col p-10 justify-center " >
                    <h2 className="font-semibold text-2xl"><span className="text-[#33BE99]" >BMB's Mission</span> to Transform Medical Billing</h2>
                    <hr className="w-1/3 text-[#33BE99] mt-3 mb-3" />
                    <p className="text-lg" >At BestMedicalBilling (BMB), our goal is to totally change how doctors think about medical billing. We want to make it way easier instead of a hassle. We know it's super boring to fill out forms and stuff. But we have got experts who can do it for you. That way, you can focus on helping people get better.</p>
                </div>
                <div className="w-1/3 flex flex-col bg-[#33be99] rounded-r-xl p-5">
                    <div className="w-full flex flex-col bg-white shadow-lg rounded-lg p-4">
                        <h2 className=" text-center text-[#33BE99] font-bold text-xl ">Schedule Your Free Demo</h2>
                        <form className="w-full flex flex-col" >
                            <input type="text" className="border-slate-200 border rounded p-2 w-full mt-1 mb-1 outline-none " placeholder="Name" />
                            <input type="text" className="border-slate-200 border rounded p-2 w-full mt-1 mb-1 outline-none " placeholder="Email" />
                            <input type="text" className="border-slate-200 border rounded p-2 w-full mt-1 mb-1 outline-none  " placeholder="Phone Number" />
                            <input type="text" className="border-slate-200 border rounded p-2 w-full mt-1 mb-1 outline-none  " placeholder="Monthly Collection" />
                            <input type="text" className="border-slate-200 border rounded p-2 w-full mt-1 mb-1 outline-none  " placeholder="Your Location" />
                            <button className="bg-[#33be99] rounded text-white pt-1 pb-1 pl-3 pr-3 mt-3 " >Schedule My Demo</button>
                        </form>
                        <p className="italic text-center">In a Hurry?</p>
                        <p className="text-center">Call : 1-888-488-5015</p>
                    </div>
                </div>
            </div></div>
    )
}