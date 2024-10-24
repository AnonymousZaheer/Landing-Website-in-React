import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EightSection from "./EightSection";
import Example2 from "../contact/Example2";
import NinethSection from "./NinethSection";
import TenthSection from "./TenthSection";
import ElevenSection from "./ElevenSection";
import TwelveSection from "./TwelveSection";
import ThirteenSection from "./ThirteenSection";

export default function Homepage(){
    return(
        <div className="w-full flex justify-center flex-col" >
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EightSection />
            <NinethSection />
            <TenthSection />
            <ElevenSection />
            <TwelveSection />
            <ThirteenSection />
        </div>
    )
}