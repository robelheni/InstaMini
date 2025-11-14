/**
 * AddCaption Screen
 * 
 * Flow:
 * 1. Receives image URI from CreatePost
 * 2. Shows small image preview
 * 3. User types caption
 * 4. User presses Share
 * 5. Post gets sent to backend (TODO)
 * 6. Navigate back to Home
 */

import React, {useState} from 'react';
//ActivityIndicator shows loading spinner when posting
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ActivityIndicator, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native'



export default function AddCaption ({route}) {
    const navigation= useNavigation();
    const {imageUri} = route.params;
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);

    return(
        <SafeAreaView style ={{flex:1, backgroundColor:'#000'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>
                    <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#333', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                    
                        disabled={loading}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>New Post</Text>




                        <TouchableOpacity 
                        onPress={() => {
                            Keyboard.dismiss();

                            setLoading(true);
                            console.log('Sharing post with caption:', caption);
                            setTimeout(() => setLoading(false), 2000);
                        }}
                        disabled={caption.trim() === '' || loading}
                        >
                        {loading ? (
                            <ActivityIndicator size="small" color="#1DA1F2" />
                        ) : (
                            <Text style={{ color: caption.trim() !== '' ? '#1DA1F2' : '#666', fontSize: 16 }}>
                            Share
                            </Text>
                        )}
                        </TouchableOpacity>

                    </View>



                    <View style ={{padding: 15,flexDirection:"row", alignItems:'flex-start'}}>
                        <Image source ={{ uri : imageUri}} style ={{width:80, height:80, marginRight:10}}/>

                        <TextInput style={{ flex:1, color:"#fff", fontSize:16}}
                        placeholder="Write your caption..."
                        placeholderTextColor="#666"
                        multiline
                        value ={caption}
                        onChangeText={setCaption}
                        editable={!loading}
                        />


                    </View>

            </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
}