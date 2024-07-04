import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TimerButtons = ({ running, play, pause, reset }) => {
    return (
        <View className = "flex-row justify-evenly">
            {running? (
                <>
                    <TouchableOpacity 
                        className = "items-center justify-center border-white rounded-3xl bg-white px-4 py-1 border-4"
                        onPress = {pause}
                    >
                        <Text className = "text-sky text-4xl font-pokemon">
                            Pause
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className = "items-center justify-center border-white rounded-3xl bg-white px-4 py-1 border-4"
                        onPress = {reset}
                    >
                        <Text className = "text-sky text-4xl font-pokemon">
                            Reset
                        </Text>
                    </TouchableOpacity>
                </>
            ) : (
            
                <TouchableOpacity 
                    className = "items-center justify-center border-white rounded-3xl bg-white px-4 py-1 border-4"
                    onPress = {play}
                >
                    <Text className = "text-sky text-4xl font-pokemon">
                        Start
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default TimerButtons