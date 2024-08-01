import React, { useEffect, useState } from 'react'
import axios from 'axios';
import duolingo from '../assets/images/duolingo.jpg';
import dmoj from '../assets/images/dmoj.jpg';
import 

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
            <div className="background-white rounded-lg">
                <div className="flex"> 
                    <img className="rounded-md" src={duolingo}></img>
                    <div className="text-4xl flex font-black">
                        <img src={flame}></img>
                        <p>Day Streak<p/>
                        <p>Total XP</p>
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