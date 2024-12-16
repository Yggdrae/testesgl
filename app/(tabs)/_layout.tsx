import { Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown: false, title: "Home", tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" size={24} color="black" />)}}    />
            <Tabs.Screen name="user" options={{headerShown: false, title: "You", tabBarIcon: ({color, size}) => (<AntDesign name="user" size={24} color="black" />)}} />
        </Tabs>
    )
}