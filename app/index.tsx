import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import news_data from './../news_data.json';
import NewsCard from './NewsCards/component/NewsCard';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>News App</Text>
        <FlatList
          data={news_data}
          renderItem={({ item }) => < NewsCard news={item} />}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
  },
})