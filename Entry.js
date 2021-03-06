import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Swal from "sweetalert2";
import "animate.css";
import db from "../config";
import firebase from "firebase";

const homeIcon = require("../assets/home_icon.png");

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

export default class EntryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personNameText: "",
      addressText:"",
      mobileNoText:"",
      cityName: "",
      jewelleryNameText:"",
      weightText:"",
      chargesText:"",
      paidText:"",
      balanceText:"",
      noteText:"",
    };
  }
  save() {
    this.firstTextInput.focus()
    Swal.fire({
      title: "Saved",
      text: "This Is Added To Your Repairing List",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Return Home",
      cancelButtonColor: "#0066aa",
      confirmButtonColor: "#F48D20",
      reverseButtons: true,
      timer: 1500,
      confirmButtonText: "Ok",
      showClass: {
        popup: "animate__animated animate__rollIn",
      },
      hideClass: {
        popup: "animate__animated animate__rollOut",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState ({
          personNameText: "",
          addressText:"",
          mobileNoText:"",
          cityName: "",
          jewelleryNameText:"",
          weightText:"",
          chargesText:"",
          paidText:"",
          balanceText:"",
          noteText:"",
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.props.navigation.navigate("Home");
      }
    });
  }
  componentDidMount(){
    setTimeout(
      function() {
     this.firstTextInput.focus()
      }
      .bind(this),
      1
  );
  }
  cancel() {
    console.log("cancled");
    this.firstTextInput.focus()
    Swal.fire({
      title: "Canceled",
      text: "This Is Not Added To Your Repairing List",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Return Home",
      cancelButtonColor: "#0066aa",
      confirmButtonColor: "#F48D20",
      reverseButtons: true,
      timer: 3500,
      showClass: {
        popup: "animate__animated animate__zoomInDown",
      },
      hideClass: {
        popup: "animate__animated animate__flipOutX",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({
          personNameText: "",
          addressText:"",
          mobileNoText:"",
          cityName: "",
          jewelleryNameText:"",
          weightText:"",
          chargesText:"",
          paidText:"",
          balanceText:"",
          noteText:"",
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.props.navigation.navigate("Home");
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spaceForTitle}>
          <Text style={styles.title}>Ratlam Jewellers</Text>
        </View>
        <Text style={styles.date}>Date: {date + "-" + month + "-" + year}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Image source={homeIcon} style={styles.homeImage}></Image>
        </TouchableOpacity>

        <Text style={styles.address}>32, Khariwal Mohalla, Jaora</Text>
        <div>
          <View style={styles.ac}>
            <View style={styles.firstContainer}>
              <div>
                <Text style={styles.textTitle}>  Name :                     </Text> 
                <TextInput
                  style={styles.textBox}
                  value={this.state.personNameText}
                  onChangeText={(text) => this.setState({ personNameText: text })}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.secondTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  ref={(input) => {
                    this.firstTextInput = input;
                  }}
                ></TextInput>
              </div>
              <br style={{userSelect: "none"}} />
              <div>
                <Text style={styles.textTitle}>  Address :                  </Text>  
                <TextInput
                  style={styles.textBox}
                  value={this.state.addressText}
                  onChangeText={(text) => this.setState({ addressText: text })}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.thirdTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  ref={(input) => {
                    this.secondTextInput = input;
                  }}
                ></TextInput>
              </div>
              <br  style={{userSelect: "none"}}  />
              <div>
                <Text style={styles.textTitle}>  Mobile.No :              </Text> 
                <TextInput
                  style={styles.textBox}
                  value={this.state.mobileNoText}
                  onChangeText={(text) => this.setState({ mobileNoText: text })}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.fourthTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  ref={(input) => {
                    this.thirdTextInput = input;
                  }}
                ></TextInput>
              </div>
              <br  style={{userSelect: "none"}} />
              <div>
                <Text style={styles.textTitle} >  City :                         </Text> 
                <TextInput
                  style={styles.textBox}
                  value={this.state.cityName}
                  onChangeText={(text) => this.setState({ cityName: text })}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.fifthTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  ref={(input) => {
                    this.fourthTextInput = input;
                  }}
                ></TextInput>
              </div>
              <br  style={{userSelect: "none"}}  />
              <div>
                <Text style={styles.textTitle}>  Jewellery Name :      </Text>
                <TextInput
                  style={styles.textBox}
                  value={this.state.jewelleryNameText}
                  onChangeText={(text) => this.setState({ jewelleryNameText: text })}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.sixthTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  ref={(input) => {
                    this.fifthTextInput = input;
                  }}
                ></TextInput>
              </div>
              <br  style={{userSelect: "none"}}  />
              <div></div>
            </View>
            {/* Second Container */}
            <View style={styles.secondContainer}>
              <div>
                <div>
                  <Text style={styles.textTitle}>  Weight :                   </Text> 
                  <TextInput
                    style={styles.textBox}
                    value={this.state.weightText}
                    onChangeText={(text) => this.setState({ weightText: text })}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.seventhTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    ref={(input) => {
                      this.sixthTextInput = input;
                    }}
                  ></TextInput>
                </div>
                <br  style={{userSelect: "none"}}  />
                <div>
                  <Text style={styles.textTitle}>  Charges :                 </Text> 
                  <TextInput
                    style={styles.textBox}
                    value={this.state.chargesText}
                    onChangeText={(text) => this.setState({ chargesText: text })}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.eighthTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    ref={(input) => {
                      this.seventhTextInput = input;
                    }}
                  ></TextInput>
                </div>
                <br  style={{userSelect: "none"}} />
                <div>
                  <Text style={styles.textTitle}>  Paid :                       </Text> 
                  <TextInput
                    style={styles.textBox}
                    value={this.state.paidText}
                    onChangeText={(text) => this.setState({ paidText: text })}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.ninthTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    ref={(input) => {
                      this.eighthTextInput = input;
                    }}
                  ></TextInput>
                </div>
                <br  style={{userSelect: "none"}} />
                <div>
                  <Text style={styles.textTitle}>  Balance :                 </Text> 
                  <TextInput
                    style={styles.textBox}
                    value={this.state.balanceText}
                    onChangeText={(text) => this.setState({ balanceText: text })}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.tenthTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    ref={(input) => {
                      this.ninthTextInput = input;
                    }}
                  ></TextInput>
                </div>
                <br  style={{userSelect: "none"}} />
                <div>
                  <Text style={styles.textTitle}>  Note :                     </Text> 
                  <TextInput
                    style={styles.textBox}
                    value={this.state.noteText}
                    onChangeText={(text) => this.setState({ noteText: text })}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.firstTextInput.focus();
                    }}
                    blurOnSubmit={false}
                    ref={(input) => {
                      this.tenthTextInput = input;
                    }}
                  ></TextInput>
                </div>
                <br  style={{userSelect: "none"}} />
                <div></div>
              </div>
            </View>
          </View>
        </div>
        <View style={styles.saveButtonCon}>
        <TouchableOpacity
            style={styles.saveButton}
            onPress={() => this.save()}
          >
          <Text style={styles.saveButtonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this.cancel()}
          >
          <Text style={styles.saveButtonText}>Cancel</Text>
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
    color: "white",
  },
  title: {
    color: "white",
    resizeMode: "contain",
    marginTop: 10,
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: -10,
    userSelect: "none",
  },
  address: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 60,
    userSelect: "none",
  },
  textBox: {
    width: 500,
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    color: "#FFFFFF",
    marginLeft: 20,
  },
  date: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 1350,
    fontWeight: 400,
    userSelect: "none",
  },
  textTitle: {
    color: "white",
    fontSize: 20,
    userSelect: "none",
  },
  saveButtonCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  ac: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  firstContainer: {
    marginRight: 50,
  },
  homeImage: {
    position: "absolute",
    height: 75,
    width: 75,
    resizeMode: "contain",
    left: 0,
    top: -75,
  },
  saveButton: {
    alignItems: "center",
    fontSize: 50,
    width: 150,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#03c04a",
  },
  cancelButton: {
    alignItems: "center",
    fontSize: 50,
    width: 150,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "red",
  },
  saveButtonText: {
    color: "white",
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
