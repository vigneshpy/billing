import {
    TouchableOpacity,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import React from 'react';

  interface Props {
    handleAction:any;
  }
  type CombinedProps = Props;
  const FlatIcon : React.FC<CombinedProps> = (props: any) => {
    const {handleAction}=props;
      return(
        <TouchableOpacity
          onPress={handleAction}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 100,
        }}
      >
        <Icon name='plus' size={30} color='#01a699' />
      </TouchableOpacity>
      )
  }
  export default FlatIcon;
