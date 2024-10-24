import { useEffect, useState } from "react"

export default function FirstSection() {
    const URL = 'https://bestmedicalbilling.com/wp-json/wp/v2/posts'
    const [array, setArray] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(URL);
            const data = await res.json();
            setArray(data);
            console.log(data);
        }
        fetchPosts();
    }, [])
    return (
        <div>
            <div className="w-full flex flex-col gap-y-6 items-center pt-[100px] pb-[100px] bg-[url(https://bestmedicalbilling.com/wp-content/uploads/2024/08/blog-s1-p1-scaled.webp)] bg-cover bg-center " >
                <div className="flex flex-col md:w-[90%] lg:w-[80%]  w-full pl-2 pr-2 md:p-0 gap-x-5 items-center" >
                    <h2 className="text-4xl font-bold text-white " >Blogs</h2>
                </div>
                <div className="flex flex-col md:w-[90%] lg:w-[80%]  w-full pl-2 pr-2 md:p-0 gap-x-5 items-center" >

                </div>
            </div>
            <div className="w-full flex flex-col gap-y-6 items-center pt-[100px] pb-[100px]">
                <div className="flex flex-wrap  md:w-[90%] lg:w-[80%]  w-full bg-green-100 pl-2 pr-2 md:p-0 gap-x-0 items-center" >
                    {array.map((item, index)=>(
                        <div key={index} className="w-1/3 p-2">
                            <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="" />
                            <p  >{item.title.rendered}</p>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    )
}