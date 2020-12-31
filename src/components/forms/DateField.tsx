import React, {useState} from 'react';
import {View, Button, Platform, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
import {formatDate} from '../config/Format';
const today = new Date();
const DatePicker = (props) => {
  const {label,style,theme,inputProps,onDateChange} =props;
  const [date, setDate] = useState(new Date(today));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    console.warn(currentDate);
    onDateChange(formatDate(date, 'DD-MM-YYYY'));
    setDate(currentDate);
  };
  return (
    <View>
      <Pressable onPress={() => setShow(true)}>
        <View pointerEvents="none">
          <TextInput
            label={label}
            value={formatDate(date, 'MMM-DD-yyyy')}
            style={style}
            mode="outlined"
            theme={theme}
            {...inputProps}
          />
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
