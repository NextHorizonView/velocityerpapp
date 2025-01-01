import { Text as RNText, StyleSheet } from 'react-native';
import React from 'react';

import { TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
    style?: object;
}

const Text: React.FC<CustomTextProps> = ({ style, ...props }) => {
    return <RNText style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter_24pt-Regular',
    },
});

export default Text;
