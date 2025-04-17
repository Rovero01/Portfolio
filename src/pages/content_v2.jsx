import { useState, useRef, useEffect } from "react";
import sjw from "../Assets/jpg/sjw.png";

import "./content.css";
import eCommercePage from "../components/eCommerce";
import healthCare from "../components/healthCare";
import teleComunication from "../components/teleComunication";
import { MdComputer, MdLocationPin } from "react-icons/md";
import { FaReact, FaDatabase, FaShieldAlt, FaInstagram } from "react-icons/fa";
import { GiCurlyWing } from "react-icons/gi";
import myFavorite from "../Assets/svg/MyFavorite.svg";
import listTools from "../Assets/svg/ListTools.svg";
import MyStory from "../Assets/svg/MyStory.svg";
import GoodPeople from "../Assets/svg/GoodPeople.svg";
import Laptop from "../Assets/svg/Laptop.svg";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { APPRECIATION_ECCS_LINK, LINKEDIN_LINK,GITHUB_LINK,BEST_STUDENT_LINK, INSTAGRAM_LINK } from "../data/link.js";

export default function ContentV2({ open, target }) {
  let [feature, setFeature] = useState({
    morewords: false,
    popUps: false,
    project: 0,
    border: true,
  });

  const about = useRef(null);
  const exp = useRef(null);
  const work = useRef(null);

  useEffect(() => {
    if (target === "about")
      about.current?.scrollIntoView({ behavior: "smooth" });
    if (target === "exp") exp.current?.scrollIntoView({ behavior: "smooth" });
    if (target === "work") work.current?.scrollIntoView({ behavior: "smooth" });
  }, [target]);

  let [title, setTitle] = useState(0);

  const projects = [eCommercePage(), healthCare(), teleComunication()];

  const [listButtonProject] = useState([
    "E-commerce",
    "Health Care",
    "Telecommunication",
  ]);

  const skills = [
    [
      {
        symbol: <SiNextdotjs size={40} />,
        name: "Next.JS",
        detail: "App dir, Routing, Layouts, LoadingUI, and API routes",
      },
      {
        symbol: <FaReact size={40} />,
        name: "React.JS",
        detail: "Server and Client Component. Use hook",
      },
      {
        symbol: <FaDatabase size={40} />,
        name: "Database & ORM",
        detail:
          "ORM using Sequelize, Prisma. Postgresql and Mysql as databases",
      },
    ],
    [
      {
        symbol: <SiTailwindcss size={40} />,
        name: "Components",
        detail:
          "UI components built using Radix UI and styled with tailwind CSS",
      },
      {
        symbol: <FaShieldAlt size={40} />,
        name: "Authentication",
        detail: "Authentication using NextAuth.js or JWT and middlewares.",
      },
      {
        symbol: <RiFirebaseFill size={40} />,
        name: "Integration  & Event Systems",
        detail: "Using Rabbit MQ, Firebase, Socket.io ",
      },
    ],
  ];

  function tipBorder(input) {
    const sameClass =
      "absolute w-4 h-4 border-t border-r border-l border-gray-700 bg-[#201E38] opacity-60 rounded-sm shadow-md shadow-gray-8 00";
    return input ? (
      <>
        <div
          class={`${sameClass} -top-2 left-0 transform -translate-x-1/2`}
        ></div>
        <div
          class={`${sameClass} -bottom-2 right-0 transform translate-x-1/2`}
        ></div>
        <div
          class={`${sameClass} -top-2 right-0 transform translate-x-1/2`}
        ></div>
        <div
          class={`${sameClass} -bottom-2 left-0 transform -translate-x-1/2`}
        ></div>
      </>
    ) : (
      <>
        <div
          class={`${sameClass} -bottom-2 right-0 transform translate-x-1/2`}
        ></div>
        <div
          class={`${sameClass} -bottom-2 left-0 transform -translate-x-1/2`}
        ></div>
      </>
    );
  }

  function generateSameDiv(input, withBorder) {
    return (
      <div className="flex">
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-800 border-opacity-30"></div>
        <div class="relative border-2 border-dashed border-gray-800 border-opacity-30 w-full">
          {tipBorder(withBorder)}
          {input}
        </div>
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-800 border-opacity-30"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col py-40">
      {generateSameDiv(
        <div className="flex flex-col gap-10 items-center">
          <div className="bg-[#232230] border border-gray-800 rounded-xl flex w-[60%] mt-10 px-8 py-6">
            <div className="flex gap-10">
              <img
                width="70px"
                height="70px"
                alt="siganteng"
                className="rounded-full bg-white px-2"
                src={sjw}
              ></img>
              <div className="flex flex-col gap-4">
                <span className="text-xl">Rochan Savero Mochammad</span>
                <div className="flex text-gray-400 gap-3">
                  <div className="flex items-center gap-1 ">
                    <MdComputer color="white" size={20} />
                    <span>Software Engineer</span>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <MdLocationPin color="white" size={20} />
                    <span>Everywhere</span>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <div className="p-1.5 bg-green-500 rounded-full"></div>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 1 */}

          <div className="w-1/2 text-xl text-center text-gray-300">
            A Fullstack Developer with years of experience in various companies.
            Despite not coming from an IT background, I have a strong passion
            for coding and a natural curiosity. Currently, I am focused on
            mastering web development and sharing my knowledge.
          </div>

          {/* section 2 */}

          <div className="flex gap-5 mt-5 pb-10">
            <div
              onClick={() => window.open(LINKEDIN_LINK, "_blank")}
              className="cursor-pointer hover:bg-gray-200 font-medium  py-3 px-5 border bg-white text-gray-500 rounded-xl text-sm border-gray-600"
            >
              See on Linkedin
            </div>
            <div
              onClick={() => window.open(GITHUB_LINK, "_blank")}
              className="cursor-pointer hover:bg-gray-800 font-medium  py-3 px-5 border bg-[#121120] text-white rounded-xl text-sm border-gray-600"
            >
              Github
            </div>
          </div>

          {/* section 3 */}
        </div>,
        true
      )}

      {generateSameDiv(
        <div className="flex">
          <div
            onClick={() => window.open(BEST_STUDENT_LINK, "_blank")}
            className="cursor-pointer hover:text-green-300 flex my-10 justify-center w-1/2"
          >
            <div className="flex items-center justify-center">
              <div className="mb-10">
                <GiCurlyWing size={70} />
              </div>
              <div className="flex flex-col items-center gap-3 w-1/2">
                <span className="text-center font-semibold">
                  Purwadhika School
                </span>
                <span className="text-center text-balance text-sm">
                  Fullstack Website Developer Program
                </span>
                <span className="text-xs p-2 border border-gray-600 w-fit text-gray-400 rounded-full">
                  Best Student
                </span>
              </div>
              <div className="flip mb-10">
                <GiCurlyWing size={70} />
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(APPRECIATION_ECCS_LINK, "_blank")
            }
            className="cursor-pointer hover:text-green-300 flex my-10 justify-center w-1/2"
          >
            <div className="flex items-center justify-center">
              <div className="mb-10">
                <GiCurlyWing size={70} />
              </div>
              <div className="flex flex-col items-center gap-3 w-1/2">
                <span className="text-center font-semibold"> Huawei XL MS</span>
                <span className="text-center text-balance text-sm">
                  Enterprise Corporate Complaint Handling System (ECCS).
                </span>
                <span className="text-xs p-2 border border-gray-600 w-fit text-gray-400 rounded-full">
                  Appreciation Team Tools
                </span>
              </div>
              <div ref={about} className="flip mb-10">
                <GiCurlyWing size={70} />
              </div>
            </div>
          </div>
        </div>
      )}

      {generateSameDiv(
        <div className="flex flex-col my-10">
          <div className="flex gap-8 pb-5">
            <div
              className=" border border-gray-700 w-[35%] bg-gray-800 h-[300px] ml-5 relative rounded-xl overflow-hidden cursor-pointer
                      hover:border-white hover:border-2
                    "
            >
              <div className="absolute pt-5 pl-8 text-2xl w-full z-10 ">
                <div className="text-gray-300 font-medium ">MY FAVORITE</div>
                <div className="font-semibold flex flex-col">
                  <span className=" shadow-[20px_35px_30px] shadow-gray-800 z-10">
                    TOOLS AND
                  </span>
                  <span className="z-20">TECHNOLOGY</span>
                </div>
              </div>
              <img
                src={myFavorite}
                alt=""
                className="absolute translate-y-24 w-full h-full"
              />
            </div>
            <div
              className="border border-gray-700 w-[65%] mr-5 h-[300px] rounded-xl flex flex-col
                    cursor-pointer hover:border-white hover:border-2 overflow-hidden"
            >
              <div className="px-8 py-6 h-1/2 text-2xl flex flex-col gap-3">
                <div className="text-gray-300 font-medium">LINKS</div>
                <div className="font-semibold text-4xl">Social Media</div>
              </div>
              <img src={listTools} alt="" className=" w-full h-[70%] mb-10" />
            </div>
          </div>

          {/* downside */}
          <div className="flex">
            <div
              className=" border border-gray-700 w-[60%] bg-gray-800 h-[300px] ml-5 relative rounded-xl overflow-hidden cursor-pointer
                      hover:border-white hover:border-2
                    "
            >
              <div className="absolute p-10 w-full z-10 bg-black bg-opacity-30 h-full ">
                <div className="flex flex-col justify-end w-full h-full text-5xl gap-3">
                  <div className="text-gray-300 font-medium text-3xl">
                    About me
                  </div>
                  <div className="font-semibold flex flex-col"> My Story</div>
                </div>
              </div>
              <img src={MyStory} alt="" className="absolute w-full h-full" />
            </div>
            <div
              className=" border border-gray-700 w-[40%] bg-gray-800 h-[300px] ml-5 relative rounded-xl overflow-hidden cursor-pointer
                      hover:border-white hover:border-2
                    "
            >
              <div className="absolute px-10 py-5 w-full z-10 bg-black bg-opacity-30 h-full">
                <div className="flex flex-col justify-end w-full h-full text-3xl gap-3">
                  <div className="text-gray-300 font-medium text-xl">APP</div>
                  <div className="font-semibold flex flex-col">
                    LAST PRODUCT IN PORTOFOLIO
                  </div>
                </div>
              </div>
              <img
                src={GoodPeople}
                alt=""
                className="absolute -translate-y-6 w-full h-[400px]"
              />
            </div>
          </div>
          <div ref={work}></div>
        </div>,
        false
      )}
      {generateSameDiv(
        <div className="w-full min-h-[600px] p-10 flex flex-col gap-10 ">
          <div className={`text-center w-full text-3xl`}>
            <div>Projects and Products</div>
            <span className="opacity-50 text-sm">Latest Projects</span>
          </div>
          <div className={`flex justify-start w-full h-fit gap-5`}>
            {listButtonProject.map((data, index) => (
              <button
                onClick={() => {
                  setFeature({
                    ...feature,
                    border: !feature.border,
                  });
                  setTitle(index);
                  setTimeout(
                    () =>
                      setFeature({
                        ...feature,
                        border: true,
                        project: index,
                      }),
                    1100
                  );
                }}
                className={`${
                  index === title
                    ? "opacity-100 border-b border-orange-300"
                    : "opacity-50 hover:bg-orange-300 hover:opacity-100 hover:text-black"
                } p-3 rounded-xl`}
              >
                {data}
              </button>
            ))}
          </div>

          <div>
            {open.body3 ? (
              <div
                className={`flex flex-col ${
                  feature.border ? "max-h-[1000px]" : "max-h-0 "
                } px-10 overflow-hidden border border-orange-300 rounded-lg duration-1000 ease-in-out`}
              >
                <div>{projects[feature.project]}</div>
              </div>
            ) : null}
          </div>
          <div ref={exp}></div>
        </div>,
        false
      )}
      {generateSameDiv(
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5 mt-10 px-8 py-6">
            <span className="text-center text-5xl font-semibold text-[">
              FRAMEWORK & TECH
            </span>
            <div className="flex flex-col items-center text-gray-500 text-lg">
              <span className="w-3/4">
                These are the tools and frameworks with which I feel more
                comfortable without limiting myself to them because i have
                worked with React, MySql, Express, Javascript and many more...
              </span>
              <span>My main stacks are : </span>
            </div>
          </div>

          {/* section 1 */}

          <div className="flex flex-col gap-5 mt-5 pb-10">
            {skills.map((data) => {
              return (
                <div className="flex justify-center gap-5 w-full">
                  {data.map((inside) => {
                    return (
                      <div className="w-[30%] font-medium flex flex-col border border-gray-800 rounded-lg p-5">
                        <div>{inside.symbol}</div>
                        <div className="mt-4">{inside.name}</div>
                        <div className="text-gray-500 text-sm">
                          {inside.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {/* section 2 */}

          <img src={Laptop} alt="" className="w-full h-[400px]" />
          <div className="flex flex-col items-center text-gray-500 gap-4">
            <span className="text-xl text-white">See me on</span>
            <div
              onClick={() => window.open(INSTAGRAM_LINK, "_blank")}
              className="cursor-pointer hover:text-white"
            >
              {" "}
              <FaInstagram size={30} />
            </div>
          </div>
        </div>,
        true
      )}
    </div>
  );
}
