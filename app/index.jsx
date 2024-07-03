import React from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, ScrollView } from 'react-native';
import { images } from '../constants';
import PomodoroTimer from "../components/PomodoroTimer";
import Header from "../components/Header";

const App = () => {
    NavigationBar.setBackgroundColorAsync('#6AA563')

    return (
        <SafeAreaView className = "h-full">
            <ImageBackground
                source = {images.bg}
                resizeMode = "cover"
                className = "h-full z-0"
            >
                <ScrollView className = "h-full">
                    <PomodoroTimer />
                    <Header />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default App