import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Field from './Field';
import AppStyles from '../config/styles';
import {hasValidationError, validateFields} from './Validation';
import moment from 'moment';
const AppColors = AppStyles.color;
const AppFonts = AppStyles.fonts;
import {formatDate} from '../config/Format';
import Spinner from '../forms/loader';
import Toast, {BaseToast} from 'react-native-toast-message';
const Form = (props) => {
  const {
    fields,
    action,
    buttonText,
    buttonStyle,
    elementColor,
    mode,
    loadedData,
    afterSubmit
  } = props;
  const btnColor = elementColor ? elementColor : AppColors.COLOR_PRIMARY;
  const fieldKeys = Object.keys(fields);
  const getInitialState = (fieldKeys, defaultFlag = false) => {
    const state = {};
    fieldKeys.forEach((key) => {
      if (fields[key].type == 'date' && defaultFlag)
        state[key] = formatDate(new Date(), 'DD-MM-YYYY');
      else state[key] = '';

      console.log("state1");
      console.log(state); 
      if (loadedData) {
        Object.keys(loadedData).forEach((loadedKey) => {
          if (key == loadedKey) {
            state[key] = loadedData[key];
          }
        });
      }
    });
    console.log("state2");
    console.log(state);
    return state;
  };

  const emptyState = (fieldKeys) => {
    const errors = {};
    fieldKeys.forEach((key) => {
      errors[key] = '';
    });
    return errors;
  };
  const [values, setValues] = useState(getInitialState(fieldKeys, true));
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState(
    emptyState(fieldKeys),
  );

  const onChangeValue = (key, value) => {
    const newState = {...values, [key]: value};
    console.log(newState);
    setValues(newState);

    if (validationErrors[key]) {
      const newErrors = {...validationErrors, [key]: ''};

      setValidationErrors(newErrors);
    }
  };
  const getValues = (rawData = false) => {
    if (rawData) return values;
    return fieldKeys.sort().map((key) => values[key]);
  };

  const showToast = (text) => {
    Toast.show({text1: text});
  };

  const submit = async () => {
    setErrorMessage('');

    const errors = validateFields(fields, values);

    if (hasValidationError(errors)) {
      return setValidationErrors(errors);
    }
    try {
      setSpinner(true);
      const result = await action(getValues(true));
      // setValues(emptyState(fieldKeys));
      // showToast('Saved');
      // afterSubmit();
    } catch (e) {
      console.warn(e);
      setErrorMessage('Sorry Something went Wrong');
    }

    setSpinner(false);
   
   
    console.log(values);
  };
  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="always" nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Spinner visible={spinner} animation="fade" />
          <Text style={styles.error}>{errorMessage}</Text>
          {fieldKeys.map((key) => {
            return (
              <Field
                key={key}
                fieldName={key}
                field={fields[key]}
                error={validationErrors[key]}
                onChangeText={onChangeValue}
                value={values[key]}
                color={btnColor}
              />
            );
          })}
          <Button
            mode={mode ? mode : 'contained'}
            onPress={submit}
            style={buttonStyle}
            color={btnColor}>
            {buttonText}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  error: {
    marginBottom: 20,
    height: 17.5,
  },
});

export default Form;
