import { useReducer } from "react"

export default function NinethSection() {
    const btnData = [
        {
            id: 1, btnText: 'DME Provider',
            data: {
                title: '$25K monthly losses recovered',
                para: "A DME provider's cas flow was drying up. Over 800 bills were stuck, unpaid. They were losing $25K a month. We got them onboard, tracked their billing, found the missed charges. found the missed charges. BMB resolved the denials into dollars.",
                counter1: '800+', counter2: '$25k+', counter3: '3mo.',
                des1: 'Claims Recovered', des2: 'Collections Unlocked', des3: 'Time',
                CTA: 'Book Free Demo'
            }
        },
        {
            id: 2, btnText: 'Nursing Home',
            data: {
                title: '98% of billing claims got paid',
                para: "A nursing home agency neared closure. Denials and revenue leaks plagued them. We mastered their billing, got 98% of claims accepted. Resubmissions and rework plummeted to zero. BMB rescued the healthcare agency.",
                counter1: '90%', counter2: 'MANAGED', counter3: '4mo.',
                des1: 'Claims Recovered', des2: 'Revenue Cycle', des3: 'Time',
                CTA: 'Book Free Demo'
            }
        },
        {
            id: 3, btnText: 'Home Health Agency',
            data: {
                title: '$250 monthly collections managed',
                para: "An HHA collected $250 per month. After their in-house staff resigned, 60 authorizations a day overwhelmed them. BMB managed their accounts, tracked unpard claims, and appealed denials successfully unlocking cash flow.",
                counter1: '$250K+', counter2: '1800+', counter3: '6mo.',
                des1: 'Collections', des2: 'Monthly Authorizations', des3: 'Time',
                CTA: 'Book Free Demo'
            }
        },
    ]
    const [active, dispatch] = useReducer(reducer, 1)
    function reducer(active, action) {
        return action.type
    }
    return (
        <div className="flex justify-center bg-white mb-8">
            <div className="xl:w-8/12 w-full flex items-center  p-3 justify-center gap-x-5">
                <div className="w-[30%] border-r-4 border-[#33be99] border-solid flex flex-col" >
                    {btnData.map((button) => (
                        <button key={button.id} onClick={() => dispatch({ type: button.id })} className={active === button.id ? "text-xl font-bold mt-6 mb-6 text-left " : "text-xl font-normal mt-6 mb-6 text-left "} >{button.btnText}</button>
                    ))}
                </div>
                <div className="w-[70%] flex flex-col gap-y-6" >
                    <h2 className="font-bold text-xl" >{btnData[active - 1].data.title}</h2>
                    <p> {btnData[active-1].data.para} </p>
                    <div className="flex gap-x-10" >
                        <div>
                            <h2 className="font-bold text-lg " >{btnData[active-1].data.counter1}</h2>
                            <p>{btnData[active-1].data.des1}</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg " >{btnData[active-1].data.counter2}</h2>
                            <p>{btnData[active-1].data.des2}</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg " >{btnData[active-1].data.counter3}</h2>
                            <p>{btnData[active-1].data.des3}</p>
                        </div>
                    </div>
                    <button className="bg-[#33be99] text-left self-start pt-1 pb-1 pr-3 pl-3 text-white font-semibold rounded" >{btnData[active-1].data.CTA}</button>
                </div>
            </div>
        </div>
    )
}