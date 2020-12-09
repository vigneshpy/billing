import React, {useState} from 'react';
import {View, Button, Platform,Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';

const DatePicker = (props) => {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log(date);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


  return (
    <View>
  <Pressable onPress={() => setShow(true)}>
  <View pointerEvents="none">
      <TextInput
        label={props.label}
        value={date}
        style={props.style}
        onChangeText={(text) => props.onChangeText(props.fieldName, text)}
        mode="outlined"
        theme={props.theme}
        {...props.inputProps}
      />
      </View>
</Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
