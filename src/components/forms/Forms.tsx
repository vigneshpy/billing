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

const AppColors = AppStyles.color;
const AppFonts = AppStyles.fonts;
const Form = ({fields, action, buttonText, buttonStyle, elementColor,}) => {
  const btnColor = elementColor ? elementColor : AppColors.COLOR_PRIMARY;
  const fieldKeys = Object.keys(fields);
  const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
      state[key] = '';
    });
    return state;
  };
  const [values, setValues] = useState(getInitialState(fieldKeys));
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState(
    getInitialState(fieldKeys),
  );
  const onChangeValue = (key, value) => {
    const newState = {...values, [key]: value};
    setValues(newState);

    if (validationErrors[key]) {
      const newErrors = {...validationErrors, [key]: ''};
      setValidationErrors(newErrors);
    }
  };
  const getValues = () => {
    return fieldKeys.sort().map((key) => values[key]);
  };

  const submit = async () => {
    setErrorMessage('');
    setValidationErrors(getInitialState(fieldKeys));

    const errors = validateFields(fields, values);

    if (hasValidationError(errors)) {
      console.log(errors);
      return setValidationErrors(errors);
    }
    try {
      const result = await action(...getValues());
    } catch (e) {
      setErrorMessage(e.message);
    }

    const result = await action(...getValues());
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
            mode="contained"
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
