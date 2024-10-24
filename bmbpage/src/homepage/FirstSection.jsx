import { useEffect, useState } from "react";

export default function FirstSection() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (count1 < 1.5) {
                setCount1(Math.ceil(count1 + 1));
            } else {
                clearInterval(interval1);
            }
        }, 0.2);

        const interval2 = setInterval(() => {
            if (count2 < 1200) {
                setCount2(Math.ceil(count2 + 1));
            } else {
                clearInterval(interval2);
            }
        }, 0.9);

        const interval3 = setInterval(() => {
            if (count3 < 99.9) {
                setCount3(Math.ceil(count3 + 1));
            } else {
                clearInterval(interval3);
            }
        }, 8);

        const interval4 = setInterval(() => {
            if (count4 < 5.6) {
                setCount4(Math.ceil(count4 + 1));
            } else {
                clearInterval(interval4);
            }
        }, 100);

        const interval5 = setInterval(() => {
            if (count5 < 50) {
                setCount5(Math.ceil(count5 + 1));
            } else {
                clearInterval(interval5);
            }
        }, 10);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
            clearInterval(interval5);
        };
    }, [count1, count2, count3, count4, count5]);
    return (
        <div className="w-full flex flex-col gap-y-6 items-center pt-10 pb-10 bg-[#e7faf585]  bg-[url(https://bestmedicalbilling.com/wp-content/uploads/2024/01/Home-S1-P2.webp)] bg-cover bg-center " >
            <div className="flex md:w-[90%] lg:w-[80%]  w-full pl-2 pr-2 md:p-0 gap-x-5 items-center" >
                <div className="w-1/2 flex flex-col gap-y-3" >
                    <h2>BEST MEDICAL BILLING COMPANY</h2>
                    <p className="lg:text-4xl md:text-3xl text-xl font-bold w-ful lg:w-[90%]" >Connecting healthcare providers to the payments they've earned!</p>
                    <p className="lg:w-[70%] w-full text-base font-medium ">The reimbursements come quick, the claims get accepted dollars again - only after the best Medical Billing Company takes charge!</p>
                    <div className="flex w-full gap-x-2 items-end">
                        <div>
                            <button className="bg-[#33be99] text-white rounded-md font-semibold p-1 pl-2 pr-2">Schedule Free Consultation</button>
                        </div>
                        <div className="flex flex-col gap-y-2" >
                            <div>⭐⭐⭐⭐⭐ <span className=" text-[#458DCA] font-medium" >4.8/5</span></div>
                            <button className=" bg-[#458DCA] text-white rounded-md font-semibold p-1 pl-2 pr-2" >Check Reviews</button>
                        </div>
                        <div>
                            <button className=" bg-[#f8924f] text-white rounded-md font-semibold p-1 pl-2 pr-2">Review Us</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3" >
                    <img src="https://bestmedicalbilling.com/wp-content/uploads/2024/01/Home-S1-P1.webp" alt="" />
                </div>
            </div>

            <div className="flex md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 md:p-0 gap-x-5 items-center">
                <div className="w-full flex xl:flex-row flex-wrap items-center bg-white p-1 rounded border-blue-500 border justify-center">
                    <div className="xl:w-1/5 w-1/2 p-3 border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="text-4xl font-bold"><span className="counter">{count1}</span> k+</h2>
                        <h3 className="text-sm text-center">USA providers served</h3>
                    </div>
                    <div className="xl:w-1/5 w-1/2 p-3 xl:border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="text-4xl font-bold"><span className="counter ">{count2}</span> +</h2>
                        <h3 className="text-sm text-center">Medical billing experts</h3>
                    </div>
                    <div className="xl:w-1/5 w-1/2 p-3 border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="text-4xl font-bold"><span className="counter">{count3}</span> %</h2>
                        <h3 className="text-sm text-center">Claim acceptance rate</h3>
                    </div>
                    <div className="xl:w-1/5 w-1/2 p-3 xl:border-r-2 border-slate-400 flex flex-col items-center">
                        <h2 className="text-4xl font-bold">$<span className="counter">{count4}</span> M+</h2>
                        <h3 className="text-sm text-center">Lost Revenue recovered</h3>
                    </div>
                    <div className="xl:w-1/5 w-1/2 p-3 xl:flex flex-col items-center hidden">
                        <h2 className="text-4xl font-bold"><span className="counter">{count5}</span></h2>
                        <h3 className="text-sm text-center">USA States</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}