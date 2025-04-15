import ows from "../assets/jpg/ows.png";

export default function eCommercePage() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div>
        Business Manage Service
      </div>
      <div className="flex gap-8">
        <img width={"300px"} src={ows} alt="" />
        <div>
        We develop and manage services using Operation 
        Web Services (OWS) for telecommunication companies, 
        focusing on displaying and updating data reports related to materials and field restoration progress connected to customer operations.
        </div>
      </div>
    </div>
  );
}
