import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { View, Text, StyleSheet } from "react-native";

export default function user(){
    return (
        <View style={style.container}>
            <Box style={style.boxUser}>
                <Avatar size="xl" style={style.avatar}>
                    <AvatarFallbackText>Bill Cipher</AvatarFallbackText>
                        <AvatarImage
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Bill_Cipher.webp/285px-Bill_Cipher.webp.png',
                        }}
                        />
                </Avatar>
                <Text style={style.title}>Bill Cipher</Text>

                <Button size="md" variant="outline" action="primary" style={style.button}>
                    <ButtonText>Edit Info</ButtonText>
                </Button>
            </Box>

            <Box style={style.box}>
                <Button variant="outline" style={style.options}><ButtonText>My orders</ButtonText></Button>
                <Button variant="outline" style={style.options}><ButtonText>Wishlist</ButtonText></Button>
                <Button variant="outline" style={style.options}><ButtonText>History</ButtonText></Button>
                <Button variant="outline" style={style.options}><ButtonText>Help</ButtonText></Button>
            </Box>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignContent: "center",
        alignSelf: 'center',
    },
    boxUser: {
        flex: 1,
        width: '100%',
        maxHeight: '30%',
        flexDirection: 'column',
        alignContent: "center",
        marginBottom: 10,
        alignSelf: 'center',
        backgroundColor: '#efefef',
        paddingTop: 30
    },
    title: {
        color: '#242424',
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center'
    },
    avatar: {
        alignSelf: 'center'
    },
    label: {
        fontSize: 20,
        textAlign: 'center',
        color: '#242424',
    },
    button: {
        width: '70%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20
    },
    options: {
        width: '101%',
        alignSelf: 'center',
        marginTop: 10,
    }
})