import React, { useEffect, useState } from 'react'
import axios from 'axios';
import duolingo from '../assets/images/duolingo.jpg';
import dmoj from '../assets/images/dmoj.jpg';
import duo_flame from '../assets/images/flame.svg';

const Stats = () => {
    const [streak, setStreak] = useState(-1)

    useEffect(() => {
        const fetchStreak = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/duolingo-streak');
                setStreak(response.data.streak);
            } catch (error){
                console.log('Error fetching Duolingo streak:', error);
            }
        }
        fetchStreak();
    }, []);

  return (
    <div className="w-full mt-4vh">
        {/* Title saying "My Stats!" */}
        <div className="font-ubuntu flex justify-evenly items-center">
            <h1 className="text-4xl text-white">My Stats! {streak}</h1>
        </div>
        {/* Cards */}
        <div className="flex justify-evenly items-center">
            <div className="bg-white rounded-xl p-4vh" style={{width: "500px;", height: "250px;"}}>
                <div className="flex"> 
                    <img className="rounded-xl h-48 w-48" src={duolingo}></img>
                    <div className="text-4xl font-ubuntu flex-col font-black">
                        <div className="flex align-center justify-center items-center">
                            <img className="h-16 w-16" src={duo_flame}/>
                            <p>{streak == -1 ? "Loading " : `${streak} Day `} Streak{streak == -1 ? "..." : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
        {
            streak != -1 ? 
                <p>Streak: {streak}</p>
                :
                <p>Loading...</p>
        }
        </div>
    </div>
  )
}

export default Stats