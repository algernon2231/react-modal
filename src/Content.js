import React from 'react'

const Content = ({ onClose }) => {
  return (
   <>
          <div className="flex justify-center items-center border-2 border-gray-300 rounded-md bg-white  shadow-2xl">
              <img src="https://cdn.pixabay.com/photo/2013/05/11/20/44/spring-flowers-110671_960_720.jpg" width="200px" height="200px" alt="anh" />
              <div className=" bg-white p-2 ">
                  <p onClick={onClose} className="text-right ">X</p>
                  <div className="flex flex-col justify-center items-center mb-8  ">
                      <p>Do you want a</p>
                      <h1 className='text-3xl font-bold font-serif'>$20 CREDIT</h1>
                      <p>for your first tade</p>
                  </div>
                  <div className="btnContainer">
                      <button className='p-2 bg-sky-400 text-white mr-3 rounded-md'>
                          <span>Yes</span> I love NFT's
                      </button>
                      <button className="p-2 bg-sky-400 text-white rounded-md">
                          <span>No</span> thanks
                      </button>
                  </div>
              </div>
          </div>
   </>
  )
}

export default Content