import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Searchbar from './Searchbar'
import banner3 from "../../assets/images/banner3.jpg"
const Homepage = () => {
  return (
    <div>
        <div className='flex flex-col flex-row'>
            <div><Navbar/></div>

            <div className='flex justify-center my-20	'>
                <img  src={banner3} />
            </div>
            <div><Searchbar/></div>
        </div>



        <div><Footer/></div>
    </div>
  )
}

export default Homepage