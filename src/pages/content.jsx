import { act, useState } from "react";
import {
  Express,
  Midtrans,
  MikroOrm,
  Nest,
  NextWhite,
  NextBlack,
  React,
  Prisma,
  Sequelize,
  Socket,
  TypeOrm,
  Vue,
  Rabbit,
  Mysql,
  Mongo,
  Postgre,
  Ows,
  Firebase,
} from "../Assets/png/index";

import sjw from "../Assets/jpg/sjw.png";

import "./content.css";
import eCommercePage from "../components/eCommerce";
import healthCare from "../components/healthCare";
import teleComunication from "../components/teleComunication";
import { MdDisplaySettings,MdComputer,MdLocationPin} from "react-icons/md";
import { GiCurlyWing } from "react-icons/gi";


export default function Content({ open }) {
  let [feature, setFeature] = useState({
    morewords: false,
    popUps: false,
    project: 0,
    border: true,
  });

  let [title, setTitle] = useState(0);

  const projects = [eCommercePage(), healthCare(), teleComunication()];

  const [light] = useState(false);

  const listPackage = {
    FrontEnd: {
      data: [
        { src: React, name: "React JS", bg: "", width: "25vw", height: "25vh" },
        {
          src: light ? NextBlack : NextWhite,
          name: "Next JS",
          bg: "bg-white",
          width: "40vw",
          height: "40vh",
        },
        // { src: Vue, name: "Vue JS", bg: "", width: "55vw", height: "55vh" },
        {
          src: Socket,
          name: "Socket.io",
          bg: "",
          width: "30vw",
          height: "30vh",
        },
      ],
      add: <MdDisplaySettings />,
    },
    BackEnd: {
      data: [
        {
          src: Express,
          name: "Express JS",
          bg: "bg-white",
          width: "40vw",
          height: "40vh",
        },
        { src: Nest, name: "Nest JS", bg: "", width: "30vw", height: "30vh" },
        {
          src: Sequelize,
          name: "Sequelize",
          bg: "",
          width: "50vw",
          height: "50vh",
        },
        { src: Prisma, name: "Prisma", bg: "", width: "25vw", height: "25vh" },
        {
          src: MikroOrm,
          name: "Mikro Orm",
          bg: "bg-white",
          width: "80vw",
          height: "80vh",
        },
        {
          src: TypeOrm,
          name: "Type Orm",
          bg: "",
          width: "30vw",
          height: "30vh",
        },
        {
          src: Rabbit,
          name: "Rabbit MQ",
          bg: "",
          width: "20vw",
          height: "20vh",
        },
        { src: Mysql, name: "My SQL", bg: "", width: "30vw", height: "30vh" },
        { src: Mongo, name: "Mongo DB", bg: "", width: "30vw", height: "30vh" },
        {
          src: Postgre,
          name: "Postgre SQL",
          bg: "",
          width: "30vw",
          height: "30vh",
        },
      ],
    },
    "3rd-Party_Integration": {
      data: [
        {
          src: Midtrans,
          name: "Midtrans",
          bg: "",
          width: "40vw",
          height: "40vh",
        },
        {
          src: Firebase,
          name: "Firebase",
          bg: "",
          width: "30vw",
          height: "40vh",
        },
      ],
    },
    Web_Services: {
      data: [
        { src: Ows, name: "OWS", bg: "", width: "120vw", height: "120vh" },
      ],
    },
  };

  const [listButtonProject] = useState([
    "E-commerce",
    "Health Care",
    "Telecommunication",
  ]);

  function tipBorder() {
    return <>
      <div class="absolute -top-2 left-0 transform -translate-x-1/2 w-4 h-4 border border-gray-600 bg-[#201E38] opacity-60 rounded-sm"></div>
      <div class="absolute -bottom-2 right-0 transform translate-x-1/2 w-4 h-4 border border-gray-600 bg-[#201E38] opacity-60 rounded-sm"></div>
      <div class="absolute -top-2 right-0 transform translate-x-1/2 w-4 h-4 border border-gray-600 bg-[#201E38] opacity-60 rounded-sm"></div>
      <div class="absolute -bottom-2 left-0 transform -translate-x-1/2 w-4 h-4 border border-gray-600 bg-[#201E38] opacity-60 rounded-sm"></div>
    </>
  }

  return (
    <div className="w-full h-full flex flex-col py-40">

      <div className="flex">
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
        <div class="relative border-2 border-dashed border-gray-500 border-opacity-30 w-full">
          {tipBorder()}
          <div className="flex flex-col gap-10 items-center">
                <div className="bg-[#232230] border border-gray-800 rounded-xl flex w-[60%] mt-10 px-8 py-6">
                    <div className="flex gap-10">
                        <img width="70px" height="70px" alt="siganteng" className="rounded-full bg-white px-2" src={sjw}></img>
                        <div className="flex flex-col gap-4">
                            <span className="text-xl">Rochan Savero Mochammad</span>
                            <div className="flex text-gray-400 gap-3">
                              <div className="flex items-center gap-1 "><MdComputer color="white" size={20} /><span>Software Engineer</span></div>
                              <div className="flex items-center gap-1 "><MdLocationPin color="white" size={20} /><span>Everywhere</span></div>
                              <div className="flex items-center gap-1 "><div className="p-1.5 bg-green-500 rounded-full"></div><span>Available</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 1 */}

                <div className="w-1/2 text-xl text-center text-gray-300">
                A Fullstack Developer with years of experience in various companies. 
                Despite not coming from an IT background, I have a strong passion for
                 coding and a natural curiosity. Currently,
                 I am focused on mastering web development and sharing my knowledge.
                </div>

                {/* section 2 */}

                <div className="flex gap-5 mt-5 pb-10">
                  <span className="py-3 px-5 border bg-white text-gray-500 rounded-xl text-sm border-gray-600">See on Linkedin</span>
                  <span className="py-3 px-5 border bg-[#121120] text-white rounded-xl text-sm border-gray-600"> Github</span>
                </div>

                {/* section 3 */}

            </div>
        </div>
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
      </div>

      <div className="flex">
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
        <div class="relative border-2 border-dashed border-gray-500 border-opacity-30 w-full flex justify-center">
          
          <div className="flex my-10 justify-center w-1/2">
              <div className="flex items-center justify-center">
              <div className="mb-10"><GiCurlyWing size={70} /></div>
                  <div className="flex flex-col items-center gap-3 w-1/2">
                    <span className="text-center font-semibold">Purwadhika School</span>
                    <span className="text-center text-balance text-sm">Fullstack Website Developer Program</span>
                    <span className="text-xs p-2 border border-gray-600 w-fit text-gray-400 rounded-full">Best Student</span>
                  </div>
              <div className="flip mb-10"><GiCurlyWing size={70} /></div>
              </div>
          </div>

          <div className="flex my-10 justify-center w-1/2">
              <div className="flex items-center justify-center">
              <div className="mb-10"><GiCurlyWing size={70} /></div>
                  <div className="flex flex-col items-center gap-3 w-1/2">
                    <span className="text-center font-semibold"> Huawei XL MS</span>
                    <span className="text-center text-balance text-sm">Enterprise Corporate Complaint Handling System (ECCS).</span>
                    <span className="text-xs p-2 border border-gray-600 w-fit text-gray-400 rounded-full">Appreciation Team Tools</span>
                    </div>
              <div className="flip mb-10"><GiCurlyWing size={70} /></div>
              </div>
          </div>

        </div>
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
      </div>

       <div className="flex">
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
        <div class="relative border-2 border-dashed border-gray-500 border-opacity-30 w-full">
          {tipBorder()}
              <div className="flex flex-col items-center py-5">
              <div className={`text-center ${ open.body2 ? "opacity-100" : "opacity-0" } ease-in-out duration-500`}>
                <span className="med">Skills</span>
                </div>

                <div className="flex">
                    {Object.keys(listPackage).map((data) => {
                       return <div className={`h-fit flex flex-col items-center w-[300px] py-16 ${ open.body2 ? " opacity-100 " : "opacity-0 "
                       } duration-500 ease-in-out `} >
                     <div className="mb-5 p-3 w-full">
                        <div className="flex bg-black overflow-hidden flex-col gap-3 p-3 border border-orange-300 rounded-md min-h-[200px]">
                           <div className="w-full">
                             <span>{data.replace(/_/g, " ")}</span>
                              </div>
                           <div className={`flex gap-1 justify-center ${  listPackage[data].data.length > 3 ? "animate-slide" : "" }`}>
                              {(listPackage[data].data.length > 3
                               ? [
                                   ...listPackage[data].data,
                                   ...listPackage[data].data,
                                   ...listPackage[data].data,
                                 ]
                               : listPackage[data].data
                             ).map((data) => {
                               return <div className="w-fit flex flex-col items-center justify-center">
                                  <div className="h-16 flex items-center">
                                     <img
                                       className={`${data.bg}`}
                                       alt={data.name}
                                       width={data.width}
                                       height={data.height}
                                       src={data.src}
                                     />
                                   </div>
                                   <div className="text-sm">{data.name}</div>
                                 </div>
                               
                             })}
                           </div>
                         </div>
                       </div> 
                     </div>
                    })}
                </div>

            


            </div>
        </div>
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
      </div>
     

      {/* template */}
      {/*<div className="flex">
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
        <div class="relative border-2 border-dashed border-gray-500 border-opacity-30 w-full">
          {tipBorder()}

        </div>
        <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
      </div>
      */}

        <div className="flex">
              <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
              <div class="relative border-2 border-dashed border-gray-500 border-opacity-30 w-full">
                {tipBorder()}

                <section className="w-full h-96 flex flex-col gap-10 ">
        <div
          className={`${
            open.body3 ? "opacity-100" : "opacity-0"
          } duration-500 ease-in-out text-center w-full text-4xl`}
        >
          <div>Portfolio</div>
          <span className="opacity-50 text-sm">Latest Projects</span>
        </div>
        <div
          className={`${
            open.body3 ? "opacity-100" : "opacity-0"
          } duration-500 ease-in-out flex justify-start w-full h-fit gap-5`}
        >
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
                    setFeature({ ...feature, border: true, project: index }),
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
      </section>

              </div>
              <div className="w-[18%] border-t-2 border-b-2 border-dashed border-gray-500 border-opacity-30"></div>
        </div>

     
    </div>
  );
}
