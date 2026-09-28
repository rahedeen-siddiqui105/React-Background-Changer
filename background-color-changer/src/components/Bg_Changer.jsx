import { useState } from "react";

function BgChanger(){
const[color, setColor] = useState('black');

return(
    
    <div className="w-full flex min-h-screen items-center justify-center px-4" style={{backgroundColor: color}}>
   
        <div className="bg-amber-50 rounded-2xl flex flex-wrap justify-center items-center p-4 sm:p-6 gap-2 fixed bottom-4 sm:static w-[90%] sm:w-auto max-w-md">
            <button className="bg-red-500 text-white px-3 py-2 sm:p-3 text-sm sm:text-base rounded-sm" onClick={()=> setColor('red')}>Red</button>
            <button className="bg-green-500 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('green')}>Green</button>
            <button className="bg-yellow-500 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('yellow')}>Yellow</button>
            <button className="bg-pink-500 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('pink')}>Pink</button>
            <button className="bg-amber-700 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('brown')}>Brown</button>
            <button className="bg-purple-500 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('purple')}>Purple</button>
            <button className="bg-cyan-900 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('cyan')}>Cyan</button>
            <button className="bg-blue-800 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('blue')}>Blue</button>
            <button className="bg-sky-500 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('sky')}>Sky</button>
            <button className="bg-indigo-300 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('indigo')}>Indigo</button>
            <button className="bg-fuchsia-700 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('fuchsia')}>Fuchsia</button>
            <button className="bg-grey-400 px-3 py-2 sm:p-3 text-sm sm:text-base text-white rounded-sm" onClick={()=> setColor('grey')}>Grey</button>
        </div>
    </div>

)
}

export default BgChanger;
