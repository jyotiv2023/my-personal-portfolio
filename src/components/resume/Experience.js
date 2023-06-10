import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Js Developer"
            subTitle="Frontend Engineering Team (2023-Present)"
            result="Pune,INDIA"
            des="Implementing responsive designs and ensured optimal performance across different devices and browsers is the prior most goal of our team"
          />
          <ResumeCard
            title="Test Engineer"
            subTitle="Testing  Team - (2022 - 2023)"
            result="Pune,INDIA"
            des="Participated in Agile development processes and provided valuable feedback to improve product quality."
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Configuration Analyst"
            subTitle="Replicon Softwares - (2020-2021)"
            result="Bengaluru, INDIA"
            des="Configured and customized software applications according to client requirements.Provided technical support and troubleshooting for client-specific configurations."
          />
          <ResumeCard
            title="Technical Consultant"
            subTitle="Edureka (2019 - 2020)"
            result="Bengaluru, INDIA"
            des="Provided technical guidance and support to clients, resolving their queries and issues.Collaborated with the sales team to understand client requirements and propose appropriate solutions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
