import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home';
import {Text, View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Profil = () => (
  <Text style={{marginTop: 100, textAlign: 'center'}}>Profil</Text>
);
const Parametres = () => (
  <Text style={{marginTop: 100, textAlign: 'center'}}>Paramètres</Text>
);

const CustomAccueilLabel = () => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image
      source={require('../../assets/images/Logo.jpg')}
      style={{width: 20, height: 20, marginRight: 5}}
    />
    <Text>Accueil</Text>
  </View>
);

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen 
          name="Accueil"
          component={Home}
          options={{
            headerTitle: () => (
              <View style={{display: "flex", flexDirection: 'row', justifyContent:'space-between'}}>
                <Image
                  source={require('../../assets/images/Logo.jpg')}
                  style={{width: 50, height: 30, marginRight: 10}}
                />
                <Text style={{}}> Accueil</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Profil" component={Profil} options={{
            headerTitle: () => (
              <View style={{display: "flex", flexDirection: 'row', justifyContent:'space-between'}}>
                <Image
                  source={require('../../assets/images/Logo.jpg')}
                  style={{width: 50, height: 30, marginRight: 10}}
                />
                <Text style={{}}> Profil</Text>
              </View>
            ),
          }} />
        <Tab.Screen name="Paramètres" component={Parametres} options={{
            headerTitle: () => (
              <View style={{display: "flex", flexDirection: 'row', justifyContent:'space-between'}}>
                <Image
                  source={require('../../assets/images/Logo.jpg')}
                  style={{width: 50, height: 30, marginRight: 10}}
                />
                <Text style={{}}> Parametres</Text>
              </View>
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
