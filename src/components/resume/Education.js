import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Information Science and Engineering"
            subTitle="Visvesvaraya Technological University (VTU) (2014-2018)"
            // result="6.5/10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Senior High (Science Major)"
            subTitle="St Atulanand Convent School(CBSE) (2012-2014)"
            // result="6.5/10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Js Developer"
            subTitle="Frontend Developement Team- (2023 - Present)"
            result="Pune, INDIA"
            des="As a React.js Developer at Texala India Pvt Ltd, I have been fortunate to transition into the role in March 2023. This opportunity has allowed me to pursue my passion for frontend development and work with the latest technologies.I am actively involved in developing dynamic and user-friendly web applications using React.js. I am committed to continuously expanding my skill set and staying up-to-date with industry trends."
          />
          <ResumeCard
            title="Test Engineer"
            subTitle="Software Testing Team - (2022 - 2023)"
            result="Pune, INDIA"
            des="Prior to becoming a React.js Developer, I served as a Test Engineer at Texala India Pvt Ltd. In this role, I honed my problem-solving abilities and gained valuable experience in software testing methodologies. I collaborated closely with the development team and contributed to the overall quality of the company's products."
          />
          <ResumeCard
            title="Configuration Analyst"
            subTitle="Implementation Team - (2020-2022) "
            result="Bengaluru,INDIA"
            des="I worked as a Configuration Analyst at Replicon Software. This role allowed me to develop a strong foundation in software configuration and gain insights into the complexities of enterprise software solutions. I acquired valuable analytical and problem-solving skills during my tenure."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Education;
