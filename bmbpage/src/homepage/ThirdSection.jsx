import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function ThirdSection() {
    return (
        <div className="flex justify-center bg-white">
            <div className="xl:w-8/12 w-full flex flex-col items-center xl:pt-10 xl:pb-0 p-3 justify-center">
                <h2 className="xl:text-2xl text-xl font-semibold text-black">Our Best Medical Billing Services</h2>
                <Swiper className='w-full pt-10 pb-10'
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{delay:1000}}
                    slidesPerView={4}
                    navigation ={{
                        prevEl:'.prev',
                        nextEl:'.next'
                    }} >  <div className='flex justify-between w-full absolute top-[130px] z-10'><div className='prev left-10 '  > ◀ </div><div className='next' > ▶ </div></div>
                    
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Medical Billing</h2>
                            <p>Maximize revenue and streamline the claims process with our expert medical billing services.
                            </p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Credentialing</h2>
                            <p>Get providers credentialed and contracted with payers quickly through our credentialing experts.
                            </p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Medical Coding</h2>
                            <p>Ensure accurate diagnosis and procedure coding with our certified medical coding specialists                            .</p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Healthcare RCM</h2>
                            <p>End-to-end revenue cycle solutions to optimize financial performance for your practice.
                            </p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Denial Management</h2>
                            <p>Appeal and overturn denials with our denial management team fighting on your side.
                            </p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Claim Scrubbing</h2>
                            <p>Reduce rejected claims through our detailed claim scrubbing and correction services.
                            </p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-0'>
                        <div className="bg-[#e7faf585] p-5 rounded-lg flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-2">Billing Audit</h2>
                            <p>Identify issues and maximize revenue with a comprehensive audit of your billing operations.</p>
                            <button className="text-sm bg-[#33BE99] text-white pt-1 pb-1 pl-4 pr-4 rounded mt-2">Read More</button>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}