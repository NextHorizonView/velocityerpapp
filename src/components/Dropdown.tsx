import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown as DropdownElement } from 'react-native-element-dropdown';

const data = [
    { label: 'Vidya Sagar School', value: '1' },
    { label: 'St. Claret’s School', value: '2' },
    { label: 'ADAV School', value: '3' },
    { label: 'Marigold High School ', value: '4' },
];

const Dropdown = () => {
    const [value, setValue] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    return (
        <DropdownElement
            style={[styles.dropdown, isFocused && styles.dropdownFocused]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocused(true)} // Set focus state when dropdown is focused
            onBlur={() => setIsFocused(false)} // Reset focus state when dropdown loses focus
            onChange={item => {
                setValue(item.value);
                setIsFocused(false); // Close dropdown on selection
            }}
        />
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: '#d1d5db',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#F5F5F5',
    },
    dropdownFocused: {
        borderColor: '#F49F9A', // Change to your desired active border color
        borderWidth: 1.5,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#626262',
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
