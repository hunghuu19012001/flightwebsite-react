import  { useRef, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Datepicker, {DateValueType} from 'react-tailwindcss-datepicker';
import Footer from '../../component/Footer/Footer';
import "./Fasttrack.css"
import Newletter from '../../component/Newletter/Newletter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Select_Airport from './Select_Airport';



const Fasttrack = () => {
  const [value, setValue] = useState< DateValueType>({ 
    startDate: new Date(), 
    endDate: new Date(),
    }); 
    
    const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
    const minDate = new Date();

    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const handleButtonClick = (buttonName: string) => {
      setSelectedButton(buttonName);
    }
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
      if(count >0)
      setCount(count-1);
    }
    const handleIncrement = () => {
      setCount(count+1);
    }

    const priceOption: number = selectedButton ==='standard' ? 60 : selectedButton === 'vip' ? 180 : 0;
    const total = priceOption*count;
    ///cuộn trang
    const packageOptionsRef = useRef<HTMLDivElement>(null);
    const scrollToPackageOptions = () => {
      if(packageOptionsRef.current){
        packageOptionsRef.current.scrollIntoView({behavior: 'smooth'});
      }
    }
    //////dialog show popup book now
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };

    const handleCloseDialog = () => {
      setOpenDialog(false);
    };

  return (
    <div>
        <div className='flex flex-col'>
            <div><Navbar/></div>

            <div className='flex justify-center'>
                <img className=' ' src="\src\assets\images\banner-fasttrack.png" alt="" />
            </div>
        </div>
          {/* container */}
          <div   className='md:mx-32 pt-5'>
                  <div className='flex md:flex-row flex-col'>
                  {/* col-left */}
                      <div className='md:w-3/4 rounded-3xl md:mr-4 '>
                        <div className=' bg-[#abb8c31c]  p-3  rounded-lg'>
                                <div><h3 className='text-3xl font-semibold text-blue-950'>Highlights</h3></div>
                                <div>
                                  <ul className="list-disc ml-8 mt-3">
                                    <li>Immigration Service is here to make your dreams a reality.</li>
                                    <li>Our dedicated team of experts is committed to providing you with a seamless and expedited immigration process.</li>
                                    <li>Ensuring you can commence your new adventure promptly.</li>
                                    <li>This Fast Track Service is available at Tan Son Nhat Airport, Noi Bai International, Danang International and Cam Ranh International Airport.</li>
                                  </ul>
                                </div>
                        </div>
                            
                      </div>
                    {/* col-right */}
                      <div className='mx-auto' id='select'>
                            <div className='border-2 p-2 rounded-3xl py-5 pt-5 pb-0'>
                                  <div className='text-sm font-semibold'>Standard Fast-Track | VIP Fast-Track</div>
                                  <div className='mt-3 mb-2'><button  className='bg-[#EF3925] text-white font-semibold  flex justify-center mx-auto rounded-xl p-1 w-5/6' onClick={scrollToPackageOptions}>Select Options</button></div>
                            </div>
                      </div> 
                            
                  </div>

                
                <div ref={packageOptionsRef}   className='flex mt-10 mb-5 ml-3'>
                  <p className='my-auto text-2xl font-black text-[#EF3925] mr-2'>|</p>
                  <h3 className='text-3xl font-semibold text-blue-950'>Package options</h3>
                </div>
                <div className='flex md:flex-row flex-col  w-full  '>
                  {/* package options */}
                  {/* col-left */}
                  
                  <div  className=' md:w-3/4 bg-[#abb8c31c] p-5 md:mr-4 rounded-lg'>
                        <h5 className='text-xl font-semibold my-3'>Select options</h5>
                        <p className='text-sm my-2'>Please select an experience date</p>
                              <div className='w-60'  >
                                    <Datepicker
                                  primaryColor='red'
                                  value={value} 
                                  onChange={handleValueChange} 
                                  minDate={minDate}
                                  asSingle={true}
                                  />   
                              </div> 
                        <p className='mt-5 text-sm mt-3 mb-2'>Package type</p>
                        <div className='flex flex-row'>
                          <div className={`md:basis-3/12 text-base font-semibold border-2 mr-6 rounded-md p-1 ${selectedButton === 'standard' ? 'selected-button': ''}`}>
                              <button className='flex justify-center mx-auto' onClick={() => handleButtonClick('standard')}>Standard Fast-Track</button></div>
                          <div className={`md:basis-3/12 text-base font-semibold border-2 rounded-md p-1 ${selectedButton === 'vip' ? 'selected-button':''}`}>
                              <button className='flex justify-center mx-auto' onClick={()=> handleButtonClick('vip')}>VIP Fast-Track</button></div>
                        </div>
                        <p className='mt-5 mb-2 text-sm'>Quanlity</p>
                        <div className='flex flex-row justify-between bg-white p-3 rounded-xl font-semibold'>
                              <div className='my-auto'>Adault</div>
                              <div className='flex flex-row justify-between md:w-1/5'>
                                <div className='text-xl my-auto mr-5'>${priceOption}</div>
                                <div className=' '>
                                    <div className="flex flex-row justify-between items-center space-x-5">
                                          <div><button className="px-2 py-1 bg-zinc-300 text-white rounded w-8" onClick={handleDecrement}> - </button></div>
                                          <div className="text-lg ">{count}</div>
                                          <div><button className="px-2 py-1 bg-zinc-300 text-white rounded w-8" onClick={handleIncrement} > + </button></div>
                                    </div>
                                </div>
                                
                              </div>
                        </div>
                        <div className='flex flex-row justify-between mt-6'>
                          <div className='text-2xl font-semibold'>${total}</div>
                          <div><button  className='bg-[#EF3925] rounded-xl text-white font-semibold p-2 px-5' onClick={handleOpenDialog}>Book now</button></div>
                        </div>
                  </div>
                  {/* col-right */}
                   <div className='bg-[#abb8c31c] p-4 mx-auto rounded-lg hidden md:block'>
                      <div className='mr-0'>
                          <h5 className='text-xl font-semibold my-3'>Conditions</h5>
                          <div className='border-2 p-0.5 rounded-xl my-1'>Free cancellation(24-hours notice)</div>
                          <div className='border-2 p-0.5 rounded-xl my-1'>Instant confirmation</div>
                          <div className='border-2 p-0.5 rounded-xl'>Fixed date booking</div>
                          {/* <h6 className='text-base font-medium my-3'>About this package</h6> */}
                          <ul>
                            {/* <li>With this <span>Standard Fast Track</span> at Vietnam airport you will get your visa stamped at Vietnam airport quickly without staying in a long queue in front of the VOA/Landing visa counter there.</li> */}
                          </ul>
                      </div>
                  </div> 

                </div>



                <div  className='md:w-4/5 mt-10 p-3'>
                  <div className='flex my-5'>
                      <p className='my-auto text-2xl font-black text-[#EF3925] mr-2'>|</p>
                      <h3 className='text-3xl font-semibold text-blue-950'>What to expect</h3>
                  </div>
                  <ul className='list-disc ml-12'>
                    <li>Preparing the necessary documents for immigration can be overwhelming and time-consuming. Our team of professionals will assist you in <span>gathering and organizing all the required paperwork</span>, ensuring that everything is in order and ready for submission. We'll meticulously review your documents to minimize any chance of errors or delays, making the entire process smooth and efficient.</li>
                    <li>Navigating through the immigration application process can be complex, with various forms, deadlines, and requirements to fulfill. Our experts will <span>guide you through each step</span>, ensuring that your application is complete and error-free. We'll keep you updated on the progress of your application, minimizing any anxieties and uncertainties along the way.</li>
                    <li>Our commitment to your journey doesn't end once you arrive in your new country. <span>We offer comprehensive</span> post-arrival support to help you settle in smoothly. Whether it's finding accommodation, connecting with local services, or understanding the local culture, our team is here to assist you every step of the way.</li>
                  </ul>
                </div>

                <div  className='md:w-4/5 mt-10'>
                    <div className='flex my-5 ml-3'>
                        <p className='my-auto text-2xl font-black text-[#EF3925] mr-2'>|</p>
                        <h3 className='text-3xl font-semibold text-blue-950'>Important</h3>
                    </div>
                    <div className='md:ml-7 p-3'>
                        <h4 className='text-xl font-semibold my-3 text-blue-950'>Standard Fast Track</h4>
                        <p>This is a service currently chosen by many customers. Using this service, you will:</p>
                        <ul className='list-disc ml-12 ' >
                          <li>Get support to get visa stamps quickly at Vietnam airports without having to wait in long lines at the airport VISA stamping counter.</li>
                          <li>Be led through security quickly.</li>
                          <li>You will be directed to the baggage claim area and assisted in receiving your luggage.</li>
                        </ul>
                        <img src="\src\assets\images\full-fast-track-vietnam-visa.webp" alt="" />

                      <div>
                            <div  className='flex md:flex-col flex-row md:text-base my-3 text-sm justify-center '>
                                  <div className="md:grid md:grid-cols-3 gap-4 border-2 bg-blue-950 text-white font-bold p-3 ">
                                    <div className='mx-auto'>FAST TRACK SERVICE</div>
                                    <div className='mx-auto'>FEE(USD/PAX)</div>
                                    <div className='mx-auto'>PROCESS</div>
                                  </div>
                                  <div className="md:grid md:grid-cols-3 gap-4 font-semibold border-x-2 border-b-2 p-3">
                                    <div className='mx-auto'>Standard Fast Track</div>
                                    <div className='mx-auto'>$60</div>
                                    <div className='mx-auto'>15-20 minutes</div>
                                  </div>
                                  
                            </div>
                      </div>

                    </div>
                    <div className='md:ml-7 p-3'>
                        <h4 className='text-xl font-semibold my-5 text-blue-950'>VIP Fast Track</h4>
                        <p>If you have a busy schedule ahead of you, you should immediately use this type of fast-track service, because you will:</p>
                        <ul className='list-disc ml-12 ' >
                          <li>Get support to get visa stamps quickly at Vietnam airports without having to wait in long lines at the airport VISA stamping counter.</li>
                          <li>Be led through security quickly via priority lines.</li>
                          <li>You will be directed to the baggage claim area and assisted in receiving your luggage.</li>
                        </ul>
                        <div>
                            <div  className='flex md:flex-col flex-row md:text-base my-3 text-sm justify-center'>
                                  <div className="md:grid md:grid-cols-3 gap-4 border-2 bg-blue-950 text-white font-bold p-3 ">
                                    <div className='mx-auto'>OUR FAST TRACK SERVICE</div>
                                    <div className='mx-auto'>FEE(USD/PAX)</div>
                                    <div className='mx-auto'>PROCESS</div>
                                  </div>
                                  <div className="md:grid md:grid-cols-3 gap-4 font-semibold border-x-2 border-b-2 p-3">
                                    <div className='mx-auto'>VIP Fast Track</div>
                                    <div className='mx-auto'>$180</div>
                                    <div className='mx-auto'>15-20 minutes</div>
                                  </div>
                                  
                            </div>
                      </div>
                    </div>
                    <p className='md:text-sm text-xs p-3'>*There will be a staff who will be standing and holding the white board with the written full name of customer at the arriving gate or at any location where the customer requests.</p>
                </div>

                {/* <div className='flex flex-row justify-center' >
                  <div>---</div>
                  <div><h4>Fast Track Service</h4></div>
                  <div>---- </div>
                </div> */}
                <div  className='md:w-4/5 my-10 '>
                    <div className='flex ml-3 my-5'>
                        <p className='my-auto text-2xl font-black text-[#EF3925] mr-2'>|</p>
                        <h3 className='text-3xl font-semibold text-blue-950'>Location</h3>
                    </div>

                  <div className='grid md:grid-cols-2 gap-4 md:justify-between '>
                    <div className="p-3 text-xl font-semibold">
                          <div className='flex justify-center text-blue-950'>US Office</div>
                          {/* <div className='mx-auto'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.509345659278!2d-117.96641952449596!3d33.77334277326327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd29609a47c389%3A0x36c64e64edf68126!2s2vntravel%20Usa%20Office!5e0!3m2!1sen!2s!4v1702917983752!5m2!1sen!2s" className='w-full h-72 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> */}

                    </div>
                    <div className="p-3 text-xl font-semibold">
                          <div className='flex justify-center mx-auto text-blue-950 '>VN Office</div>
                          {/* <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9435363442954!2d106.66597497480552!3d10.815633089335511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ef8d86ac5%3A0x2599cd75154414ad!2s2vntravel%20Vietnam%20Office!5e0!3m2!1sen!2s!4v1702918000412!5m2!1sen!2s" className='w-full h-72 border-0'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> */}
                    </div>
                  </div>
                </div>

                
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Your Booking Details</DialogTitle>
                    <DialogContent>
                      {/* Hiển thị thông tin đặt phòng hoặc nội dung khác tùy thuộc vào yêu cầu của bạn */}
                      <div className='flex flex-row'>
                          {/* <div className='my-auto'>
                            <img src="\src\assets\images\bgfasttrack.jpg" alt="" />
                          </div> */}
                          <div>
                                <div>
                                  <p>Selected Package: {selectedButton}</p>
                                  <p>Quantity: {count}</p>
                                  <p>Total Price: ${total}</p>
                                </div>
      
                                        
                                  <div className='flex flex-row justify-between gap-4 ' >
                                  <TextField
                                    margin="dense"
                                    id="firstName"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                  />
                                  <TextField
                                        autoFocus
                                        margin="dense"
                                        id="lastName"
                                        label="Last Name"
                                        type="text"
                                        fullWidth
                                        variant="outlined"/>
                                </div>
                                <div className='flex flex-row justify-between gap-4' >
                                  <TextField
                                    margin="dense"
                                    id="phone"
                                    label="Phone"
                                    type="tel"
                                    fullWidth
                                    variant="outlined"
                                  />
                                  <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="outlined"/>
                                </div>

                                    <div>
                                      <TextField
                                        margin="dense"
                                        id="flightNumber"
                                        label="Flight Number"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        placeholder='Airline code + Number (Eg: VN101)'
                                      />
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                          <TimePicker className='w-full' label="Arrival Time" />
                                        </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                    <div className='mt-3'>
                                        <Select_Airport/>
                                    </div>
                          </div>
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Close</Button>
                      <Button  className='bg-[#EF3925] rounded-xl text-white font-semibold p-2 px-5'  onClick={handleCloseDialog} autoFocus>
                        Confirm Booking
                      </Button>
                    </DialogActions>
                </Dialog>
  
                 

                
          </div>
        

          <Newletter/> 
          
          <Footer/>

        <div>

        </div>
        
    </div>
  )
}

export default Fasttrack