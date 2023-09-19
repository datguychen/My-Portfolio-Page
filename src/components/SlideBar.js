import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitLabIcon from '@mui/icons-material/Code';
import { useState } from "react";

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-none  bg-purple-900 h-screen min-w-[25%] fixed " data-testid="Sidebar">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <img
            src={require("../assets/images/MyImage.webp")}
            alt="Adam Swiderski"
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]" data-testid="SidebarPicture"
          />
          <h3 className="text-white name py-5" style={{ fontSize: '29px' }} data-testid="SidebarMyName">
            Adam Świderski
          </h3>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-600 " : ""
          } `} data-testid="HomeTab"
          
          data-aos-delay="200"
        >
          <a href="/#">Home</a>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-600 " : ""
          }`} data-testid="AboutMeTab"
          data-aos-delay="600"
        >
          <a href="#about"> About Me</a>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-600 " : ""
          }`} data-testid="ResumeTab"
          
          data-aos-delay="1000"
        >
          <a href="#resume">Resume</a>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-600 " : ""
          }`} data-testid="ProjectsTab"
          data-aos-delay="1400"
        >
          <a href="#projects">Projects</a>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-blue-600 " : ""
          }`} data-testid="ContactTab"
          
          data-aos-delay="1800"
        >
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos-delay="2300"
      >
        <div
          onClick={() =>
            window.open("https://github.com/datguychen", "_blank")
          }
          className="group relative"
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
          <span className="opacity-0 text-white rounded py-1 absolute top-7 left-1/2 transform -translate-x-1/2 transition-opacity group-hover:opacity-100 whitespace-nowrap">
            My GitHub Profile
          </span>
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/adam-swiderski-qa/",
              "_blank"
            )
          }
          className="group relative"
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
          <span className="opacity-0 text-white rounded py-1 absolute top-7 left-1/2 transform -translate-x-1/2 transition-opacity group-hover:opacity-100 whitespace-nowrap">
            My LinkedIn Profile
          </span>
        </div>
        <div
          onClick={() =>
            window.open(
              "https://gitlab.com/datguychen",
              "_blank"
            )
          }
          className="group relative"
          >
          <GitLabIcon className="cursor-pointer hover:scale-105" />
          <span className="opacity-0 text-white rounded py-1 absolute top-7 left-1/2 transform -translate-x-1/2 transition-opacity group-hover:opacity-100 whitespace-nowrap">
            My GitLab Profile
          </span>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <p
        className="test bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center" data-testid="HomeInfo" style={{ fontSize: '19px' }}
          >
          This page is for automation testing purposes. 
            <br></br> 
            View it in desktop view only.
        </p>
    </div>
  );
}
