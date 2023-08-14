"use client"
import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
const Time = () => {

    const [currentTime, setCurrentTime] = useState('Loading Time...');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().locale('en-in').format('DD/MM/YYYY hh:mm:ss A'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full max-w-7xl'>
            <span className='flex justify-start gap-1 items-center'>
                <i class='bx bxs-time' ></i>
                <h4>{currentTime}</h4>
            </span>
        </div>
    )
}

export default Time