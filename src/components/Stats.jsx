import React, { useEffect, useState } from 'react'
import axios from 'axios';
import duolingo from '../assets/images/duolingo.jpg';
import dmoj from '../assets/images/dmoj.jpg';
import duo_flame from '../assets/images/flame.svg';
import duo_xp from '../assets/images/duo_xp.svg';

const Stats = () => {
    const [streak, setStreak] = useState(-1)
    const [duoXP, setDuoXP] = useState(-1)

    const [d, setD] = useState(-1)
    const [rating, setRating] = useState(-1)
    const [ratingColor, setRatingColor] = useState(-1)

    useEffect(() => {
        const fetchStreak = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/duolingo-streak');
                setStreak(response.data.streak);
                setDuoXP(response.data.xp);
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
            <h1 className="text-4xl text-white">My Stats!</h1>
        </div>
        {/* Cards */}
        <div className="flex justify-evenly items-center">
            <div className="flex rounded-xl p-4vh" style={{width: "500px;", height: "250px;"}}>
                {/* Duolingo */}
                <div className="bg-white flex justify-center items-center m-4 p-4 rounded-xl"> 
                    <img className="rounded-xl h-48 w-48" src={duolingo}></img>
                    <div className="text-4xl font-ubuntu h-full flex-col justify-center font-black">
                        <div className="flex justify-start items-center">
                            <img className="h-16 w-16" src={duo_flame}/>
                            <p>{streak == -1 ? "Loading " : `${streak} Day `} Streak{streak == -1 ? "..." : ""}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <img className="h-16 w-16" src={duo_xp}/>
                            <p>{duoXP == -1 ? "Loading " : `${duoXP} Total XP `} XP{duoXP == -1 ? "..." : ""}</p>
                        </div>
                    </div>
                </div>
                {/* DMOJ */}
                <div className="bg-white flex justify-center items-center m-4 p-4 rounded-xl"> 
                    <img className="rounded-xl h-48 w-48" src={dmoj}></img>
                    <div className="text-4xl font-ubuntu h-full flex-col justify-center font-black">
                        <div className="flex justify-start items-center">
                            <img className="h-16 w-16" src={duo_flame}/>
                            <p>{streak == -1 ? "Loading " : `${streak} Day `} Streak{streak == -1 ? "..." : ""}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <img className="h-16 w-16" src={duo_xp}/>
                            <p>{duoXP == -1 ? "Loading " : `${duoXP} Total XP `} XP{duoXP == -1 ? "..." : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats