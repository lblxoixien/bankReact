import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import Typography from '../../components/Typography'

const Notifications = () => {
    const [isNotificationOn, setIsNotificationOn] = useState(false)
    return (
        <View style={styles.container} >
            <View style={{justifyContent:'space-between', flexDirection:'row', padding:10, paddingVertical:20}} >
                <Typography 
                    text={`Notifications are turned ${isNotificationOn ? 'on' : 'off'}`}
                />
                <Switch 
                    onValueChange={()=>setIsNotificationOn(!isNotificationOn)} 
                    value={isNotificationOn} 
                    trackColor={{false: '#5AA5E2', true: '#5AA5E2'}}
                    thumbColor={'white'}
                />
            </View>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5AA5E2',
    }
})
