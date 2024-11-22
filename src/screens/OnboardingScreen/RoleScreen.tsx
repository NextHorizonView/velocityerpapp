import 'react-native-reanimated'
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { MotiView } from 'moti';
import { Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome6';

const windowWidth = Dimensions.get('window').width;

const maskHeight = windowWidth < 640 ? 48 : windowWidth < 768 ? 54 : 58;
const gap = windowWidth < 640 ? 8 : windowWidth < 768 ? 12 : 16;

interface RoleScreenProps {
    setIsGetStarted: (value: boolean) => void;
}

const RoleScreen: React.FC<RoleScreenProps> = ({ setIsGetStarted }) => {

    type Role = 'teacher' | 'student' | 'parent';
    const [role, setRole] = useState<Role>('student');

    return (
        <View className='flex-1 px-6 py-12 md:py-20 md:px-8 justify-between'>
            <View>
                <Text className='text-[#181818] text-4xl sm:text-[5rem] md:text-[6rem] font-bold'>What is your role in the <Text className='text-[#DF9774]'>Association</Text>?</Text>
                <Text className='text-[#787272] text-base sm:text-2xl md:text-3xl'>Help us customize your experience.</Text>
            </View>


            <View className='items-center relative' style={{ gap }}>

                <MotiView
                    className='absolute w-4/5 bg-[#576086] p-4 rounded-lg translate-y-12'
                    from={{ translateY: 48 }}
                    animate={{
                        translateY: role === 'student' ? maskHeight + gap : role === 'teacher' ? 0 : 2 * maskHeight + 2 * gap,
                    }}
                    transition={{
                        type: 'spring',
                        damping: 15,
                        stiffness: 100,
                    }}
                    style={{ height: maskHeight }}
                />

                <TouchableOpacity onPress={() => setRole('teacher')} activeOpacity={0.6} className='p-2 rounded-md gap-3 flex-row justify-center items-center w-4/5' style={{ height: maskHeight }}>
                    <Icons name='chalkboard-user' size={20} color={role == 'teacher' ? '#ffffff' : '#9ca3af'} />
                    <Text className='text-[#BFBCBB] font-bold text-xl sm:text-3xl md:text-4xl' style={{
                        color: role == 'teacher' ? '#ffffff' : '#9ca3af',
                    }}>Teacher</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setRole('student')} activeOpacity={0.6} className='p-2 rounded-md gap-3 flex-row justify-center items-center w-4/5' style={{ height: maskHeight }}>
                    <Icons name='graduation-cap' size={20} color={role == 'student' ? '#ffffff' : '#9ca3af'} />
                    <Text className='text-[#BFBCBB] font-bold text-xl sm:text-3xl md:text-4xl' style={{
                        color: role == 'student' ? '#ffffff' : '#9ca3af',
                    }}>Student</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setRole('parent')} activeOpacity={0.6} className='p-2 rounded-md gap-3 flex-row justify-center items-center w-4/5' style={{ height: maskHeight }}>
                    <Icons name='user-group' size={20} color={role == 'parent' ? '#ffffff' : '#9ca3af'} />
                    <Text className='text-[#BFBCBB] font-bold text-xl sm:text-3xl md:text-4xl' style={{
                        color: role == 'parent' ? '#ffffff' : '#9ca3af',
                    }}>Parent</Text>
                </TouchableOpacity>
            </View>

            <View className='items-center'>
                <TouchableOpacity activeOpacity={0.7} className='w-4/5' onPress={() => setIsGetStarted(true)}>
                    <View className='bg-[#DF9774] justify-center items-center rounded-md p-4'>
                        <Text className='text-white font-bold text-2xl sm:text-3xl md:text-4xl'>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RoleScreen