import { View, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButtons from './TimerButtons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Timer = ({ period, intervalType, onComplete, isCompleted, setIsCompleted, setIntervalType }) => {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(period * 60);

    const saveTimerState = async (time) => {
        try {
            await AsyncStorage.setItem('timerState', JSON.stringify({ time, intervalType, running }));
        } catch (error) {
            console.error("Failed to save timer state", error);
        }
    };

    const getTimerState = async () => {
        try {
            const state = await AsyncStorage.getItem('timerState');
            return state ? JSON.parse(state) : null;
        } catch (error) {
            console.error("Failed to get timer state", error);
            return null;
        }
    };

    useEffect(() => {
        const loadTimerState = async () => {
            const state = await getTimerState();
            if (state) {
                setTime(state.time);
                setIntervalType(state.intervalType);
                setRunning(state.running);
            }
        };
        loadTimerState();
    }, []);

    useEffect(() => {
        setRunning(false);
        setTime(period * 60);
        setIsCompleted(false);
    }, [period]);

    useEffect(() => {
        let timerId;
        if (running && time > 0) {
            timerId = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime - 1;
                    saveTimerState(newTime);
                    return newTime;
                });
            }, 1000);
        } else if (running && time === 0) {
            clearInterval(timerId);
            Vibration.vibrate([1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500])
            onComplete();
            setRunning(false);

            // Transition to the next interval type
            if (intervalType === "Working") {
                setIntervalType("Break");
            } else {
                setIntervalType("Working");
            }
            setTime(period * 60);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [running, time]);

    const handlePlay = () => {
        if (isCompleted) {
            // if timer is completed
            setIsCompleted(false);
        }
        setRunning(true);
    };

    const handlePause = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setRunning(false);
        setTime(period * 60);
    }

    return (
        <View className = "p-4">
            <TimerHeader 
                running = {running}
                intervalType = {intervalType}
            />
            <TimerDisplay 
                time = {time}
            />
            <TimerButtons 
                play = {handlePlay}
                pause = {handlePause}
                reset = {handleReset}
                running = {running}
            />
        </View>
    );
};

export default Timer