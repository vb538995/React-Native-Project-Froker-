import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';


const DUMMY_PROFILES = [
    { 
    name: 'Vaibhav Kumar Bhardwaj', 
    image: require('@/assets/profile1.jpg') 
    }
  
];

const DUMMY_POSTS = [
    { 
    user: 'Aman Kumar', 
    image: require('@/assets/post1.jpg'), 
    caption: 'My Friend Earn a LeetCode badge for 50 Days of solving programing questions.Congratulations Vaibhav ' 
    }
  
];

const DUMMY_SUGGESTIONS = [
    { 
        name: 'Aman Kumar', 
        image: require('@/assets/profile2.jpg') }
  
];

const Homepage = ({ navigation }) => {
  const renderTopStory = ({ item }) => (
    <View style={styles.topStory}>
      <Image source={item.image} style={styles.profileImage} />
      <Text style={styles.topStoryText}>{item.name}</Text>
    </View>
  );


  
  const renderPost = ({ item }) => (
    <View style={styles.post}>
  <Image source={item.image} style={[styles.postImage,{resizeMode: 'contain'}]} />
  <View style={styles.postContent}>
    <Text style={styles.postCaption}>{item.user}: {item.caption}</Text>
  </View>
</View>
    
  );

  const renderSuggestion = ({ item }) => (
    <View style={styles.suggestion}>
      <Image source={item.image} style={styles.profileImage} />
      <Text style={styles.suggestionText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_PROFILES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={renderTopStory}
        style={styles.topStoryList}
      />
      <FlatList
        data={DUMMY_POSTS}
        keyExtractor={(item) => item.caption}
        renderItem={renderPost}
      />
      <Text style={styles.sectionHeader}>Profile Suggestions</Text>
      <FlatList
        data={DUMMY_SUGGESTIONS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={renderSuggestion}
        style={styles.suggestionsList}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('@/assets/profileIcon.png')} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topStoryList: {
    marginTop: 20,
  },
  topStory: {
    marginTop: 10,
    padding: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  topStoryText: {
    fontSize: 16,
  },
  post: {
    padding: 2,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postImage: {
    width: '100%',
    height: '100',
    aspectRatio: 0.5, 
  },
  postCaption: {
    color:'white',
  },
  postContent: {
    flex: 1,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  suggestionsList: {
    marginBottom: 20,
  },
  suggestion: {
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default Homepage;
