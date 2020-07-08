import React, { Component } from 'react'
import { Text, View, Image,ScrollView,TouchableOpacity } from 'react-native'

export default class Screen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row', backgroundColor: 'white',
                        borderRadius: 10, width: '90%', height: 300, alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <Image source={require('./ICON/chips.png')} style={{ width: 90, height: 150 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>RS.40</Text>
                            <Text style={{ fontSize: 14 }}>Uncle chipps spicy Treat
                            
                            </Text>
                        </View>
                        <View >
                             <TouchableOpacity style={{width:100,height:40,backgroundColor:'#b30000',borderRadius:10,marginTop:140,marginRight:100}}>
                             <Text style={{fontSize:25,textAlign:'center',color:'white'}}>ADD</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
