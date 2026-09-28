import { useState } from "react";

function BgChanger(){
const[color, setColor] = useState('black');

return(
    
    <div className="w-full flex min-h-screen items-center justify-center" style={{backgroundColor: color}}>
   
        <div className="bg-amber-50 rounded-2xl flex justify-center p-6 inline-flex gap-2">
            <button className="bg-red-500 text-white p-3 rounded-sm" onClick={()=> setColor('red')}>Red</button>
            <button className="bg-green-500 p-3 text-white rounded-sm" onClick={()=> setColor('green')}>Green</button>
            <button className="bg-yellow-500 p-3 text-white rounded-sm" onClick={()=> setColor('yellow')}>Yellow</button>
            <button className="bg-pink-500 p-3 text-white rounded-sm" onClick={()=> setColor('pink')}>Pink</button>
            <button className="bg-amber-700 p-3 text-white rounded-sm" onClick={()=> setColor('brown')}>Brown</button>
            <button className="bg-purple-500 p-3 text-white rounded-sm" onClick={()=> setColor('purple')}>Purple</button>
        </div>
    </div>

)
}

export default BgChanger;