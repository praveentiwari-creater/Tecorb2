import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
const Header_Component=(props)=>{
   
    return (
        <View style={{flex:1}}>

            <View style={{ flexDirection: 'row',backgroundColor:'powdergrey',
            alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('./ICON/left_back.png')} style={{ width: 30, height: 40 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 35, color: 'black', fontWeight: 'bold', marginLeft: 30 }}>
                    Snacks
                </Text>
                <TouchableOpacity>
                    <Image source={require('./ICON/search.png')} 
                    style={{ width: 30, height: 30, marginLeft: 95, marginTop: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./ICON/basket.png')}
                     style={{ width: 35, height: 35, marginLeft: 20, marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            

            <View style={{ backgroundColor:'#e0e0d1', borderColor: 'grey', height: 70,
            alignItems:'center',justifyContent:'center', marginTop: 20}}>
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
                <Image source={require('./ICON/time1.png')} 
                    style={{ width: 25, height: 25 ,marginTop:10}} />
           <Text style={{color:'#00cc44',fontSize:16,marginTop:10,fontWeight:'bold'}}>Tomorrow, 7 PM</Text>
           <Text style={{color:'#5c5c3d',fontSize:40,marginLeft:10,marginRight:10}}>|</Text>
           <Image source={require('./ICON/scooter1.png')} 
                    style={{ width: 30, height: 30 }} />
           <Text style={{color:'red',fontSize:16,marginTop:15,fontWeight:'bold'}}>500 RS for free delivery</Text>
                   
                </View>
            </View>
        </View>
    )    

}
export default Header_Component;
