import { useNavigate } from "react-router-dom";
import pms from "../assets/jpg/pms.png";

export default function ECommercePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 p-10">
      <span className="cursor-pointer hover:border-b hover:border-white w-fit" onClick={() => navigate("/pms")} >
        Hospital Management Information System and Performance Management System
      </span>
      <div className="flex gap-8">
        <img width={"300px"} src={pms} alt="" />
        <div className="text-balance">
        We develop HMIS and PMS model websites, seamlessly integrating with external vendors,
        including clients' internal IT teams and institutions like the Ministry of Health. Our solution help hospitals streamline operations,
        enhance interoperability, and efficiently manage employee evaluations.
        </div>
      </div>
    </div>
  );
}
