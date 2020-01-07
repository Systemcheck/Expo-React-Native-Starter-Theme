import React, { Component } from 'react';
import {
  View,
  
  Button,
  TextInput,
  Image,
  StyleSheet,
  NativeModules,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Text } from '../../components/StyledText';
const buttons = [
  {
    icon: (
      <Entypo
        raised
        name="air"
        type={'entypo'}
        style={{ paddingTop: 3, fontSize: 20 }}
        color="#fff"
      />
    ),
    title: 'Drinking Fountains',
    description: 'Please rate your drink...',
    text: 'Stay Rehydrate, Stop the Plastic',
    url: '/drinking_fountains/query?q=DIVISION:*&rows=1000',
  },
  {
    icon: (
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          raised
          name="md-man"
          style={{ paddingTop: 3, fontSize: 20 }}
          color="#fff"
        />
        <Ionicons
          raised
          name="md-woman"
          style={{ paddingTop: 3, paddingLeft: 2, fontSize: 20 }}
          color="#fff"
        />
      </View>
    ),
    title: 'Toilets & BBQs',
    text: 'Family Friendly Places to Go',
    description: 'Please rate your experience...',
  },
  {
    icon: (
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          raised
          name="ios-tennisball"
          style={{ paddingTop: 3, fontSize: 20 }}
          color="#fff"
        />
      </View>
    ),
    title: 'Sports',
    text: 'Tennis, Basketball, Badminton',
    description: 'Please rate this facility...',
  },
  {
    icon: (
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons
          raised
          name="recycle"
          style={{ paddingTop: 3, fontSize: 20 }}
          color="#fff"
        />
      </View>
    ),
    title: 'Recycling',
    text: 'Batteries, Lightbulbs, Soft Plastics',
    description: 'Please rate this facility...',
  },
];

const styles2 = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    opacity: 0.8,
    top: -60,
    height: '112%',
    position: 'absolute',
  },
});

export default class HomeScreen extends Component {
  state = {
    buttons: [],
    extended: true, 
    isReady: false
  };

  /*static navigationOptions = options => {
    return {
      header: null,
    };
  };*/

  componentDidMount() {
    setTimeout(() => {
      // Call animation method prior to state change
      LayoutAnimation.spring();
      this.setState({ buttons });
    }, 500);
  }

  render() {
    let {
      navigation: { navigate },
    } = this.props;

    const im = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png';
   
    return ( 
      <View style={styles.container}>
        
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles2.MainContainer}
          resizeMode="cover"
        > 
        <View style={styles.sectionLarge}>
          <Text style={styles.title, {fontSize: 30, fontWeight: 'bold', color: '#ffffff'}}>
            Expo Starter
          </Text>
          
          
        </View>
        <View style={styles.section}>
          <Text 
            style={styles.titleDescription,
            { 
              fontSize: 15, 
              color: '#ffffff',
              textAlign: 'center',
              fontWeight: 'normal',
              }}>
            A powerful starter project that saves you a lot of time and money.
          </Text>
          <Text
            style={styles.titleDescription, {
              textAlign: 'center',
              fontSize: 15,
              //width: '100%',
              color: 'white',
              fontWeight: 'normal',
              
            }}>
            Start now with this ready to go Starterkit.
          </Text>
        </View>

        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            A powerful starter project that bootstraps development of your
            mobile application and saves you $20 000*
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {this.state.extended
                  ? '$0.00' : '$19.99'}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.sectionLarge]}>
          <View style={styles.priceContainer}>
          <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                this.state.extended ? this.setState({extended :false}) : this.setState({extended :true})
              }
            >
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.price, { 
                  textAlign: 'center',
                  color: 'white', 
                  fontWeight: 'bold',
                  fontSize: 50}}>
                  {this.state.extended
                  ? '$0.00' : '$19.99'}
                 
              </Text>
            </View>
           <Text style={{ 
                  color: 'white', 
                  textAlign: 'center',
                  fontSize: 14}}>
                  {this.state.extended
                  ? 'Single Application "Starter"'
                  : 'Single Application "Developer"'}
                
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.props.navigation.navigate('Pages')}
            underlayColor='#fff'>
            <Text style={styles.submitText}>View Pages</Text>
          </TouchableHighlight>
        </View>
       </ImageBackground> 
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
   submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
    paddingLeft: 35,
    paddingRight: 35,
      color:'#fff',
      textAlign:'center',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    textAlign: 'center',
    color: '#19e7f7',
    
    //fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});