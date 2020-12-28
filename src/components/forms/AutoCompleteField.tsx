import React, {Component} from 'react';
import {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
  {
    id: '92i3adijs7yta',
    name: 'Ondo',
  },
  {
    id: '92iijq2s71yta',
    name: 'Onedo',
  },
  {
    id: '922iij2es7yta',
    name: 'Onedo',
  },

  {
    id: 'seee',
    name: 'Onddo',
  },
  {
    id: '92i2ssij2s7yta',
    name: 'Ond1o',
  },
];
const change = (text) => {
  alert(text);
};
const MultiSelectExample = (props) => {
  const [value, SetValue] = useState('');
  return (
    <View>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={change}
        selectText={props.label}
        searchInputPlaceholderText={props.label}
        onChangeInput={(text) => console.log(text)}
        itemTextColor="#000"
        fixedHeight={true}
        hideSubmitButton={true}
        single={true}
        styleDropdownMenu={styles.autoComplete}
        styleDropdownMenuSubsection={styles.styleDropdownMenuSubsection}
        styleInputGroup={styles.inputGroup}
        searchInputStyle={styles.autoComplete}
        searchIcon={false}
        styleItemsContainer={styles.dropDown}
        styleSelectorContainer={styles.styleSelectorContainer}
        styleRowList={styles.styleRowList}
        styleTextDropdown={styles.styleTextDropdown}
        styleListContainer={styles.styleListContainer}
        styleMainWrapper={styles.styleMainWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  autoComplete: {
    width: 300,
  },
  inputGroup: {
    width: 300,
    elevation: 3,
  },
  dropDown: {
    width: 300,
  },

  styleSelectorContainer: {
    height: 'auto',
  },
  styleRowList: {},
  styleTextDropdown: {
    color: 'gray',
    fontWeight: '100',
  },
  styleListContainer: {
    zIndex: 50,
  },
  styleMainWrapper: {},
});

export default MultiSelectExample;
