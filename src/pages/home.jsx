import { useEffect, useState } from "react";
import Topbar from "./topbar";
import ContentV2 from "./content_v2";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [target, setTarget] = useState('');

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollY(newScrollYPosition);
  };

  useEffect(() => {
    setTimeout(
      () => setOpen({ ...open, opener: false, topbar: true, body1: true }),
      500
    );

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState({
    opener: true,
    topbar: false,
    body1: false,
    body2: false,
    body3: false,
  });

  if (scrollY > 120 && open.body2 === false && open.opener == false) {
    setOpen({ ...open, body2: true });
  }

  if (scrollY > 900 && open.body3 === false && open.opener == false) {
    setOpen({ ...open, body3: true });
  }
  // bg-[#0d011f]
  return (
    <div className="text-white font-sans h-full font-poppins relative bg-[#121120] ">
        {/* <div id="main" className="z-0"></div> */}
            {/* <Opener open={open} /> */}
            {/* <div className="sticky top-0 z-40 "><Topbar open={open} /></div> */}
           <div className="top-0 sticky z-20"> <Topbar trigger={(input)=> setTarget(input)} /></div>
            <div className="z-10 pb-40"> <ContentV2 target={target} open={open} /> </div>
    
    </div>
  );
}
