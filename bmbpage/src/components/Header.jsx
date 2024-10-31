import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="bg-[#e7faf585] flex w-full pt-2 pb-2 pl-1 pr-1 justify-center shadow " >
            <div className="w-[82%] flex gap-x-3 items-center" >
                <div className="w-[20%] ">
                    <img src="https://bestmedicalbilling.com/wp-content/uploads/2023/12/bestmedicalbilling_newlogo.svg" />
                </div>
                <div className="flex w-[50%] justify-center gap-x-3 ">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className="flex gap-x-3 w-[30%] justify-end" >
                    <button className="bg-white pt-1 pb-1 pl-4 pr-4 border-solid rounded border-[#33be99] border text-[#33be99]" >Call Now</button>
                    <button className="bg-[#33be99] pt-1 pb-1 pl-4 pr-4 border-solid rounded border-[#33be99] border text-white" >Book Appointment</button>
                </div>
            </div>
        </div>
    )
}