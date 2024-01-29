import React, { useState } from "react";
import MainAppbar from '../components/MainAppbar'
import { StyleSheet,View} from 'react-native'
import { Button,TextInput } from "react-native-paper";

export default function Login() {
    const [formData, setFormData] = useState({username: '', password: ''})
    return (
        <>
        <MainAppbar title="Login"/>
        <View style={styles.container}>
            <TextInput 
            label="Username" 
            style={styles.input_field}
            value={formData.username}
            onChangeText={text => setFormData({...formData,username: text})}
            />
            <TextInput 
            label="Password" style={styles.input_field} 
            keyboardType='visible-password'
            value={formData.password}
            onChangeText={text => setFormData({...formData,password: text})}
            />
            <Button mode="contained" style={styles.button}>Submit</Button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,16,8)
    },
    button:{
        margin: (16,8,0,8)
    }
});