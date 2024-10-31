export default function SecondSection() {
    return (
        <div className="w-full flex flex-col gap-y-6 items-center mt-6 mb-6" >
            <div className="flex flex-col md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 md:p-0 gap-y-5 items-center rounded-xl " >
                <h2 className="text-[#33be99] text-3xl font-bold">Get In Touch</h2>
                <div className="shadow p-10 w-full ">
                    <form className="w-full flex flex-col gap-y-4" >
                        <div className="flex gap-x-5 items-end w-full " > 
                            <div className=" w-1/2 flex gap-y-2 flex-col" > 
                                <label >Name</label>
                                <input type="text" className="border border-solid rounded pt-1 pb-1 pl-3 pr-3 " />
                                <p>First</p>
                            </div>
                            <div className="w-1/2 flex gap-y-2 flex-col " >
                                <input type="text" className="border border-solid rounded pt-1 pb-1 pl-3 pr-3 "/>
                                <p>Last</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-x-5 gap-y-2 w-full mt-2 mb-2">
                            <label>Email</label>
                            <input type="text" className="border border-solid rounded pt-1 pb-1 pl-3 pr-3" />
                        </div>
                        <div className="flex flex-col gap-x-5 gap-y-2 w-full mt-2 mb-2">
                            <label>Phone</label>
                            <input type="text" className="border border-solid rounded pt-1 pb-1 pl-3 pr-3" />
                        </div>
                        <div className="flex flex-col gap-x-5 gap-y-2 w-full mt-2 mb-2">
                            <label>Phone</label>
                            <textarea type="text" className="border border-solid rounded h-[100px] pt-1 pb-1 pl-3 pr-3" />
                        </div>
                        <button className="bg-[#33be99] pt-2 pb-2 pl-4 pr-4 text-white font-bold" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}