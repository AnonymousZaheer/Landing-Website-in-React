import { useReducer } from "react"
export default function SeventhSection(){
    const activeBtnStyling = 'font-medium pt-1 pb-1 xl:pl-5 p-3 xl:w-full xl:flex inline-block bg-white text-green-700';
    const inactiveBtnStyling = 'font-medium pt-1 pb-1 xl:pl-5 p-3 xl:w-full xl:flex inline-block';

    const [activeButton, dispatch] = useReducer(reducer, 1);
    function reducer(activeButton, action){
        return action.type;
    }
    const buttonData = [
        {id:1, text: 'Lost Revenue', 
            data:{
                data1:"Missing charges and unpaid claims add up resulting in lost revenue. With increasing administrative burdens, it's impossible for porviders to capture every billable charge and follow up on unpaid claims.", 
                data2:"Our medical billing experts recover lost revenue by capturing all billable charges, reducing write-offs, and relentlessly pursusing payments on unpaid claims through startegic appeals and payer outreach."}},
        {id:2, text:'Delayed Payments', 
            data:{
                data1:"The long delay between rendering services and receiving payment plays havoc with oyour cash flow. How can you keep the lights on and make payroll when reimburesement lags months behind your costs?", 
                data2:"We make it a top priority to follow up aggressively on delayed payments and get your claims paid as fast as possible. Count on a steady stream of reimbursement with our best billing protocols."}},
        {id:3, text:'Claim Denials', 
            data:{
                data1:'The constant struggle with denied claims is a total frustration for providers. Valuable time is wasted resubmitting claims only to face more denials. Revenue cycle suffers, and patients are left with unpaid bills.', 
                data2:'Our 99% claim acceptance rate means the denial ratio is almost negligible. But even if an insurance company rejects your good faith efforts with a terse denial, we appeal it until you are paid fairly for your vital work.'}},
        {id:4, text:'Unbounding',
            data:{
                data1:'The insurance company sharpshooters are watching, ready to accuse you of unbundling - splitting procedure codes to overbill. Even an honest mistake can lead to steep penalties and damaged reputation.', 
                data2:'As your medical billing service provider, we ensure your claims are properly bundled and coded to avoid allegations of impropriety. You can sleep soundly knowing your billing is ethical and audit-proof.'}},
        {id:5, text:'Upcoding', 
            data:{
                data1:'Incorrectly assigning higher-level codes to inflate reimbursement is fraudulent and can damage a provider’s reputation. However, providers sometimes miss billable charges or use incorrect codes due to complexity.', 
                data2:'Our best medical billers code accurately based on documentation, ensuring your claims are compliant and honest. You can hold your head high knowing your billing is appropriate and above board.'}},
        {id:6, text:'Modifier', 
            data:{
                data1:"Just one wrong modifier carrying important billing information could trigger a denied claim, unnecessary audit, or underpayment. With all you have to focus on in caring for patients, who has time to comb through modifier minutiae?", 
                data2:'We use correct modifiers on claims per payer guidelines. Our billing team stays current on modifier policies through continuous education. We validate modifier usage through internal audits to prevent underpayment.'}},
        {id:7, text:'Insurance Verification', 
            data:{
                data1:"Is the patient covered? By what plan? What’s the policy on this service? The endless uncertainties around insurance verification can stress you before you’ve even seen your first patient of the day.", 
                data2:"Our best meidcal billing company ensures you get preauthorization when needed and advises you on patient benefits and out of pocket costs. Just point us to the patient, and we'll handle the insurance details."}}
    ]
    return (
        <div className="flex justify-center bg-slate-50 mb-8">
        <div className="xl:w-8/12 w-full flex flex-col items-center xl:pt-10 xl:pb-10 p-3 justify-center gap-5">
            <div className="bg-[#33BE99] pt-1 rounded-lg flex xl:flex-row flex-col">
                <div className="bg-[#E7FAF5] p-0 pt-8 pb-8 flex xl:w-2/3 w-full xl:flex-row flex-col xl:rounded-lg rounded-t-lg">
                    <div className="flex flex-col items-start xl:w-1/2 w-full xl:pr-3 gap-3">
                        <h2 className="font-bold xl:text-2xl text-xl pl-5 pb-4">Billing Solutions for all billing problems</h2>
                        <div className="xl:flex xl:flex-col block whitespace-nowrap overflow-auto w-[310px] xl:w-full  m-auto xl:items-start xl:pr-3 xl:gap-3">
                            {buttonData.map((button)=>(
                                <button key={button.id} onClick={()=>{dispatch({type:button.id})}} className={activeButton === button.id ? activeBtnStyling : inactiveBtnStyling} > {button.text} </button>
                            ))}
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full pt-0 xl:pt-11 pr-3" >
                        <img className="hidden xl:block w-[14%] mt-[-30px] " src="https://img.icons8.com/?size=100&id=ev5wDMyAgBAW&format=png&color=000000"/>
                        <h2 className="mt-[34px] w-full bg-white pt-1 pb-1 pl-3 font-bold mb-5">Problem</h2>
                        <p className="pl-3">{buttonData[activeButton-1].data.data1}</p>
                    </div>
                </div>
                <div className="bg-[#33BE99] xl:w-1/3 w-full rounded-r-lg rounded-b-lg pt-0 pl-5 pr-5 xl:p-5 xl:pt-[70px] pb-8">
                    <img className="hidden xl:block w-[14%] mt-[-25px]" src="https://img.icons8.com/?size=100&id=102880&format=png&color=000000"/>
                    <h2 className="xl:mt-[34px] mt-2 pt-1 pb-1 font-bold xl:mb-5 text-white">Solution</h2>
                    <p className="text-white">{buttonData[activeButton-1].data.data2}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

