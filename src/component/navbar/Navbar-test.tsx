import { useEffect, useState } from 'react'
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from 'react-router-dom';
import "../navbar/Navbar.css"
import { BiMenu,BiX } from 'react-icons/bi';
const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState<null | string>(null);
    useEffect(() => {
      // Xử lý thay đổi URL khi trạng thái selectedItem thay đổi
      // Điều này sẽ gây ra sự kiện chuyển trang mới, kích thích lại rendering
      window.history.pushState(null, '', `/${selectedItem}`);
  }, [selectedItem]);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    }
    ////response
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);
    const toggleNavMenuMobile = () => {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};
    const closeNavMenuMobile = () => {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};
  return (
    <header className="w-full bg-white overflow-x-hidden  fixed top-0 w-full z-30 	shadow-md"> 
    {/* fixed top-0 left-0  -- keep navbar when user cuộn page*/}
      <div className="hidden md:block py-1 bg-[#142D53] text-[#FFFFFF] text-[18px] text-center ">
            <div className=" text-sky-900 text-white text-[16px] font-[400] inline flex justify-between align-center space-x-[30px] px-20">
                <div>
                    <div>
                    <EmailIcon fontSize="small" />
                    Support@2vntravel.com
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <CallIcon fontSize="small" />
                        <a>24/7 US:</a> +1 833-859-8686
                    </div>
                    <div className='ml-4'>
                        <CallIcon fontSize="small" />
                        <a >VN:</a> +84 28-7304-5657
                    </div>
                </div>
            </div>
      </div>

      <nav className={`w-full md:h-16  md:px-20 flex justify-between items-center `}>
        <div className='flex-shrink-0 flex-initial w-80'>
                <a href='#'>
                      <img className="mx-auto" src="/src/assets/images/logo.png" alt="" />
                </a>
        </div>
        <div>
            <BiMenu className='text-black cursor-pointer md:hidden flex-none  w-9 h-9'  onclick={toggleNavMenuMobile}></BiMenu>
        </div>
        <div className=' w-3/5 flex  justify-between text-base font-semibold items-center hidden md:block'>
            
            <div className='flex justify-between'> 
                    <div  className={selectedItem === "home" ? "selected": "" } id='home'> 
                        <Link onClick={() => handleItemClick("home")} to="#" >Home</Link>
                    </div>
                    <div  className={selectedItem === "visa" ? "selected": ""} id='visa'> 
                        <Link onClick={() => handleItemClick("visa")} to="#">Visa</Link>
                    </div>
                    <div  className={selectedItem === "legal services" ? "selected": ""} id='legalservices'>
                        <a onClick={() => handleItemClick("legal services")} href="#" >Legal Services</a>
                    </div>
                    <div  className={selectedItem === "fast track" ? "selected": ""} id='fasttrack'>
                        <Link onClick={() => handleItemClick("fast track")} to="/fasttrack" >Fast Track</Link>
                    </div>
                    <div  className={selectedItem === "cruise" ? "selected": ""} id='cruise'>
                        <a onClick={() => handleItemClick("cruise")} href="#" >Cruise</a>
                    </div>
                    <div  className={selectedItem === "travel insurance" ? "selected": ""} id='travelinsurance'>
                        <a onClick={() => handleItemClick("travel insurance")} href="#"  >Travel Insurance</a>
                    </div>
                    <div  className={selectedItem === "contact us" ? "selected": ""} id='contactus'>
                        <a onClick={() => handleItemClick("contact us")} href="/contact"  >Contact Us</a>
                    </div>
            </div>
           
        </div>

      </nav>
      <div className={`opacity-90 md:hidden fixed shadow-lg bg-slate-50 inset-y-0 right-0 z-50 w-1/2 ${isNavMenuMobileOpen ? 'flex': 'hidden'}` }>
                    <div>
                        <div  className={selectedItem === "home" ? "selected": "" } id='home'> 
                            <Link onClick={() => handleItemClick("home")} to="#" >Home</Link>
                        </div>
                        <div  className={selectedItem === "visa" ? "selected": ""} id='visa'> 
                            <Link onClick={() => handleItemClick("visa")} to="#">Visa</Link>
                        </div>
                        <div  className={selectedItem === "legal services" ? "selected": ""} id='legalservices'>
                            <a onClick={() => handleItemClick("legal services")} href="#" >Legal Services</a>
                        </div>
                        <div  className={selectedItem === "fast track" ? "selected": ""} id='fasttrack'>
                            <Link onClick={() => handleItemClick("fast track")} to="/fasttrack" >Fast Track</Link>
                        </div>
                        <div  className={selectedItem === "cruise" ? "selected": ""} id='cruise'>
                            <a onClick={() => handleItemClick("cruise")} href="#" >Cruise</a>
                        </div>
                        <div  className={selectedItem === "travel insurance" ? "selected": ""} id='travelinsurance'>
                            <a onClick={() => handleItemClick("travel insurance")} href="#"  >Travel Insurance</a>
                        </div>
                        <div  className={selectedItem === "contact us" ? "selected": ""} id='contactus'>
                            <a onClick={() => handleItemClick("contact us")} href="/contact"  >Contact Us</a>
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 cursor-pointer bg-blue-950 rounded-md" onClick={closeNavMenuMobile}>
                        <BiX className="text-white w-6 h-6" />
                    </div>
            
      </div>
    
    </header>
  )
}

export default Navbar