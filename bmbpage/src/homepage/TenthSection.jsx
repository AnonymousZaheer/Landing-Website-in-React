import { useState } from "react"
import { homeForm2 } from "../formsDataHandling/formData";

export default function TenthSection() {
    const [data, setData] = useState({
        from_name:'',
        to_email:'',
        phone:''
    })

    function handleData(e){
        e.preventDefault();
        homeForm2(data);
    }

    return (
        <div className="flex flex-col items-center justify-center bg-[url(https://bestmedicalbilling.com/wp-content/uploads/2024/03/group_757.webp)] bg-cover bg-center  mt-8 mb-8">
            <div className="xl:w-9/12 w-full flex xl:flex-row flex-col items-center xl:pt-[80px] xl:pb-10 p-3 justify-between xl:gap-10 gap-3">
                <div className="flex xl:flex-row flex-col gap-5">
                    <p className="xl:w-2/5 w-full text-4xl xl:text-right text-center font-bold text-white">Best <br /> Medical <br /> Billing</p>
                    <p className="xl:w-3/5 w-full xl:text-8xl text-xl xl:text-left text-center font-bold text-white">DEMO</p>
                </div>
                <div className="xl:w-7/12 w-full flex items-center bg-white p-1 rounded-3xl border">
                    <div className="w-1/3 p-5 border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="xl:text-3xl text-xl font-bold"><span className="counter">1200</span> +</h2>
                        <h3 className="text-sm">Billing Experts</h3>
                    </div>
                    <div className="w-1/3 p-5 border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="xl:text-3xl text-xl font-bold"><span className="counter">99.9</span> %</h2>
                        <h3 className="text-sm">Claim A/R</h3>
                    </div>
                    <div className="w-1/3 p-5 flex flex-col items-center">
                        <h2 className="xl:text-3xl text-xl font-bold"><span className="counter">50</span></h2>
                        <h3 className="text-sm">USA States</h3>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center xl:pt-8 p-3 xl:pb-[80px]">
                <form className="flex xl:flex-row w-full justify-center flex-col gap-3">
                    <input type="text" placeholder="Name" value={data.from_name} onChange={(e)=>setData({...data, from_name:e.target.value})} className="pt-2 pb-2 pl-3 pr-3 rounded-md" />
                    <input type="email" placeholder="Email" value={data.to_email} onChange={(e)=>setData({...data, to_email:e.target.value})} className="pt-2 pb-2 pl-3 pr-3 rounded-md" />
                    <input type="tel" placeholder="Phone Number" value={data.phone} onChange={(e)=>setData({...data, phone:e.target.value})} className="pt-2 pb-2 pl-3 pr-3 rounded-md" />
                    <button onClick={handleData}  type="button" className="bg-[#33BE99] text-white rounded-md pt-2 pb-2 pr-4 pl-4">Submit</button>
                </form>
            </div>
        </div>
    )
}