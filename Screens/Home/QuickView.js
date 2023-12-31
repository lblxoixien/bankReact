/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Accordion from '../../components/Accordion';
import IconButton from './IconButton';
const quickNavigation = [
    {
        title: 'Airtime',
        text: 'Buy Airtime',
        icon: 'ios-phone-portrait-outline',
    },
    {
        title: 'Transfer',
        text: 'Transfer',
        icon: 'swap-horizontal-outline',
    },
    {
        title: 'Bills',
        text: 'Pay Bills',
        icon: 'document-text-outline',
    },
    {
        title: 'Cash',
        text: 'Xpress Cash',
        icon: 'md-airplane-outline',
    },
    {
        title: 'QuickPay',
        text: 'QuickPay',
        icon: 'cash-outline',
    },
    {
        title: 'Split',
        text: 'SplitPaymnet',
        icon: 'ios-git-merge-outline',
    },
];
export default function QuickView() {
    return (
        <Accordion heading="Quick view" open={true} >
            <View style={styles.listConatiner} >
                {
                    quickNavigation.map(_ => {
                        return (
                            <IconButton
                        
                                key={_.text}
                                iconName={_.icon}
                                text={_.text}
                                color="#5AA5E2"
                                screenName={_.title}
                            />
                        );
                    })
                }
            </View>
        </Accordion>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginTop : 20,
    },
    listConatiner:{
       
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        overflow:'hidden',
        marginTop : 10 ,    
    },
});

// var t = HomeButtons()
