import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
// import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ToastContainer} from "react-toastify";
import GitLabIcon from '@mui/icons-material/Code';

import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      <div className="flex flex-row  ">
        <div className="flex-auto w-80  flex flex-col justify-center text-center items-center  gap-1" data-testid="ContactDiv">
          <div data-aos={"fade-left"}>
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              style={{ width: "350px" }}
              data-testid="ContactAnimation"
            />
          </div>
          <div data-aos={"slide-up"} className="text-center">
            <div className="text-center mt-2 text-3xl font-bold" data-testid="FollowMeTitle">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
