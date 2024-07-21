import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const NUM_POSTS_PER_ROW = 2; // Number of posts to render in each row

const DUMMY_POSTS = [
  { image: require('@/assets/post1.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post2.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post3.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post4.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post5.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post6.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post7.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post8.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post9.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post1.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post2.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post3.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post4.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post5.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post6.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post7.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post8.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post9.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post1.jpg'), caption: 'This is a post!' },
  { image: require('@/assets/post2.jpg'), caption: 'This is a post!' },
];

const Dmm = () => {
  const renderPost = ({ item }) => {
    return (
      <View style={styles.post}>
        <Image source={item.image} style={styles.postImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('@/assets/profilePicture.jpg')} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          <View style={styles.stats}>
            <View style={styles.sta}>
              <Text style={styles.stat}>20</Text>
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
        <Text style={styles.postCount}></Text>
      </View>
      <FlatList
        data={DUMMY_POSTS}
        numColumns={NUM_POSTS_PER_ROW}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPost}
        contentContainerStyle={styles.postsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topSection: {
    marginTop: 90,
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
    marginLeft: 4,
    flex: 1,
  },
  name: {
    marginTop: 9,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    marginLeft: 15,
  },
  bio: {
    marginLeft: 15,
    marginTop: 6,
    color: 'white',
    fontSize: 14,
    marginBottom: 1,
  },
  stats: {
    flexDirection: 'row',
  },
  sta: {
    marginLeft: 20, 
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
    color: 'white',
  },
  postsList: {
    paddingHorizontal: 5,
  },
  post: {
    flex: 1,
    margin: 5,
  },
  postImage: {
    width: '100%',
    height: 150,
  },
});

export default Dmm;