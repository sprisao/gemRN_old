import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const GridTile = (props) => {
  return (
    <View style={{ ...styles.gridTile, ...props.style }}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: props.touchableValue,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.onSecondSelect}
      >
        <View style={styles.buttonWrapper}>
          <Image
            style={{ width: 40, height: 40 }}
            resizeMode='cover'
            source={{ uri: props.image }}
          />
          <Text>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridTile;

const styles = StyleSheet.create({
  gridTile: {
    width: '47%',
    margin: 5,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1.4,
  },
});
