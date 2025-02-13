import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import { VscAzureDevops } from "react-icons/vsc";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPuppet,
  SiCheckmk,
  SiMicrosoftazure
} from "react-icons/si";
import { FaJava, FaAws } from 'react-icons/fa'; 
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
              <ProgressBar logo={<SiPuppet />} name={"Puppet"} value={78} />
              <ProgressBar logo={<SiCheckmk />} name={"CheckMk"} value={82} />
              <ProgressBar logo={<FaAws />} name={"AWS"} value={85} />
              <ProgressBar logo={<SiMicrosoftazure />} name={"Azure"} value={85} />
                <ProgressBar logo={<FaJava />} name={"JAVA"} value={80} />
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={85} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={85} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={89}
                />
                <ProgressBar logo={<IoLogoNodejs />} name={"Node Js"} value={80} />
                <ProgressBar logo={<SiExpress />} name={"Express"} value={80} />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={85} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={80}
                />
                <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={85} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiPuppet />}
                black={"white"}
                white={"black"}
                skill={"Puppet"}
              />
              <SkillBox
                logo={<SiCheckmk />}
                black={"white"}
                white={"black"}
                skill={"Checkmk"}
              />
              <SkillBox
                logo={<VscAzureDevops />}
                black={"white"}
                white={"black"}
                skill={"CI/CD"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              />
              <SkillBox
                logo={<FaAws />}
                black={"black"}
                white={"white"}
                skill={"AWS"}
              />
              <SkillBox
                className=""
                logo={
                  <SiMicrosoftazure/>
                }
                black={"black"}
                white={"white"}
                skill={"Azure"}
              />
            </div>
          </div>
        </div>

        {/* icons */}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
