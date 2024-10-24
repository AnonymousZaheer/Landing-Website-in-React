import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function FifthSection() {
    return (
        <div className="flex justify-center bg-[#33BE99] pt-10 pb-10 mt-10">
            <div className="xl:w-8/12 w-full flex flex-col items-center xl:pt-10 xl:pb-0 p-3 justify-center">
                <Swiper className='w-full'
                    module={[Autoplay, A11y]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:false
                    }}
                    slidesPerView={3}>
                    <SwiperSlide>
                        <div className='flex gap-x-4'>
                            <div className="text-4xl" >📄</div>
                            <div>
                                <p className='text-xl font-semibold text-white' >Our Clinical order saved a client from OIG investigation</p>
                                <p className='text-slate-200 mt-2 ' >a few days ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-4'>
                            <div className="text-4xl" >🏥</div>
                            <div>
                                <p className='text-xl font-semibold text-white' >Our Clinical order saved a client from OIG investigation</p>
                                <p className='text-slate-200 mt-2 ' >a few days ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-4'>
                            <div className="text-4xl" >🏡</div>
                            <div>
                                <p className='text-xl font-semibold text-white' >Our Clinical order saved a client from OIG investigation</p>
                                <p className='text-slate-200 mt-2 ' >a few days ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-4'>
                            <div className="text-4xl" >🚑</div>
                            <div>
                                <p className='text-xl font-semibold text-white' >Our Clinical order saved a client from OIG investigation</p>
                                <p className='text-slate-200 mt-2 ' >a few days ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-4'>
                            <div className="text-4xl" >🏬</div>
                            <div>
                                <p className='text-xl font-semibold text-white' >Our Clinical order saved a client from OIG investigation</p>
                                <p className='text-slate-200 mt-2 ' >a few days ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}