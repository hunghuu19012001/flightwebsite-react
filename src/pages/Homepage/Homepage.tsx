import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Searchbar from './Searchbar'
import banner from "../../assets/images/banner-home.png"
const Homepage = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <div><Navbar/></div>

            <div className='flex justify-center  '>
                <img  src={banner} />
            </div>
            <div><Searchbar/></div>
        </div>



        <div><Footer/></div>
    </div>
  )
}

export default Homepage