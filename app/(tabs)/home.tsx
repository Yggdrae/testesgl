import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { Image } from '@/components/ui/image';
import { View, StyleSheet, Text } from "react-native";

export default function home(){

    const artifacts = [{
        name: 'Rock that looks like a face rock',
        img: 'https://static.wikia.nocookie.net/gravityfalls/images/f/f7/S1e1_rock_that_looks_like_a_face_rock.png/revision/latest?cb=20120619063907',
        price: 200,
    }]

    return (
        <View style={style.container}>

            {artifacts.map((artifact) => {
                return (
                    <Box style={style.card}>
                        <Image
                        size="lg" 
                        source={{uri: artifact.img}}
                        alt={artifact.name}
                        style={style.image}
                        />
                        <Text>{artifact.name}</Text>
                    </Box>
                )
            })}
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: '0.5%'
    },
    card: {
        flex: 1,
        borderWidth: 1,
        width: '30%',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        alignSelf: 'center'
    }
})