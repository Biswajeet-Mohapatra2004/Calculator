import { useState, useCallback } from 'react'
import './index.css'


function App() {

  let [view, setView] = useState("");

  const evaluate = useCallback(() => {
    try {
      let result = eval(view);
      view = result;
      setView(view);
    } catch (error) {
      setView(error)
    }
  }, [view])



  return (
    <>
      <div className='h-screen bg-gray' style={{ width: "200vh" }}>
        <div className='bg-black mt-12 h-auto w-1/3 mx-auto rounded-lg flex flex-col flex-wrap hover:shadow-xl hover:shadow-blue-500 ' style={{ transition: "all 1.5s" }}>
          <input className='bg-gray-900 rounded-t-lg  mx-2 mt-2 py-7 text-white font-bold text-xl text-right border-2 border-blue-500' type="text" readOnly value={view} />
          <div className='border-2 border-blue-500 mx-2 mb-2 mt-1 h-full bg-black rounded-b-lg flex flex-col items-center justify-between gap-y-8 '>
            <div className='flex flex-row gap-x-7 mt-2 '>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={() => {
                setView("")
              }} >C</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev + e.target.innerText)
              }}>%</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 ' onClick={() => {
                if (view.length === undefined) {
                  view += " ";
                  view = view.slice(0, view.length - 2)
                  setView(view)
                }
                else {
                  view = view.slice(0, view.length - 1);
                  setView(view)

                }
              }} ><i class="fa-solid fa-trash-can"></i></button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={() => {
                view += "/";
                setView(view)
              }} ><i class="fa-solid fa-divide"></i></button>
            </div>
            <div className='flex flex-row gap-x-7 font-extrabold '>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>7</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>8</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>9</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={() => {
                setView((prev) => prev += "*")
              }}>X</button>
            </div>
            <div className='flex flex-row gap-x-7 font-extrabold'>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>4</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>5</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>6</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75 =' onClick={() => {
                setView((prev) => prev += "-")
              }}> <b>-</b></button>
            </div>
            <div style={{ transition: "all 1.5s" }} className='flex flex-row gap-x-7 font-extrabold'>
              <button className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>1</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>2</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>3</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={() => {
                setView((prev) => prev += "+")
              }}>+</button>
            </div>
            <div className='flex flex-row gap-x-7 mb-2 font-extrabold'>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>00</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>0</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 rounded-full text-xl text-green-500 font-extrabold  hover:bg-green-700 hover:text-white transition-all delay-75' onClick={(e) => {
                setView((prev) => prev += e.target.innerText)
              }}>.</button>
              <button style={{ transition: "all 1.5s" }} className='py-3 px-8 bg-orange-500 rounded-full text-xl text-white font-extrabold  hover:bg-orange-400 hover:text-white transition-all delay-75' onClick={evaluate}>=</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
