import React, { Component } from 'react';
import {
  View,
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
import { Button } from '../../src/components';
import { colors, fonts } from '../../styles/index';
import * as Font from 'expo-font';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      extended: true, 
      isReady: false
    } 
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    });
    
    setTimeout(() => {
      // Call animation method prior to state change
      LayoutAnimation.spring();
      
    this.setState({ fontLoaded: true });
  })

}
 
  render() {
    let {
      navigation: { navigate },
    } = this.props;

    const im = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png';
   
    return ( 
      
         !this.state.fontLoaded ?  null :  
        <ImageBackground
        source={colors.bg}
        style={styles.container}
      >
        
        <View style={styles.sectionLarge}>
          <Text size={30} bold white style={styles.title}>
            Expo RN Starter
          </Text>
          
          
        </View>
        <View style={styles.section}>
         
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
          <Text color={colors.primaryLight} secondary hCenter size={15} >
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
             <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                this.state.extended ? this.setState({extended :false}) : this.setState({extended :true})
              }
            >
              <Text white size={14}>
                {this.state.extended
                  ? 'Single Application "Starter"'
                  : 'Single Application "Developer"'}
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.section}>
        <Button
          large
          secondary
          rounded
          style={styles.button}
          caption="View all Pages"
          onPress={() => this.props.navigation.navigate('Pages')}
        />
        </View>
      
       </ImageBackground>   
       
     
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    opacity: 0.9,
    top: -70,
    height: '112%',
    position: 'absolute',
  },
   submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:25,
    paddingRight: 25,
    
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
    
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
    fontFamily: fonts.primaryRegular,
  },
  price: {
    marginBottom: 5,
    fontFamily: fonts.primaryRegular
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
});