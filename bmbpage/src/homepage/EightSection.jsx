export default function EightSection() {
    return (
        <div className="flex justify-center bg-white mb-8">
            <div className="xl:w-8/12 w-full flex items-center xl:pt-10  p-3 justify-center gap-x-5">
            <div className="w-1/2 flex flex-col items-start">
                <p className="bg-[#33BE99] rounded text-white p-2">Case Studies</p>
                <h2 className="font-bold text-2xl mt-5 mb-5">Best Medical Billing Wins</h2>
                <p>Our physician billing companies has helped healthcare facilities across the USA to collect more in less time on auto-pilot. From translating patient diagnosis into reimburesable ICD-10 codes to recouping lost denials, our real-world case studies demonstrate our ability to make medical billing work for any specialty provider in the USA.</p>
            </div>
            <div className="w-1/2" >
                <img src="https://bestmedicalbilling.com/wp-content/uploads/2024/09/Mask-group-23.webp" alt="" />
            </div>
            </div>
        </div>
    )
}