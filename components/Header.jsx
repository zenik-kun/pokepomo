import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View className = "absolute bottom-0 w-full">
            <Text className = "text-5xl text-center text-grass-100 font-pokemon">
                PokéPomo
            </Text>
        </View>
    )
}

export default Header