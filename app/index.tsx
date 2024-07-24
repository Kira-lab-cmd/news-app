import { Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import news_data from './../news_data.json';
import NewsCard from './NewsCards/component/NewsCard';
import news_banner_data from './../news_banner_data.json';
import BannerNews from "./BannersNews/component/BannerNews";
export default function Index() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <BannerNews banner={news_banner_data} />
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
    marginBottom: 12,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
  }
})