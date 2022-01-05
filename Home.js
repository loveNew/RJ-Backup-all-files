import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";


var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

export default class HomeScreen extends Component {
  render() {
    return (   
      <View style={styles.container}>
          <Text style={styles.appIcon}>Ratlam Jewellers </Text>
          
          <Text style={styles.date}>Date: {date + "-" + month + "-" + year}</Text>
          
          <View style={styles.firstContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Entry')}>
              <Text style={styles.buttonText}>Entry</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Issue')}>
              <Text style={styles.buttonText}>Issue</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Recipt')}>
              <Text style={styles.buttonText}>Recipt</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Return')}>
              <Text style={styles.buttonText}>Return</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate('ReciptList')}>
              <Text style={styles.buttonText}>Recipt List</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate('TodayRate')}>
              <Text style={styles.buttonText}>Today Rate</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4",
  },
  appIcon: {
    color: "white",
    resizeMode: "contain",
    marginTop: 0,
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 60,
    userSelect: 'none'
  },
  firstContainer: {
    alignItems: "center",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    
  },
  secondContainer: {
    alignItems: "center",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 330,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D5B",
    marginTop: 30,
    marginLeft: 10,
  },
  button2: {
    width: '46%',
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D5B",
    marginTop: 50,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  date: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 1350,
    fontWeight: 400,
    userSelect: "none",
  },
});
