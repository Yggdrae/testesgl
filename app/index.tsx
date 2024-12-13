import { View, Text, StyleSheet } from "react-native";

export default function (){
    return (
        <View>
            <Text style={style.text} >Hello World</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        color: '#242424',
        fontSize: 30,
        textAlign: 'center',
    },
})