import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, fonts } from '../../styles';

const chartIcon = require('../../assets/images/pages/chart.png');
const calendarIcon = require('../../assets/images/pages/calendar.png');
const chatIcon = require('../../assets/images/pages/chat.png');
const galleryIcon = require('../../assets/images/pages/gallery.png');
const profileIcon = require('../../assets/images/pages/profile.png');

export default function PagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'GalleryView' })}
          style={styles.item}
        >
          <Text>
            <Ionicons name="md-images" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Gallery</Text>
          <Text style={styles.itemTextFree}>Free</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'CalendarView' })}
          style={styles.item}
        >
          <Text style={styles.itemText}>
            <MaterialCommunityIcons name="calendar-multiselect" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Calendar</Text>
          <Text style={styles.itemTextFree}>Free</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'GridView' })}
          style={styles.item}
        > 
          <Text>
          <MaterialCommunityIcons name="grid-large" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Grid</Text>
          <Text style={styles.itemTextFree}>Free</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'ComponentsView' })}
          style={styles.item}
        >
          <Text style={styles.itemText}>
            <Ionicons name="ios-keypad" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Components</Text>
          <Text style={styles.itemTextFree}>Free</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Chat' })}
          style={styles.item}
        >
          <Text style={styles.itemText}>
            <Ionicons name="ios-chatbubbles" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Chats</Text>
          <Text style={styles.itemTextPro}>Pro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate({ routeName: 'Login' })} style={styles.item}>
          <Text style={styles.itemText}>
            <Ionicons name="ios-log-in" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Login</Text>
          <Text style={styles.itemTextPro}>Pro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Text style={styles.itemText}>
            <Ionicons name="ios-people" size={42} color={colors.primary} />
          </Text>
          <Text style={styles.itemText}>Profile</Text>
          <Text style={styles.itemTextPro}>Pro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'DevVersion' })}
          style={styles.item}
        >
        <Text style={styles.itemText}>
          <MaterialCommunityIcons name="chart-line" size={42} color={colors.primary} />
        </Text>
        <Text style={styles.itemText}>Charts</Text>
        <Text style={styles.itemTextDev}>Dev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'DevVersion' })}
          style={styles.item}
        >
        
        <Text style={styles.itemText}>
          <MaterialCommunityIcons name="map-search-outline" size={42} color={colors.primary} />
        </Text>
        <Text style={styles.itemText}>Maps</Text>
        <Text style={styles.itemTextDev}>Dev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'DevVersion' })}
          style={styles.item}
        >
        <Text style={styles.itemText}>
          <MaterialCommunityIcons name="barcode-scan" size={42} color={colors.primary} />
        </Text>
        <Text style={styles.itemText}>Barcode Scan</Text>
        <Text style={styles.itemTextDev}>Dev</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemTextPro: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.secondary,
    color: colors.white,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  itemTextFree: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.green,
    color: colors.white,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  itemTextDev: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#e2b007',
    color: colors.white,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  itemImage: {
    height: 35,
  },
});
