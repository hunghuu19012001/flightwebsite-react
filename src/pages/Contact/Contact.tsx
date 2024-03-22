import Navbar from '../../component/navbar/Navbar-test'
import Footer from '../../component/Footer/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          {/* <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea> */}
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            <span className="text-blue-500 font-bold">Address (US):</span> 9636 Garden Grove Blvd, Suite #22, Garden Grove, CA 92844
          </p>
          <p className="text-sm text-gray-600">
            <span className="text-blue-500 font-bold">Address (VN):</span> B54-B56 Bach Dang Str., Ward 2, Tan Binh Dist., HCMC
          </p>

        </div>
      </div>
    </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Contact