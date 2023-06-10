import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MODERN ADMIN DASHBOARD"
          des="This project is built using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. The application even consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
          src={projectOne}
          githubLink="https://github.com/jyotiv2023/admindash"
          liveLink="https://advance-dash.netlify.app/"
        />

        <ProjectsCard
          title="ECOMMERCE DEMO WEBSITE"
          des="This project is created using basic/advance features of React + Redux, as well as making use of the dummy api for products displayed on home page. The project has full payment gateway feature using Stripe."
          src={projectThree}
          githubLink="https://github.com/jyotiv2023/ecomm"
          liveLink="https://demo-ecomm-web.netlify.app/"
        />
        <ProjectsCard
          title="Game App"
          des="Inspired by our famous childhood scrabbling tictactoe game, I build this small gaming app using pure Javascript, Html and Css"
          src={projectTwo}
          githubLink="https://github.com/jyotiv2023/ticTacToe"
          liveLink="https://gamingticktacktoe.netlify.app/"
        />
        <ProjectsCard
          title="Loan Calculator App"
          des=" The simple loan calculator is a JavaScript-based tool that allows users to calculate monthly payments and total interest for loans, aiding in financial planning and decision-making."
          src={projectFour}
          githubLink="https://github.com/jyotiv2023/loanCalculator"
          liveLink="https://simple-loancalculator.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
