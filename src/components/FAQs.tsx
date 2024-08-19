import { faqs } from "@/utilities/data";
import Accordion from "./Accordion";

const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-2xl mx-auto">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="py-7 border-b border-white/30">
              <Accordion question={question} answer={answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
