import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View className='w-full h-[55px] bg-[#F49F9A] rounded-lg items-center justify-center'>
                <Text className='text-white font-semibold text-lg'>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button