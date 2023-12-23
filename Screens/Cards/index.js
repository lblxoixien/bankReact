/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import CreditCard from '../../components/CreditCard';

const cardDetails = [
    {
        type: 'Visa',
        number: '123456789101112',
        expirationMonth: '11',
        expirationYear: '2023',
        cvv: '123',
        name: 'NGUYEN VAN A',
    },
    {
        type: 'Amex',
        number: '1213141516171819',
        expirationMonth: '11',
        expirationYear: '2023',
        cvv: '123',
        name: 'BUI VAN B',
    },
    {
        type: 'Master Card',
        number: '4111111111111111',
        expirationMonth: '11',
        expirationYear: '2023',
        cvv: '123',
        name: 'NGUYEN THI C',
    },
    {
        type: 'Discover',
        number: '4111111111111111',
        expirationMonth: '11',
        expirationYear: '2023',
        cvv: '123',
        name: 'VU MINH D',
    },
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2023',
        cvv: '123',
        name: 'LE MINH E',
    },
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2023',
        cvv: '123',
        name: 'Test Tester',
    },
]
export default function Cards() {
    const y = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll : ({contentOffset: {y: value}}) => { 
            y.value = value;
        },
    })
    return (
        <View style={styles.container} >
            <StatusBar hidden backgroundColor='#5AA5E2' />
            <Animated.ScrollView
                onScroll={onScroll}
                scrollEventThrottle={16}
                //The height of the container is set to prevent over scrolling
                contentContainerStyle={{height:((cardDetails.length + 1)*(Dimensions.get('window').height/2))}}
                snapToInterval={Dimensions.get('window').height/2}
                decelerationRate='fast'
            >
                {
                    cardDetails.map((card, i)=> 
                         <CreditCard 
                            name={card.name} 
                            number={card.number}
                            type={card.type} 
                            expirationMonth={card.expirationMonth}
                            expirationYear={card.expirationYear}
                            height={y} 
                            index={i} color={i%2 == 0 ? ['5AA5E2', 'orange'] : ['white', 'blue']}  
                            key={i}
                        />
                    )
                }
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})