import { useReducer } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function () {
    const content = {
        value1: <div className="flex flex-col w-full items-center pt-10 pl-10 pr-10" >
            <h2 className="text-3xl font-bold w-[60%] text-center capitalize mb-2" >✨What is healthcare Providers Say about out beilling service?</h2>
            <p className="w-[50%] text-center" >Don't take our word for it! Read testimonial from doctors across the country on how our customized billing services have optimized their revenue cycle.</p>
            <div className="flex mt-05 items-center">
                <img width="35%" className=" mr-[-140px] z-10 mt-[-30px]" src="https://bestmedicalbilling.com/wp-content/uploads/2024/08/img1-768x1235.webp" alt="" />
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}>
                    <SwiperSlide>
                        <div className="bg-white rounded-md shadow-xl pt-8 pb-8 pl-4 pr-4 flex flex-col items-center gap-y-4 min-h-[400px]">
                            <img width="30%" src="https://bestmedicalbilling.com/wp-content/uploads/2024/08/41imges.webp" alt="" />
                            <p className="text-center" >I rarely worry about claim denials or unpaid balances thanks to this medical billing company’s commitment and expertise. Highly recommended for any busy practice.</p>
                            <h3>Dr. A Chen</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white rounded-md shadow-xl pt-8 pb-8 pl-4 pr-4 flex flex-col items-center gap-y-4 min-h-[400px]">
                            <img width="30%" src="https://bestmedicalbilling.com/wp-content/uploads/2024/08/group_1864.webp" alt="" />
                            <p className="text-center" >As a solo physician, I used to spend hours on billing tasks. Now this company handles everything from charge entry to following up on unpaid claims. It’s been a huge help against burnout.</p>
                            <h3>Dr. A Chen</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white rounded-md shadow-xl pt-8 pb-8 pl-4 pr-4 flex flex-col items-center gap-y-4 min-h-[400px]">
                            <img width="30%" src="https://bestmedicalbilling.com/wp-content/uploads/2024/08/3imges.webp" alt="" />
                            <p className="text-center" >I’ve been impressed with this company’s responsiveness and their ability to work well with both insurance companies and patients during claims disputes or billing questions.</p>
                            <h3>Dr. A Chen</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white rounded-md shadow-xl pt-8 pb-8 pl-4 pr-4 flex flex-col items-center gap-y-4 min-h-[400px]">
                            <img width="30%" src="https://bestmedicalbilling.com/wp-content/uploads/2024/08/1imges.webp" alt="" />
                            <p className="text-center" > After switching to the best medical billing company, I’ve seen a noticeable increase in revenue with fewer denied claims. Their knowledgeable staff fulfills complex insurance requirements.</p>
                            <h3>Dr. A Chen</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>,
        value2: <div className="flex flex-col w-full items-center p-10" >
            <h2 className="text-3xl font-bold w-[60%] text-center capitalize mb-2" >✨Rate Our Medical Billing Services</h2>
            <p className="w-[50%] text-center" >Help fellow practices by leaving an honest review of our billing services. Your feedback allows us to improve and helps others make informed decisions.</p>
            <div className="flex flex-col mt-10 items-center w-full">
                <form className="flex flex-col w-full ">
                    <div className="flex w-full gap-x-6 mt-2 mb-2">
                        <div className="flex flex-col w-1/2" >
                            <label className="mb-2 font-medium " >Name<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Enter your Name" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                        <div className="flex flex-col w-1/2" >
                            <label className="mb-2 font-medium " >Practice Name<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Enter your Practice Name" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-6 mt-2 mb-2">
                        <div className="flex flex-col w-1/2" >
                            <label className="mb-2 font-medium " >Email<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Enter your Email" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                        <div className="flex flex-col w-1/2" >
                            <label className="mb-2 font-medium " >Phone Number<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Enter your Phone Number" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-6 mt-2 mb-2">
                        <div className="flex flex-col w-full" >
                            <label className="mb-2 font-medium " >Message<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Enter your Message" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-6 mt-2 mb-2">
                        <div className="block w-1/2">
                            <label className="mb-2 font-medium " >What feature do you find most useful?<span className="text-red-600">*</span></label><br/>
                            <input type="radio" name="feature" id="Mental_Health"/>
                            <label htmlFor="Mental_Health">Mental Health</label> <br/>
                            <input type="radio" name="feature" id="Dermatology"/>
                            <label htmlFor="Dermatology">Dermatology</label><br/>
                            <input type="radio" name="feature" id="LR"/>
                            <label htmlFor="LR">Lab & Radiology</label><br/>
                            <input type="radio" name="feature" id="Other"/>
                            <label htmlFor="Other">Others</label>
                        </div>
                        <div className="flex flex-col w-1/2" >
                            <label className="mb-2 font-medium " >Feature you feel are missing or could improved?<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Your Reviews" className="border rounded-xl border-slate-500 p-2" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-6 mt-2 mb-2">
                        <button className="bg-[#33BE99] text-white uppercase font-medium w-full pt-1 pb-1 pl-4 pr-4 rounded-md hover:bg-blue-500">Send Feedback</button>
                    </div>
                </form>
            </div>
        </div>,
        value3:
            <div className="flex flex-col w-full items-center p-10" >
                <h2 className="text-3xl font-bold w-[60%] text-center capitalize mb-2" >✨Schedule a Free Demo</h2>
                <p className="w-[50%] text-center" >Let our experienced medical billing specialists walk you through a customized demo showing how we can optimize your revenue cycle. Take the first step to increased revenue and decreased denials now!</p>
                <div className="flex flex-col mt-10 items-center w-full">
                    <form className="flex flex-col w-full ">
                        <div className="flex w-full gap-x-6 mt-2 mb-2">
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " >Name<span className="text-red-600">*</span></label>
                                <input type="text" placeholder="First Name" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " ><span className="text-red-600">*</span></label>
                                <input type="text" placeholder="Last Name" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                        </div>
                        <div className="flex w-full gap-x-6 mt-2 mb-2">
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " >Email Address<span className="text-red-600">*</span></label>
                                <input type="text" placeholder="Enter your Email Address" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " >Phone Number<span className="text-red-600">*</span></label>
                                <input type="text" placeholder="Enter your Phone Number" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                        </div>
                        <div className="flex w-full gap-x-6 mt-2 mb-2">
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " >Monthly Collections<span className="text-red-600">*</span></label>
                                <input type="text" placeholder="Enter your Monthly Collections" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                            <div className="flex flex-col w-1/2" >
                                <label className="mb-2 font-medium " >Location<span className="text-red-600">*</span></label>
                                <input type="text" placeholder="Enter your Location" className="border rounded-xl border-slate-500 p-2" />
                            </div>
                        </div>
                        <div className="flex w-full gap-x-6 mt-2 mb-2 justify-center">
                        <button className="bg-[#33BE99] text-white uppercase font-medium pt-1 pb-1 pl-4 pr-4 rounded-md hover:bg-blue-500">Schedule My Demo</button>
                    </div>
                    </form>
                </div>
            </div>
    }
    const [active, dispatch] = useReducer(reducer, 1)

    function reducer(active, action) {
        return action.type
    }
    const activeBtn = 'bg-[#04805f] text-white p-2 rounded-xl';
    const inactiveBtn = 'text-white p-2 rounded-xl';
    const btnData = [
        { id: 1, text: 'Check Reviews', data: content.value1 },
        { id: 2, text: 'Review Us', data: content.value2 },
        { id: 3, text: 'Schedule a Demo', data: content.value3 }
    ]

    return (
        <div className="w-full flex flex-col gap-y-6 items-center pt-10 " >
            <div className="flex flex-col  md:w-[90%] lg:w-[80%] w-full pl-2 pr-2 md:p-0 gap-x-5 items-center" >
                <div className="flex justify-center bg-[#33be99] rounded-2xl p-3 gap-x-5">
                    {
                        btnData.map((btn, index) =>
                            (<button className={btn.id === active ? activeBtn : inactiveBtn} key={index} onClick={() => dispatch({ type: btn.id })}>{btn.text}</button>)
                        )
                    }
                </div>
                <div className="w-full bg-[#90bbb081] mt-10 mb-10 rounded-lg">{btnData[active - 1].data}</div>
            </div>
        </div>
    )
}