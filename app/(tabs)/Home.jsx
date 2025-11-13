// Home.js
import React, { useState,useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View , RefreshControl, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';



export default function Home({route}) {
  const navigation = useNavigation();
  const {user} = route.params || {};
  const [postLiked, setPostLiked] = useState(false);
  const [post2Liked, setPost2Liked] = useState(false);
  const [post3Liked, setPost3Liked] =useState(false);
  const [post1Bookmarked, setPost1Bookmarked] = useState(false);
  const [post2Bookmarked, setPost2Bookmarked] = useState(false);
  const [post3Bookmarked, setPost3Bookmarked] = useState(false);
  const[refreshing, setRefreshing]= useState(false);
  const [lastTap, setLastTap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState ([1,2,3,4]);

  const onRefresh = () => {
    setRefreshing(true);
    console.log ('refreshing feed...');
    setTimeout(() => {
      setRefreshing(false);
    }, 2000)
  }
  useEffect(() => {
    console.log ('Home screen loaded');
    console.log('Logged in user:', user);
  },[])
  return (
    
    //SafeAreaView makes sure your content doesn’t overlap the phone’s notch, status bar, or home indicator—it keeps your UI inside the “safe” visible area.
    <SafeAreaView style = {{flex:1, backgroundColor:'#000'}}>

  

      
        <View style ={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between', padding:15,borderBottomWidth:1, borderBottomColor: '#333'}}>
          <TouchableOpacity onPress ={() => console.log ('scroll to toop')}>
            <Text style ={{ color:'#fff',fontSize: 24}}>Instagram</Text>
          </TouchableOpacity>
          <View style ={{flexDirection:'row'}}>
            <TouchableOpacity onPress ={() => console.log('Notifications')}>
              <Text style ={{ color: '#fff', fontSize: 24, marginRight: 15}}>🤍</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> console.log('Messages')}>
              <Text style ={{ color: '#fff', fontSize: 24}}>💬</Text>
            </TouchableOpacity>
        
          </View>  
        </View>

      <ScrollView style={{flex:1}} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh ={onRefresh} tintColor ="#fff" />
      }> 
        {/* Post Container*/}
          <View style ={{marginBottom: 20}}>
          <View style={{ height: 130, backgroundColor: '#000', borderBottomWidth: 1, borderBottomColor: '#333', paddingVertical: 10, paddingHorizontal: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height:100, backgroundColor: '#000', borderBottomWidth: 1, borderBottomColor: '#333' }} contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}>

            <TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }} onPress ={() => console.log('creat a story')}>
            <View style ={{alignItems:'center', marginRight:10}}>
              <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 65, height: 65, borderRadius: 33, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center' }}>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderRadius: 10, backgroundColor: '#1DA1F2', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: 16 }}>+</Text>
                </View>
              </View>
              <Text style={{ color: '#fff', fontSize: 11, marginTop: 5 }}>{user?.userName || 'your story'}</Text>
            </View>

            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }} onPress={() => console.log('View henok story')}>
            <View style ={{ alignItems: 'center', marginRight: 10}}>
              <View style={{width:70, height:70, borderRadius:35,borderWidth:2, borderColor: '#c13584', justifyContent:'center' , alignItems:'center'}}>
                <View style ={{width : 65, height:65, borderRadius:33, backgroundColor:'#666'}}>

                </View>
              </View>
              <Text style ={{color: '#fff', fontZize:11,marginTop:5}}>Henok_belay</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }} onPress={() => console.log('View tina story')}>
            <View style ={{ alignItems: 'center', marginRight: 10}}>
              <View style={{width:70, height:70, borderRadius:35,borderWidth:2, borderColor: '#c13584', justifyContent:'center' , alignItems:'center'}}>
                <View style ={{width : 65, height:65, borderRadius:33, backgroundColor:'#666'}}>

                </View>
              </View>
              <Text style ={{color: '#fff', fontZize:11,marginTop:5}}>Tina_belay</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }} onPress={() => console.log('View tino story')}>
            <View style ={{ alignItems: 'center', marginRight: 10}}>
              <View style={{width:70, height:70, borderRadius:35,borderWidth:2, borderColor: '#c13584', justifyContent:'center' , alignItems:'center'}}>
                <View style ={{width : 65, height:65, borderRadius:33, backgroundColor:'#666'}}>

                </View>
              </View>
              <Text style ={{color: '#fff', fontZize:11,marginTop:5}}>tino_belay</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }} onPress={() => console.log('View Haile story')}>
            <View style ={{ alignItems: 'center', marginRight: 10}}>
              <View style={{width:70, height:70, borderRadius:35,borderWidth:2, borderColor: '#c13584', justifyContent:'center' , alignItems:'center'}}>
                <View style ={{width : 65, height:65, borderRadius:33, backgroundColor:'#666'}}>

                </View>
              </View>
              <Text style ={{color: '#fff', fontZize:11,marginTop:5}}>Haile_belay</Text>
            </View>
            </TouchableOpacity>
            
            </ScrollView>
          </View>  
          {loading && (
            <View style={{ padding: 20, alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}

          {!loading && posts.length === 0 && (
            <View style={{ padding: 40, alignItems: 'center' }}>
              <Text style={{ color: '#666', fontSize: 16 }}>No posts yet</Text>
              <Text style={{ color: '#666', fontSize: 14, marginTop: 10 }}>Follow people to see their posts</Text>
            </View>
          )}
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
            <TouchableOpacity activeOpacity ={1} onPress = {() => {
              const now = Date.now();
              const DOUBLE_PRESS_DELAY = 300; //MILLOSECONDS

              if(lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY){
                if(!postLiked){
                  setPostLiked(true);
                  }
                } else {
                  setLastTap(now);
                }

              }
            }>
            <View style = {{width: '100%', height :400, backgroundColor: '#333'}}>
              <Text style ={{color:'#666'}}>Image Placeholder</Text>

            </View>
            </TouchableOpacity>

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
            <TouchableOpacity activeOpacity ={1} onPress = {() => {
              const now = Date.now();
              const DOUBLE_PRESS_DELAY = 300;

              if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY){
              if (!post2Liked){
              setPost2Liked(true);
            }
          }else {
            setLastTap(now);
          }
          }}>
            <View style = {{width: '100%', height :400, backgroundColor: '#333'}}>
              <Text style ={{color:'#666'}}>Image Placeholder</Text>

            </View>

            </TouchableOpacity>

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

          {/* third Post*/}
          {/* Post Container*/}
          <View style ={{marginBottom: 20}}>
            {/* username*/}
            <View style ={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <View style ={{padding: 10, flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress = {()=>('got to henok_belays profile')}>
                  <View style = {{width: 30, height:30, borderRadius:20, backgroundColor: '#666', marginRight:10}}></View>
                  <Text style={{color: '#fff'}}>Tinsae_belay</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress ={() => console.log('open menu for post 3')}>
                <Text style={{color:'#fff', fontSize:20}}>...</Text>
              </TouchableOpacity>
            </View>
            {/*Post Image */}
            <TouchableOpacity activeOpacity ={1} onPress = {() => {
                const now = Date.now();
                const DOUBLE_PRESS_DELAY = 300;

                if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY){
                if (!post3Liked){
                setPost3Liked(true);
              }
            }else {
              setLastTap(now);
            }
            }}>
            <View style = {{width: '100%', height :400, backgroundColor: '#333'}}>
              <Text style ={{color:'#666'}}>Image Placeholder</Text>

            </View>
            </TouchableOpacity>

            {/* Action Buttons*/}
            <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style ={{padding:10, gap:15, flexDirection: 'row'}}>
                <TouchableOpacity onPress = {()=> setPost3Liked(!post3Liked)}>
                  <Text style ={{color: '#fff', fontSize: 24}}>{post3Liked?'❤️' : '🤍'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=>console.log('comment on post 2')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=> console.log('share post 2')}>
                  <Text style ={{color: '#fff', fontSize: 24}}>📤</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress ={()=> setPost3Bookmarked(!post3Bookmarked)}>
                <Text style={{ color: '#fff', fontSize: 24 }}>{post3Bookmarked? '🔖' : '📑'}</Text>
              </TouchableOpacity>
            </View>

            {/* Like count*/}
            <View style ={{paddingLeft:10, marginBottom:5}}>
              <Text style = {{color :'#fff'}}>{post3Liked? 203 : 202} likes</Text>
            </View >

              {/* comment View */}
            <View style ={{paddingLeft:10, marginBottom: 5}}>
              <TouchableOpacity onPress = {() => console.log('view comments')}>
                <Text style={{color:'#888',  fontSize:13}}> view all 34 comments</Text>
              </TouchableOpacity>

            </View>

            <View style ={{padding:10}}>

              {/* caption*/}
              {/* */}
            <Text style={{color:'#fff'}}>
              <Text style={{fontWeight: 'bold'}}>Tinsae_belay</Text> Weekend vibes! 🎉

            </Text>
            <View style={{paddingLeft:10}}>
              <Text style ={{color:'#666', fontSize:11}}>1 day ago</Text>
            </View>
            </View>
          </View>
          <View style ={{height:20}}></View>
      </ScrollView>
      <View style = {{flexDirection:'row',borderTopWidth:1, borderTopColor:'#333', paddingVertical:10 }}>
        <TouchableOpacity style ={{flex:1, alignItems:'center'}} onPress ={() => console.log("Home")}>
          <Text style ={{color:'#fff', textAlign:'center', fontSize: 24}}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{flex:1, alignItems:'center'}} onPress ={() => console.log ('search')}>
          <Text style={{ color: '#fff', flex:1, textAlign: 'center', fontSize: 24 }}>🔍</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{flex:1, alignItems:'center'}} onPress ={() => navigation.navigate('CreatePost')}>
          <Text style={{ color: '#fff', flex:1, textAlign: 'center', fontSize: 24 }}>➕</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{flex:1, alignItems:'center'}} onPress ={()=>console.log('Reels')}>
          <Text style={{ color: '#fff', flex: 1, textAlign: 'center', fontSize: 24 }}>🎬</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{flex:1, alignItems:'center'}} onPrss ={()=> ('profile')}>
        <View style ={{flex:1, alignItems:'center'}}>
          <View style ={{width:25, height:25, borderRadius:15, backgroundColor:'#666'}}></View>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
