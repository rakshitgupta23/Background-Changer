import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#E2D8C2')

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: color }}>
      <h1 className='flex flex-wrap text-6xl font-bold justify-center pt-60'>Choose the background color</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
    shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700' onClick={() => { setColor('red') }}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600' onClick={() => { setColor('blue') }}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600' onClick={() => { setColor('green') }}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-900' onClick={() => { setColor('#71209E') }}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
