import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("07/13/1998");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col text-center gap-5 text-black text-lg  font-normal "
    >
      <div className="head text-5xl mt-12 font-bold text-white" data-aos={"slide-down"} data-testid="AboutMeTitle">
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium text-white" data-testid="AboutMeName" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Adam Świderski,</span> a QA
            Automation Engineer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify text-white" data-testid="AboutMeDescription"
            data-aos={"fade-left"}
            style={{ fontSize: '19px' }}
          >
            I am a {getDate()}{" "}
            years old QA Automation Tester with three years of experience manual software testing and 1+ year in automation testing.
            <br></br> 
            Driven by a passion for self-development and a commitment to delivering top-notch software products.
            <br></br> 
            <br></br> 
            <br></br>
            <br></br>
            <span className="text-yellow-600 font-bold">I work with: </span> Playwright Typescript, Github Actions, Postman.
            <br></br>
            <span className="text-yellow-600 font-bold">I'm learning: </span> Jenkins, ISTQB, Docker, Ruby.
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Codse"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy" data-testid="AboutMeAnimation"> 
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800" 
          data-testid="AboutMeCV">
            <a
              href={require("../../assets/files/MyResume.pdf")}
              download={"Adam Swiderski Resume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
