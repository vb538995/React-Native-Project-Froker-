import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const NUM_POSTS_PER_ROW = 2; // Number of posts to render in each row

const DUMMY_POSTS = [
    { 
        image: require('@/assets/post1.jpg'), 
        caption: 'This is a post!' 
    },
    { 
        image: require('@/assets/post1.jpg'), 
        caption: 'This is a post!' 
    },
    { 
        image: require('@/assets/post1.jpg'), 
        caption: 'This is a post!' 
    },
    { 
        image: require('@/assets/post1.jpg'), 
        caption: 'This is a post!' 
    },
    
    

  // Add objects here with properties like: { image: require('./assets/post1.jpg'), caption: 'This is a post!' }
  // Ensure you have at least 20 dummy posts
];

const Demo = () => {
    const renderPost = ({ item, index }) => {
      const isLastInRow = (index + 1) % NUM_POSTS_PER_ROW === 0; // Check if last post in a row (or the very last post)
  
      return (
        <View style={[styles.post, isLastInRow && styles.postLastInRow]}>
          <Image source={item.image} style={styles.postImage} />
        </View>
      );
    };

// const Demo= () => {
//   const renderPost = ({ item, index }) => {
//     const rowNumber = Math.floor(index / NUM_POSTS_PER_ROW); // Calculate the row number
//     const isLastInRow = index % NUM_POSTS_PER_ROW === NUM_POSTS_PER_ROW - 1; // Check if last post in a row

//     return (
//       <View style={[styles.post, isLastInRow && styles.postLastInRow]}>
//         <Image source={item.image} style={styles.postImage} />
//       </View>
//     );
//   };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('@/assets/profilePicture.jpg')} style={styles.profileImage} />
        <View style={styles.infoContainer}>
           
          <View style={styles.stats}>
            <View style={styles.sta}>
              <Text style={styles.stat}>7</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.sta}>
              <Text style={styles.stat}>123</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.sta}>
              <Text style={styles.stat}>121.7k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>
          
        </View>
      </View>
      <Text style={styles.name}>Vaibhav Kumar Bhardwaj</Text>  
        <Text style={styles.bio}>Accept your Mistakes and forgive the Rest.........</Text>
      <View style={styles.postCountSection}>
        <Text style={styles.postCount}>100 Posts</Text>
      </View>
      <FlatList
        data={DUMMY_POSTS}
        // numColumns={NUM_POSTS_PER_ROW}
        horizontal={true}
        showshorizontalScrollIndicator={false}
        keyExtractor={(item) => item.caption}
        renderItem={renderPost}
        style={styles.postsList}
      />
    </View>
  );

//   return (
//     <View style={styles.container}>
//       <View style={styles.topSection}>
//         <Image source={require('@/assets/profilePicture.jpg')} style={styles.profileImage} />
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>John Doe</Text>  
//           <Text style={styles.bio}>This is a short bio about the user.</Text>  
//           <View style={styles.stats}>
//             <View style={styles.sta}>
//               <Text style={styles.stat}>100</Text>
//               <Text style={styles.statLabel}>Posts</Text>
//             </View>
//             <View style={styles.sta}>
//               <Text style={styles.stat}>500</Text>
//               <Text style={styles.statLabel}>Following</Text>
//             </View>
//             <View style={styles.sta}>
//               <Text style={styles.stat}>1000</Text>
//               <Text style={styles.statLabel}>Followers</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.postCountSection}>
//         <Text style={styles.postCount}>100 Posts</Text>
//       </View>
//       <FlatList
//         data={DUMMY_POSTS}
//         numColumns={NUM_POSTS_PER_ROW} // Set number of columns
//         keyExtractor={(item) => item.caption}
//         renderItem={renderPost}
//         style={styles.postsList}
//       />
//     </View>
//   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topSection: {
      marginTop:90,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 20,
    },
    infoContainer: {
      marginLeft:4,
      flex: 1,
    },
    name: {
      marginTop:9,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 1,
      marginLeft:15,
    },
    bio: {
      marginLeft:15,
      marginTop:6,
      color:'white',
      fontSize: 14,
      marginBottom: 1,
    },
    stats: {
      flexDirection: 'row',
    },
    sta: {
      marginLeft: 20, // Adjust margin for spacing between stats
    },
    stat: {
      color: 'white',
      fontSize: 20,
      marginRight: 10,
    },
    statLabel: {
      fontSize: 12,
      color: '#aaa',
    },
    postCountSection: {
        
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    postCount: {
        
      fontSize: 18,
    },
    postsList: {
    
      flex: 1,
      
    },
    post: {
      flex:1,
      padding: 10,
      marginRight: 10,
      maxWidth:'50%',
    },
    postLastInRow:{
        marginRight:0,
    },
    postImage: {
      width: 150,
      height: 150,
    },
});

export default Demo;