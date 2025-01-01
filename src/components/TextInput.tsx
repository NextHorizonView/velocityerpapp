import { View, TextInput as Input, StyleSheet } from 'react-native';
import React, { useState } from 'react';

interface TextInputProps {
    placeholder: string;
    type: "email-address" | "password";
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, type }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={`w-full h-[55px] bg-[#F5F5F5] ${isFocused ? 'border-2 border-[#F49F9A]' : 'border border-gray-300'
                } rounded-lg`}
        >
            <Input
                className="w-full h-full px-3"
                placeholder={placeholder}
                placeholderTextColor="#626262"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardType={type === "email-address" ? "email-address" : "default"}
                secureTextEntry={type === "password"}
            />
        </View>
    );
};

export default TextInput;
