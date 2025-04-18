import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchMoviesRequest } from '../../store/movie/movieSlice';
import Colors from '../../constants/colors';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesRequest());
    console.log('movies', movies);
    
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading movies...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
            style={styles.poster}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  card: {
    padding: 10, borderBottomWidth: 1, borderColor: '#ccc', flexDirection: 'row', alignItems: 'center',
  },
  poster: {
    width: 80, height: 120, marginRight: 10,
  },
  title: {
    fontSize: 16, flexShrink: 1,
  },
});


export default WeatherScreen