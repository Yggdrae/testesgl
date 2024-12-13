import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { View, Text, StyleSheet } from "react-native";

export default function (){
    return (
        <View style={style.container}>
            <Text style={style.title}>Testing screen</Text>

            <Box>
                <Text style={style.label}>Username</Text>

                <Input 
                style={style.input} 
                size="md" 
                variant='underlined'
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                    <InputField type="text"/>
                </Input>

                <Text style={style.label}>Password</Text>

                <Input 
                style={style.input} 
                size="md" 
                variant='underlined'
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                    <InputField type="password"/>
                </Input>

                <Button style={style.button} variant="outline"><ButtonText>Login</ButtonText></Button>
            </Box>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    title: {
        color: '#242424',
        fontSize: 30,
        textAlign: 'center',
        top: 0,
    },
    input: {
        width: 300,
        height: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
})