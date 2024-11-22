import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import RoleScreen from './RoleScreen';
import GetStartedScreen from './GetStartedScreen';
import { AnimatePresence, MotiView } from 'moti';
import { StackNavigationProp } from '@react-navigation/stack';

const OnboardingScreen = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const [isGetStarted, setIsGetStarted] = useState(false);

  return (
    <View className="flex-1">
      <AnimatePresence exitBeforeEnter>
        {isGetStarted ? (
          <MotiView
            key="get-started-screen"
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'timing',
              duration: 350,
              delay: 350,
            }}
            className="flex-1"
          >
            <GetStartedScreen navigation={navigation} />
          </MotiView>
        ) : (
          <MotiView
            key="role-screen"
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
            transition={{
              type: 'timing',
              duration: 300,
            }}
          >
            <RoleScreen setIsGetStarted={setIsGetStarted} />
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
};

export default OnboardingScreen;
