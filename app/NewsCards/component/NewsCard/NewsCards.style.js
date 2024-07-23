import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,


    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        marginBottom: 10
    },
    title: {
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 'bold'
    },
    description: {
        marginBottom: 10,
        marginLeft: 10
    }
})
