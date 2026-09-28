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
        </div>
    </div>

)
}

export default BgChanger;
