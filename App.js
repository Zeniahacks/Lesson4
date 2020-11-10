
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import moment from 'moment-timezone';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import {time} from 'eslint';
const Module = () => {
  return <Text>My Modules this Semester: </Text>
};

class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My First Native React App! </Text>
  }
};

const SemModule = (props) => {
  return (
  <Text>
    {props.day} - {props.module}
  </Text>
  );
};

class Eats extends React.Component {
  render(): React$Node {
    return <Text> {this.props.name} {'\n'}{this.props.location} {'\n'}</Text>
  };
};

class Clock extends React.Component {
  render(): React$Node {
    var a = moment().tz(this.props.zone).format('HH:mm Z');
    return (
        <Text>{a}</Text>
    );
  };

};

const WorldClock = () => {
  var output = <Clock zone = 'Asia/Singapore'/>;
  output += <Clock zone = 'Europe/London'/>;
  output += <Clock zone = 'America/New_York'/>
  output += <Clock zone = 'Europe/Oslo'/>
};

const Welcome = () => {
  return <Text>Welcome! your services will be fulfilled here</Text>
};

const App: () => React$Node = () => {
  console.log('test');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            +*"V ZX <View style={styles.sectionContainer}>5wq ZE

              xt
               <Welcome />
               <MyFirstApp />
               <Text>{'\n'}My Modules this Semester: </Text>
               <SemModule day="Monday"  module="C273" />
              <SemModule day="Tuesday"  module="C308" />
              <SemModule day="Thursday" module="C348" />
              <Text>{'\n'}Recommended Eats @RP </Text>
              <Eats name="Sweet tooth Waffles" location="W6 Level 1, E-canteen" />
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Eats name="Western Cuisine @ Koufu" location="E1 Level 1, Koufu" />
              <Eats name="Ayam Penyat" location="W4/W6 Lawn Canteen" />
              <WorldClock />
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
