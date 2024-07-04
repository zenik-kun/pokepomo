import React, { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, ScrollView } from 'react-native';
import { images } from '../constants';
import PomodoroTimer from "../components/PomodoroTimer";
import Header from "../components/Header";
import { StatusBar } from 'expo-status-bar';
import registerBackgroundTask from '../lib/backgroundTimer';

const App = () => {
    NavigationBar.setBackgroundColorAsync('#6AA563')

    useEffect(() => {
        registerBackgroundTask(); // Register the background task
    }, [])

    return (
        <SafeAreaView className = "h-full">
            <ImageBackground
                source = {images.bg}
                resizeMode = "cover"
                className = "h-full z-0"
            >
                <ScrollView className = "h-full">
                    <PomodoroTimer />
                </ScrollView>
                <Header />
            </ImageBackground>
            <StatusBar backgroundColor = '#79C9FA' style='light' />
        </SafeAreaView>
    )
}

export default App