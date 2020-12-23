import React, {useState} from 'react';
import {View, Button, Platform,Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';

import moment from 'moment';


export const formatDate=(date:any,format:string)=>{
    return moment(date).format(format);
  }

const DatePicker = (props) => {
  const today = new Date();
  const [date, setDate] = useState(new Date(today));

  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    console.warn(currentDate);
    props.onDateChange(formatDate(date,'DD-MM-YYYY'));
    setDate(currentDate);
    
  };
  return (
    <View>
  <Pressable onPress={() => setShow(true)}>
  <View pointerEvents="none">
      <TextInput
        label={props.label}
        value={formatDate(date,'MMM-DD-yyyy')}
        style={props.style}
        mode="outlined"
        theme={props.theme}
        {...props.inputProps}
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
