import { useState } from "react"

export default function SecondSection() {
    const [inputs, setInputs] = useState({name:'', email:'', phone_Number:'', state:''});
    return (
        <div className="flex justify-center bg-[url(https://bestmedicalbilling.com/wp-content/uploads/2024/03/bg-1-scaled.webp)] bg-cover bg-center">
            <div className="xl:w-8/12 w-full flex flex-col items-center xl:pt-10 xl:pb-10 p-3 justify-center">
                <h2 className="xl:text-3xl text-xl font-semibold text-white">SCHEDULE A FREE APPOINTMENT</h2>
                <form className="mt-7 w-full flex xl:flex-row flex-col gap-y-3 gap-x-4 justify-center" action="mailto:zaheerahmadsafeer2@gmail.com">
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="text" value={inputs.name} onChange={(e)=>setInputs({...inputs, name:e.target.value})} name="name" placeholder="Name" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="email" value={inputs.email} onChange={(e)=>setInputs({...inputs, email:e.target.value})} name="email" placeholder="Email" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="tel" value={inputs.tel} onChange={(e)=>setInputs({...inputs, tel:e.target.value})} name="phonenumber" placeholder="Phone Number" />
                    <input className="xl:w-1/5 w-full pt-2 pb-2 pl-3 rounded mr-1" type="text" value={inputs.state} onChange={(e)=>setInputs({...inputs, state:e.target.value})} name="state" placeholder="State" />
                    <button className="hover:bg-blue-900 bg-[#33BE99] to-white p-2 pl-10 pr-10 rounded-md text-white font-semibold" type="submit" value="submit">Submit</button>
                </form>
                <p className="mt-7 text-white">Your information is 100% secured with us.</p>
            </div>
        </div>
    )
}