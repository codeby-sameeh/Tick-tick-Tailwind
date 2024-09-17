import { useState } from 'react'
import './App.css'
import Firstjar from './Component/FIrst jar'
import Secondjar from './Component/Second jar'
import Thirdjar from './Component/Third jar'

function App() {

  return (
    <>
    <div className="w-screen h-screen bg-white-300 flex">
      <div className="w-[3%] h-full ">
        <Firstjar/>
      </div>
      <div className="w-[18%] h-full  bg-white-100">
        <Secondjar/>
      </div>
      <div className="third-item">
        <Thirdjar/>
      </div>
      <div className="fourth-item">
        {/* <Inbox/>q  */}
        </div> 
    </div>
    </>
  )
}

export default App
