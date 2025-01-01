import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ProfileIcon from '../../assets/svg/Profile.svg';
import CalendarIcon from '../../assets/svg/Calendar.svg';
import BellIcon from '../../assets/svg/Bell.svg';

import BioIcon from '../../assets/svg/Bio.svg';
import FoodIcon from '../../assets/svg/Food.svg';
import EnglishIcon from '../../assets/svg/English.svg';
import MathIcon from '../../assets/svg/Math.svg';
import PhysicsIcon from '../../assets/svg/Physics.svg';
import SportsIcon from '../../assets/svg/Sports.svg';
import GlobeIcon from '../../assets/svg/Globe.svg';

const data = [
    {
        time: "8:30-9:15",
        icon: GlobeIcon,
        subject: "Geography",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Type of Soils.'
    },
    {
        time: "9:30-10:15",
        icon: MathIcon,
        subject: "Mathematics",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Algebra.'
    },
    {
        time: "10:30-11:15",
        icon: EnglishIcon,
        subject: "English",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Grammar.'
    },
    {
        time: "11:30-12:15",
        icon: PhysicsIcon,
        subject: "Physics",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Laws of Motion.'
    },
    {
        time: "12:30-1:15",
        icon: SportsIcon,
        subject: "Sports",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Football.'
    },
    {
        time: "1:30-2:15",
        icon: FoodIcon,
        subject: "Food",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Types of Food.'
    },
    {
        time: "2:30-3:15",
        icon: BioIcon,
        subject: "Biology",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Human Body.'
    },
    {
        time: "3:30-4:15",
        icon: MathIcon,
        subject: "Mathematics",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Algebra.'
    },
    {
        time: "4:30-5:15",
        icon: EnglishIcon,
        subject: "English",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Grammar.'
    },
    {
        time: "5:30-6:15",
        icon: PhysicsIcon,
        subject: "Physics",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Laws of Motion.'
    },
    {
        time: "6:30-7:15",
        icon: SportsIcon,
        subject: "Sports",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Football.'
    },
    {
        time: "7:30-8:15",
        icon: FoodIcon,
        subject: "Food",
        teacher: 'Mr. John Doe',
        note: 'Assignment Pending on Types of Food.'
    },
]



const StudentHomeScreen = () => {
    return (
        <View className='pt-10'>
            <View>
                <View className='justify-between items-center flex-row p-5'>
                    <View>
                        <Text className='text-2xl font-bold font-inter_regular'>
                            November
                            <Text className='text-[#F49F9A]'> 2024</Text>
                        </Text>
                    </View>
                    <View className=''>
                        <View className='flex-row gap-4 items-center'>
                            <CalendarIcon />
                            <BellIcon />
                            <ProfileIcon />
                        </View>
                    </View>
                </View>
                <View className='flex-row justify-around items-center p-4 mt-3'>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Mon</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>13</Text>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Tue</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>14</Text>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Wed</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>15</Text>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Thu</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>16</Text>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Fri</Text>
                        <View className='bg-[#F49F9A] items-center justify-center w-6 h-6 rounded-full'>
                            <Text className='font-semibold text-[#fff] text-sm'>17</Text>
                        </View>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Sat</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>18</Text>
                    </View>
                    <View className='justify-center items-center'>
                        <Text className='text-[#848484] text-sm'>Sun</Text>
                        <Text className='font-semibold text-[#010101] text-sm'>13</Text>
                    </View>
                </View>

                <View className='rounded-t-[20px] bg-white h-full shadow-2xl mt-5'>
                    <ScrollView showsVerticalScrollIndicator={false} className='p-5'>
                        <View className='pt-6 px-3'>
                            {
                                data.map((item, index) => (
                                    <View key={index} className='flex-row gap-4'>
                                        <View className='w-[80px]'>
                                            <Text>{item.time}</Text>
                                        </View>
                                        <View className='flex-row w-[200px] gap-2'>
                                            <View className='items-center'>
                                                <View className='bg-[#E2DCDC] w-11 h-11 rounded-full justify-center items-center'>
                                                    <item.icon />
                                                </View>
                                                <View className='w-1 h-16 bg-[#E2DCDC] ' />
                                            </View>
                                            <View className='w-[150px]'>
                                                <Text className='font-bold'>{item.subject}</Text>
                                                <Text>{item.teacher}</Text>
                                                <Text className='text-xs text-wrap'>{item.note}</Text>
                                            </View>
                                        </View>
                                        <View className='w-5 h-5 rounded-full border-2 border-[#F49F9A]'></View>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default StudentHomeScreen