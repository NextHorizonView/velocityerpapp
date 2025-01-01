import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MotiText, AnimatePresence, MotiView } from "moti";
import { Image } from "react-native";
import AttendanceImg from "../../assets/images/attendance.png";
import TestImg from "../../assets/images/test.png";
import EventsImg from "../../assets/images/events.png";
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

const texts = [
    { sentence: "Get regular updates of ", word: "events", color: "#619373", content: "Stay informed about all academic activities, club meetings, and campus events" },
    { sentence: "Stay Updated with your ", word: "Attendance", color: "#DEC164", content: "Get real-time attendance statistics and timely reminders for all your courses" },
    { sentence: "Never Miss A ", word: "Task or Test", color: "#648EC9", content: "Start managing your academic life smarter!" },
];

const imgPaths = [
    EventsImg,
    AttendanceImg,
    TestImg,
];

const HeaderText = ({ index }: { index: number }) => {
    return (
        <MotiText
            from={{
                opacity: 0,
                translateY: 20,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            exit={{
                opacity: 0,
                translateY: -20,
            }}
            className="text-[#181818] text-5xl sm:text-[5rem] md:text-[6rem] font-bold"
        >
            {texts[index].sentence}
            <Text style={{ color: texts[index].color }}>{texts[index].word}</Text>
        </MotiText>
    );
};

const GetStartedScreen = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View className="flex-1 px-6 py-12 md:py-20 md:px-8 justify-between">
            <View className="h-[20%]">
                <AnimatePresence exitBeforeEnter>
                    <HeaderText index={index} key={`text-${index}`} />
                </AnimatePresence>
            </View>
            <View className="height-[60%]">
                <AnimatePresence exitBeforeEnter>
                    <MotiView
                        key={`image-${index}`}
                        from={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            type: "timing",
                            duration: 800,
                        }}
                        className="flex-1 items-center justify-center"
                    >
                        <Image
                            source={imgPaths[index]}
                            style={{ width: 200, height: 200, resizeMode: "contain" }}
                        />
                    </MotiView>
                </AnimatePresence>
            </View>
            <MotiView
                from={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    type: "timing",
                    duration: 800,
                }}
                delay={7000}
                className=""
            >
                <View className='items-center'>
                    <TouchableOpacity activeOpacity={0.7} className='w-4/5' onPress={() => navigation.replace('Login')}>
                        <View className='bg-[#DF9774] justify-center items-center rounded-md p-4'>
                            <Text className='text-white font-bold text-2xl sm:text-3xl md:text-4xl'>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </MotiView>
        </View>
    );
};

export default GetStartedScreen;
