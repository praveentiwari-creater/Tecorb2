import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import Shimmer from 'react-native-shimmer';
export default class ShimmerView extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                {/* <Shimmer> */}
                    <Text style={{fontSize:40}}>Loading...</Text>
                {/* </Shimmer>; */}
            </View>
        )
    }
}
