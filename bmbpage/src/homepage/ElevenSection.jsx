export default function ElevenSection() {
    return (
        <div className="flex flex-col items-center justify-center xl:mt-8 xl:mb-8">
            <div className="xl:w-8/12 w-full flex flex-col xl:p-0 p-3 items-center justify-center">
                <div><h2 className="text-2xl text-center font-semibold"><span className="text-[#33BE99]">Best Medical Billing</span> vs. <span className="text-blue-500">In-House Billing</span></h2></div>
                <div className="w-full mt-10">
                    <div className="flex w-full">
                        <div className="w-1/3"></div>
                        <div className="w-1/3 bg-green-200 pt-3 pb-3 xl:pl-14 xl:pr-14 rounded-t-2xl text-center xl:text-2xl text-xl font-semibold">With BMB</div>
                        <div className="w-1/3 bg-blue-200 pt-3 pb-3 xl:pl-14 xl:pr-14 rounded-t-2xl text-center xl:text-2xl text-xl font-semibold">In-House Staff</div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/3 flex flex-col justify-center bg-pink-50 p-2 gap-y-2 border-solid border-blue-300 border-t border-l text-center rounded-tl-xl text-sm xl:text-base">Expertise</div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300 border-t border-r border-l text-sm xl:text-base">
                            <p className="text-3xl" >✔</p>
                            <p>Certified 1CD-10 Expertise</p>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300 border-t border-r text-center text-sm xl:text-base">
                            <p className="text-3xl" >❌</p>
                            <p>Lacks ICD-10 training</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/3 flex flex-col justify-center bg-pink-50 p-2 gap-y-2 border-solid border-blue-300  border-l text-center text-sm xl:text-base">Accuracy</div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r border-l text-sm xl:text-base">
                            <p className="text-3xl" >✔</p>
                            <p>Regular audits ensure accuracy</p>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r text-center text-sm xl:text-base">
                            <p className="text-3xl" >❌</p>
                            <p>Prone to errors</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/3 flex flex-col justify-center bg-pink-50 p-2 gap-y-2 border-solid border-blue-300  border-l text-center text-sm xl:text-base">Credentialing</div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r border-l text-sm xl:text-base">
                            <p className="text-3xl" >✔</p>
                            <p>Stronger credentialing resources</p>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r text-center text-sm xl:text-base">
                            <p className="text-3xl" >❌</p>
                            <p>Weaker credentialing support</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/3 flex flex-col justify-center bg-pink-50 p-2 gap-y-2 border-solid border-blue-300  border-l text-center text-sm xl:text-base">Technology</div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r border-l text-sm xl:text-base">
                            <p className="text-3xl" >✔</p>
                            <p>Advanced Medical Billing Software</p>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r text-center text-sm xl:text-base">
                            <p className="text-3xl" >❌</p>
                            <p>Outdated manual billing process</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/3 flex flex-col justify-center bg-pink-50 p-2 gap-y-2 border-solid border-blue-300  border-l text-center rounded-bl-xl border-b text-sm xl:text-base">Scalability</div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r border-l border-b text-sm xl:text-base">
                            <p className="text-3xl" >✔</p>
                            <p>Scalable Anytime</p>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center bg-green-50 p-2 gap-y-2 border-solid border-blue-300  border-r text-center rounded-br-xl border-b text-sm xl:text-base">
                            <p className="text-3xl" >❌</p>
                            <p>Has Capacity Limits</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}