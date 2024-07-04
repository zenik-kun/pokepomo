import { Text } from 'react-native'
import React from 'react'

const TimerHeader = ({ intervalType, running }) => {
    const handleDisplay = () => {
        if (intervalType === "Working") {
            return running? "Gotta Catch 'em All!" : "Ikuzo!";
        } else {
            return running? "It's break time! Enjoy" : "Relax :)" ;
        };
    };

    const textToShow = handleDisplay();

    return (
        <Text className = "text-3xl text-center text-white font-pokemon tracking-wider p-5">
            {textToShow}
        </Text>
    )
}

export default TimerHeader