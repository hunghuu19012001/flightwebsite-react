
const Newletter = () => {
  return (
    <div className="py-12 px-24">
      <div
        className="bg-slate-100 rounded-3xl bg-no-repeat bg-left-bottom bg-[url('src/assets/black_cricle.png')"
        id="newletter-background"
      >
        <div className="h-full py-12 px-24 bg-no-repeat bg-right bg-[url('src/assets/Blue_cricle.svg')]">
          <div className="grid grid-cols-2">
            <div className="pt-[40px] flex flex-col justify-center">
              <div className="text-sky-900 text-[27px] font-semibold text-left">
                BẠN SẼ KHÔNG PHẢI TRẢ QUÁ NHIỀU TIỀN CHO CÁC CHUYẾN BAY NỮA!
              </div>
              <div className="w-4/5 text-[#757575] text-[18px] font-light text-left">
                Ưu đãi tuyệt vời cho các điểm đến phù hợp với bạn. Tiết kiệm lên
                đến 35%.
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="container flex justify-center items-top">
                <div className="relative">
                  <div className="absolute top-2 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                  </div>
                  <input
                    type="text"
                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 shadow focus:outline-none"
                    placeholder="Enter your email address.."
                  />
                  <div className="absolute top-2 right-2">
                    <button className="h-10 w-28 text-white rounded-lg bg-[#142D53] hover:bg-red-600">
                      ĐẶT NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newletter