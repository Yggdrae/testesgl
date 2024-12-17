import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from '@/components/ui/image';
import { VStack } from "@/components/ui/vstack";

export default function Home(){
    return (
        <View style={style.container}>
            <Image size="full" source={'https://images5.alphacoders.com/852/852217.jpg'} alt="Shack Shop" />
            <VStack className="" space="lg" position="absolute" h="100%" justifyContent="flex-end">
                <Card className="p-5 rounded-xl max-w-[300px] min-h-[450px] m-3 bg-white/80">
                        <Image
                            source={{
                            uri: 'https://img1.picmix.com/output/stamp/normal/6/2/6/3/2663626_26b29.png',
                            }}
                            className="mb-6 h-[150px] w-full rounded-md aspect-[263/240] self-center"
                            alt="image"
                        />
                        <Text style={style.label}>Username</Text>

                        <Input 
                        style={style.input} 
                        size="md" 
                        className="max-w-[250px] m-top-5"
                        variant='underlined'
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                            <InputField type="text" autoComplete="email" keyboardType="email-address"/>
                        </Input>

                        <Text style={style.label}>Password</Text>

                        <Input 
                        style={style.input} 
                        size="md"
                        className="max-w-[250px]"
                        variant='underlined'
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                            <InputField type="password" autoCapitalize="none"/>
                        </Input>

                        <Button style={style.button} variant="outline">
                            <Link href={"/home"}>
                                <ButtonText>Login</ButtonText>
                            </Link>
                        </Button>
                </Card>
                </VStack>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        textAlign: 'center',
        color: '#242424',
    },
    button: {
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
})