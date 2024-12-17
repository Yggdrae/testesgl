import ArtifactListItem from "@/components/ui/ArtifactListItem/ArtifactListItem";
import { View, StyleSheet, FlatList } from "react-native";

export default function Home() {
    const artifacts = [
        {
            id: 1,
            name: 'Rock that looks like a face rock',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/f/f7/S1e1_rock_that_looks_like_a_face_rock.png/revision/latest?cb=20120619063907',
            price: 200,
        },
        {
            id: 2,
            name: 'Sascrotch\n\n',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/f/f9/S1e1_sascrotch.png/revision/latest?cb=20120619043710',
            price: '1,000',
        },
        {
            id: 3,
            name: 'Sack of Mystery',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/6/6b/S1e4_sack_of_mystery.png/revision/latest?cb=20160210170850',
            price: 50,
        },
        {
            id: 4,
            name: "Six-pack O' Lope",
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/b/b5/S1e13_six_pack_a_lope.png/revision/latest?cb=20130405054351',
            price: 800,
        },
        {
            id: 5,
            name: 'Fairy',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/f/f8/Short14_fairy.png/revision/latest?cb=20140609012543',
            price: 600,
        },
        {
            id: 6,
            name: 'The Invisible Man',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/7/79/Short14_invisible_man.png/revision/latest?cb=20140609012559',
            price: '1,000,000',
        },
        {
            id: 7,
            name: 'Unknown',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/d/d3/S2e6_crime_against_nature.png/revision/latest?cb=20141006072114',
            price: '1,000,000'
        },
        {
            id: 8,
            name: 'Crystal Ball',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/2/2d/S1e18_crystal_ball.png/revision/latest?cb=20130624064152',
            price: 700
        },
        {
            id: 9,
            name: 'Outhouse of Mystery',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/d/df/S1e18_out_house.png/revision/latest?cb=20160402192254',
            price: '???',
        },
        {
            id: 10,
            name: 'Horned turtle skeleton',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/4/42/S1e11_turtle_table.png/revision/latest?cb=20121012003117',
            price: '500?',
        },
        {
            id: 11,
            name: 'Thigh-clops',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/5/5a/S2e5_thighclops.png/revision/latest?cb=20140924044539',
            price: '?????'
        },
        {
            id: 12,
            name: 'Fiji Mermaid',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/b/ba/S1e5_mermaid.png/revision/latest?cb=20121008040520',
            price: '1,500,000'
        },
        {
            id: 13,
            name: 'Journal 1',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/b/b0/S2e11_journal_1.png/revision/latest/scale-to-width-down/1000?cb=20150311200613',
            price: '1,000,000,000,000'
        },
        {
            id: 14,
            name: 'Journal 2',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/a/a8/S1e4_book_2.png/revision/latest?cb=20130821064947',
            price: '1,000,000,000,000'
        },
        {
            id: 15,
            name: 'Journal 3',
            img: 'https://static.wikia.nocookie.net/gravityfalls/images/a/ae/S1e20_Secrets....png/revision/latest?cb=20130805194825',
            price: '1,000,000,000,000'
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={artifacts}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ArtifactListItem artifact={item} />}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        padding: 10,
    },
});
