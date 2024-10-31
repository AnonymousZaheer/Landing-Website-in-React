import { useState } from "react"
import { homeForm1 } from "../formsDataHandling/formData";

export default function SecondSection() {
    const [inputs, setInputs] = useState({from_name:'', to_email:'', phone:'', state:''});
    const handleSendEmail = (e)=>{
        e.preventDefault();
        homeForm1(inputs);
    }
    return (
        <div className="flex justify-center bg-[url(https://bestmedicalbilling.com/wp-content/uploads/2024/03/bg-1-scaled.webp)] bg-cover bg-center">
            <div className="xl:w-8/12 w-full flex flex-col items-center xl:pt-10 xl:pb-10 p-3 justify-center">
                <h2 className="xl:text-3xl text-xl font-semibold text-white">SCHEDULE A FREE APPOINTMENT</h2>
                <form className="mt-7 w-full flex xl:flex-row flex-col gap-y-3 gap-x-4 justify-center">
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="text" value={inputs.from_name} onChange={(e)=>setInputs({...inputs, from_name:e.target.value})} name="name" placeholder="Name" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="email" value={inputs.to_email} onChange={(e)=>setInputs({...inputs, to_email:e.target.value})} name="email" placeholder="Email" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="tel" value={inputs.phone} onChange={(e)=>setInputs({...inputs, phone:e.target.value})} name="phonenumber" placeholder="Phone Number" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="text" value={inputs.state} onChange={(e)=>setInputs({...inputs, state:e.target.value})} name="state" placeholder="State" />
                    <button className="hover:bg-blue-900 bg-[#33BE99] to-white p-2 pl-10 pr-10 rounded-md text-white font-semibold" type="submit" value="submit" onClick={handleSendEmail} >Submit</button>
                </form>
                <p className="mt-7 text-white">Your information is 100% secured with us.</p>
            </div>
        </div>
    )
}