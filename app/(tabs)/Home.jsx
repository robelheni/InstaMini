// Home.js
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Home() {
  const [postLiked, setPostLiked] = useState(false);
  const [post2Liked, setPost2Liked] = useState(false);
  const [post1Bookmarked, setPost1Bookmarked] = useState(false);
  const [post2Bookmarked, setPost2Bookmarked] = useState(false);
  
  return (
    //SafeAreaView makes sure your content doesn’t overlap the phone’s notch, status bar, or home indicator—it keeps your UI inside the “safe” visible area.
    <SafeAreaView style = {{flex:1, backgroundColor:'#000'}}>

      
        <View style ={{ padding:15,borderBottomWidth:1, borderBottomColor: '#333'}}>
          <Text style ={{ color:'#fff',fontSize: 24}}>Instagram</Text>
        </View>

      <ScrollView style={{flex:1}}> 
        {/* Post Container*/}
          <View style ={{marginBottom: 20}}>
            {/* username*/}
            <View style ={{padding:10, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View style ={{padding: 10, flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress = {()=>('got to tina_belays profile')}>
                  <View style = {{width: 30, height:30, borderRadius:20, backgroundColor: '#666', marginRight:10}}></View>
                  <Text style={{color: '#fff'}}>Tina_belay</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress ={() => console.log('open menu for post 1')}>
                <Text style={{color:'#fff', fontSize:20}}>...</Text>
              </TouchableOpacity>
            </View>

            {/*Post Image */}
            <View style = {{width: '100%', height :400, backgroundColor: '#333'}}>
              <Text style ={{color:'#666'}}>Image Placeholder</Text>

            </View>

            {/* Action Buttons*/}
            <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style ={{padding:10, gap:15, flexDirection: 'row'}}>
                <TouchableOpacity onPress = {()=> setPostLiked(!postLiked)}>
                  <Text style ={{color: '#fff', fontSize: 24}}>{postLiked? '❤️' : '🤍'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=>console.log('comment on post 1')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=> console.log('share post 2')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>📤</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress = {() => setPost1Bookmarked(!post1Bookmarked)}>
              <Text style={{ color: '#fff', fontSize: 24 }}>{post1Bookmarked? '🔖' : '📑'}</Text>
              
              </TouchableOpacity>
            </View>

            {/* Like count*/}
            <View style ={{paddingLeft:10, marginBottom:5}}>
              <Text style = {{color :'#fff'}}>{postLiked? 128 : 127} likes</Text>
            </View>

            <View style ={{paddingLeft:10, marginBottom:5}}>
              <TouchableOpacity onPress = {() => console.log('view comments')}>
                <Text style={{color:'#888', fontSize:13}}>View all 14 comments</Text>
              </TouchableOpacity>
            </View>


            <View style ={{padding:10}}>

              {/* caption*/}
              {/* */}
            <Text style={{color:'#fff'}}>
              <Text style={{fontWeight: 'bold'}}>Tina_belay</Text> This is my first post!

            </Text>
            <View style ={{ paddingLeft:10}}>
              <Text style= {{color:'#666', fontSize:11}}>2 hours ago</Text>
            </View>
            </View>
          </View>
          {/* Second Post*/}
          {/* Post Container*/}
          <View style ={{marginBottom: 20}}>
            {/* username*/}
            <View style ={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <View style ={{padding: 10, flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress = {()=>('got to henok_belays profile')}>
                  <View style = {{width: 30, height:30, borderRadius:20, backgroundColor: '#666', marginRight:10}}></View>
                  <Text style={{color: '#fff'}}>Henok_Belay</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress ={() => console.log('open menu for post 2')}>
                <Text style={{color:'#fff', fontSize:20}}>...</Text>
              </TouchableOpacity>
            </View>
            {/*Post Image */}
            <View style = {{width: '100%', height :400, backgroundColor: '#333'}}>
              <Text style ={{color:'#666'}}>Image Placeholder</Text>

            </View>

            {/* Action Buttons*/}
            <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style ={{padding:10, gap:15, flexDirection: 'row'}}>
                <TouchableOpacity onPress = {()=> setPost2Liked(!post2Liked)}>
                  <Text style ={{color: '#fff', fontSize: 24}}>{post2Liked?'❤️' : '🤍'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=>console.log('comment on post 2')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=> console.log('share post 2')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>📤</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress ={()=> setPost2Bookmarked(!post2Bookmarked)}>
                <Text style={{ color: '#fff', fontSize: 24 }}>{post2Bookmarked? '🔖' : '📑'}</Text>
              </TouchableOpacity>
            </View>

            {/* Like count*/}
            <View style ={{paddingLeft:10, marginBottom:5}}>
              <Text style = {{color :'#fff'}}>{post2Liked? 128 : 127} likes</Text>
            </View >

              {/* comment View */}
            <View style ={{paddingLeft:10, marginBottom: 5}}>
              <TouchableOpacity onPress = {() => console.log('view comments')}>
                <Text style={{color:'#888',  fontSize:13}}> view all 12 comments</Text>
              </TouchableOpacity>

            </View>

            <View style ={{padding:10}}>

              {/* caption*/}
              {/* */}
            <Text style={{color:'#fff'}}>
              <Text style={{fontWeight: 'bold'}}>Henok_belay</Text> This is my first post!

            </Text>
            <View style={{paddingLeft:10}}>
              <Text style ={{color:'#666', fontSize:11}}>5 hours ago</Text>
            </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
