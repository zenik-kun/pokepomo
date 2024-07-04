import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Timer from "./Timer"

const PomodoroTimer = () => {
    const [workTime, setWorkTime] = useState(50)
    const [breakTime, setBreakTime] = useState(10)
    const [intervalType, setIntervalType] = useState('Working')
    const [isCompleted, setIsCompleted] = useState(false)

    // handles completion of timer
    const handleTimerCompleted = () => {
        setIsCompleted(true)
    };

    // gets triggered on change of work time 
    const handleWorkTime = (text) => {
        const time = parseInt(text, 10);
        if (time >= 0) {
            setWorkTime(time);
        }
    };

    // gets triggered on change of break time
    const handleBreakTime = (text) => {
        const time = parseInt(text, 10);
        if (time >= 0) {
            setBreakTime(time);
        }
    };

    // called to set the timer's time
    const handleTime = () => {
        return intervalType === "Working" ? workTime : breakTime;
    }

    const time = handleTime();

    return (
        <View className = "flex-1 mt-5">
            <View className = "flex-row">
                <View className = "flex-1">
                    <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">
                        Work Time
                    </Text>
                    <TextInput 
                        className = "text-4xl text-center font-pokemon text-white tracking-wider py-1 px-5 border-b-2 border-white mx-10"
                        keyboardType = "numeric"
                        defaultValue = {`${workTime}`}
                        placeholder = "Work Time"
                        onChangeText = {handleWorkTime}
                    />
                </View>

                <View className = "flex-1">
                    <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">
                        Break Time
                    </Text>
                    <TextInput 
                        className = "text-4xl text-center font-pokemon text-white tracking-wider py-1 px-5 border-b-2 border-white mx-10"
                        keyboardType = "numeric"
                        defaultValue = {`${breakTime}`}
                        placeholder = "Break Time"
                        onChangeText = {handleBreakTime}
                    />
                </View>
            </View>
            <Timer 
                intervalType = {intervalType}
                onComplete = {handleTimerCompleted}
                period = {time}
                isCompleted = {isCompleted}
                setIsCompleted = {setIsCompleted}
                setIntervalType = {setIntervalType}
            />
        </View>
    )
}

export default PomodoroTimer