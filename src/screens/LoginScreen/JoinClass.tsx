import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import JoinImg from '../../assets/images/join.png'
import Button from '../../components/Button'

import { NavigationProp } from '@react-navigation/native';

const JoinClass = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputs = useRef<(TextInput | null)[]>([]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input when a digit is entered
        if (text && index < 5) {
            inputs.current[index + 1]?.focus();
        }

    };
    return (
        <View className='flex-1 w-full'>
            <ScrollView>
                <Text className='mt-32 text-center font-bold text-2xl text-[#F49F9A]'>Login</Text>
                <Text className='text-center mt-5 text-[#787272] font-semibold text-base'>Enter your class code</Text>
                <Text className='text-center text-[#787272] font-semibold'>to see your statistics.</Text>
                <View className='p-5 mt-10 items-center mx-8 gap-3'>
                    <Image source={JoinImg} />
                </View>
                <View className='mt-8 w-full'>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View className='flex-row justify-center gap-2'>
                            {otp.map((_, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputs.current[index] = ref)}
                                    value={otp[index]}
                                    onChangeText={(text) => handleChange(text, index)}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    className="border-[1px] border-[#D6D6D6] text-[#F49F9A] font-bold px-5 py-5 rounded-lg justify-center items-center text-center text-sm"
                                />
                            ))}
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <View className='w-full px-8 py-6'>
                    <Button text='Join Class' onPress={() => navigation.navigate('Login')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default JoinClass