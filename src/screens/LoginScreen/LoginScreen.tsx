import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import GoogleIcon from '../../assets/svg/Google.svg'
import FacebookIcon from '../../assets/svg/Facebook.svg'
import AppleIcon from '../../assets/svg/Apple.svg'
import Dropdown from '../../components/Dropdown'

const LoginScreen = () => {
    return (
        <View>
            <Text className='mt-32 text-center font-bold text-2xl text-[#F49F9A]'>Login</Text>
            <Text className='text-center mt-5 text-[#787272] font-semibold text-base'>Welcome back you’ve</Text>
            <Text className='text-center text-[#787272] font-semibold'>been missed!</Text>
            <View className='p-5 mt-10 items-center mx-8 gap-3'>
                <TextInput placeholder='Email' type='email-address' />
                <View className='w-full gap-3'>
                    <Dropdown />
                    <TextInput placeholder='Password' type='password' />
                    <TouchableOpacity>
                        <Text className='text-right text-sm text-[#F49F9A] font-semibold mt-1'>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>
                <View className='w-full mt-3 gap-2'>
                    <Button text='Login' onPress={() => { }} />
                    <Text className='text-center font-semibold text-sm text-[#494949]'>
                        Don’t have an account?
                        <Text className='text-[#6185A9]'> Signup.</Text>
                    </Text>
                </View>
                <View className='w-full mt-5'>
                    <Text className='text-center text-[#F49F9A] font-semibold'>Or continue with</Text>
                    <View className='flex-row justify-center gap-3 mt-3'>
                        <TouchableOpacity>
                            <View className='bg-[#ECECEC] items-center justify-center px-4 py-2 rounded-lg'>
                                <GoogleIcon />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='bg-[#ECECEC] items-center justify-center px-4 py-2 rounded-lg'>
                                <FacebookIcon />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='bg-[#ECECEC] items-center justify-center px-4 py-2 rounded-lg'>
                                <AppleIcon />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen