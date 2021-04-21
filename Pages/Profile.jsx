import React, {useContext} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import { Avatar, Title, Caption, Text } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PointsContext } from "../customer/components/PointsContext";
import {AuthContext} from "../components/AuthContext";

function Profile() {
	const { points, setPoints } = useContext(PointsContext);
  const { user, setUser} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/02/Nature-Profile-Picture-Images-Pics-Wallpaper-Free-Download-14.jpg',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{user.name}</Title>
            <Caption style={styles.caption}>@{user.username}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{user.location}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{user.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>rdodda@asu.edu</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>{points}</Title>
            <Caption>Wallet Points</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>4</Title>
            <Caption>Coupons Purchased</Caption>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 30
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});