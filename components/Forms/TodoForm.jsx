import React, { useRef, Component } from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, Alert, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  Title: t.String,
  Description: t.maybe(t.String),
  Difficulty: t.enums.of(['1',
  '2',
  '3', '4', '5']),
  "Due Date": t.Date
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 10
      },
    },
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }
  const options = {
    i18n: {
        optional: '',
        required: '',
    },
    fields: {
      Title: {
        error: 'Please enter title'
      },
      Difficulty: {
        error: 'Please select difficulty level'
      },
      "Due Date":{
          error: 'Please select date'
      }
    },
    //stylesheet: formStyles,
  };

export default class TodoForm extends Component {
    // const _form = useRef(null)
    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        if(value != null){
            Alert.alert(
                "Task added!",
              );
        }
    }

    render(){
    return (
        <View style={styles.container}>
        <Text style={styles.header}>New Task</Text>
        <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}
        />
        <View style={styles.btn}>
        <Button
          mode="contained"
          title="Submit!"
          onPress={this.handleSubmit}
        />
        </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#ffffff',
    },
    header: {
        textAlign: "center",
        justifyContent: "center", 
        marginTop: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn: {
        marginTop: 40,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});