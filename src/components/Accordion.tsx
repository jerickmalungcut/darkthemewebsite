"use client";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex items-center" onClick={handleClick}>
        <span className="flex-1 text-lg font-bold flex justify-between cursor-pointer">
          {question}
          {!isOpen ? <FaPlus /> : <FaMinus />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className={!isOpen ? "hidden" : "mt-4"}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Accordion;
