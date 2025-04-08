import logo from '../Assets/png/logo.png'

export default function Topbar({ open }) {
  const topbarWords = [
    { name: "Skills" },
    { name: "Projects" },
    { name: "Contact me" },
  ];

  return (
   <div className='pt-5 flex justify-center items-center text-gray-400'>
          <div className='flex justify-between bg-white w-[40%] py-1 px-3 rounded-full'>
              <div className='w-1/4 flex justify-start'>
                  <div className='px-1.5 py-3 border shadow-lg rounded-full'>
                    <span className='border-2 rounded-full px-3 py-1.5 border-red-500 text-red-500 font-semibold'>R</span>
                  </div>
              </div>
              <div className='w-1/2 flex justify-center items-center gap-10 font-medium'>
                <span className='cursor-pointer'>Services</span>
                <span className='cursor-pointer'>Experiences</span>
                <span className='cursor-pointer'>Works</span>
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                  <span className='px-6 py-2 font-semibold text-sm rounded-full bg-gray-200'>Linkedin</span>
              </div>
          </div>
   </div>
  );
}
