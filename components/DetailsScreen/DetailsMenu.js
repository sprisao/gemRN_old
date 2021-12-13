import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGlobalContext } from '../../Context';
import FastImage from 'react-native-fast-image';

const DetailsMenu = (props) => {
  const { menu, menuLoading } = useGlobalContext();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuWrapper}>
        <Text style={styles.menuHeader}>대표메뉴</Text>
        <View style={styles.menuItemWrapper}>
          {menu.map((item) => {
            if (item.store_id[0] === storeData.id)
              return (
                <View style={styles.menuItem} key={item.id}>
                  <View style={styles.imageContainer}>
                    <FastImage
                      source={{ uri: item.menuImage[0].url }}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </View>
                  <View style={styles.articleContainer}>
                    <View style={styles.nameContaienr}>
                      <Text style={styles.menuName}>{item.menu}</Text>
                      {item.engMenu ? <Text>{item.engMenu}</Text> : null}
                    </View>
                    <View style={styles.descContainer}>
                      <Text style={styles.menuDesc}>{item.menuDesc}</Text>
                    </View>
                    <View>
                      <Text style={styles.menuPrice}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              );
          })}
        </View>
      </View>
    </View>
  );
};

export default DetailsMenu;

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 20,
  },
  menuWrapper: { flex: 1, width: '100%', paddingHorizontal: 10 },
  menuHeader: {
    fontFamily: 'notoSans-Bold',
    fontSize: 22,
    marginVertical: 7,
    letterSpacing: -1,
    marginLeft: 5,
  },
  menuItemWrapper: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: 'auto',
    width: '100%',
    marginBottom: 25,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 150,
    overflow: 'hidden',
  },
  articleContainer: {
    width: '62%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 5,
    // marginLeft: 10,
  },
  menuName: {
    fontFamily: 'notoSans-Medium',
    fontSize: 18,
    lineHeight: 20,
  },
  menuDesc: {
    fontFamily: 'notoSans-Light',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: -0.35,
    marginVertical: 10,
  },
});
