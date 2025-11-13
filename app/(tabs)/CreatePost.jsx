import React, { useState } from 'react';
import {View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


export default function CreatePost() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImage = async () => {
        console.log('Openning gallery...');

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:1,
        });
        console.log('Result:', result);

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            console.log('Image selected:', result.assets[0].uri);
        } else {
            console.log('User canceled');
        }
    };
    return (
        <SafeAreaView style = {{flex:1, backgroundColor:'#000'}}>
            <View style ={{padding :15, borderBottomWidth:1, borderBottomColor:'#333', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'#fff', fontSize: 16}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>New Post</Text>
                <TouchableOpacity onPress ={() => console.log ('next')}>
                    <Text style={{color:'#1DA1F2', fontSize:16}}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style ={{flex:1,justifyCntent:'center', alignItems:'center'}}>
                <View style ={{width:'90%', height:400, backgroundColor:'#333', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#666', fontSize:16}}>No photo selected</Text>

                </View>

                <TouchableOpacity 
                    style={{ marginTop: 20, backgroundColor: '#1DA1F2', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 }}
                    onPress={pickImage}
                >
                    <Text style={{ color: '#fff', fontSize: 16 }}>Select Photo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}