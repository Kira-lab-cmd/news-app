import { Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './bannerNews.style'

export default function bannerNews({ banner }) {
    console.log(banner);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {
                banner.map(banners => (
                    <Image key={banners.id} style={styles.bannerNews} source={{ uri: banners.imageUrl }} />
                ))
            }
        </ScrollView >
    )
}


