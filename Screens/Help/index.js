/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LottieView  from 'lottie-react-native';
import lottiteFile from '../../lottieFiles/help.json'
import Typography from '../../components/Typography';

export default function Help() {
    return (
        <View style={styles.container} >
            <LottieView 
                style={styles.lottie}
                source={lottiteFile}
                autoPlay 
                loop={false}

            />
            <View style={styles.button} >
                <Typography
                    text='Contact us'
                    bold
                    fontSize={20}
                    color='black'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'#5AA5E2',
        padding:10,
        borderRadius:10,
        marginVertical:20
    }
})
