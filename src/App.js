import React, {useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import music_data from './music_data.json' ;
import SongCard from './components/SongCard'
import SearchBar from "./components/SearchBar";

function App(){
    const [list,setList] = useState(music_data);
const renderSong = ({item})=> <SongCard song={item}/>
const renderSeperator = () => <View style={styles.seperator}/>
const handleSearch = text => {
    const filterList = music_data.filter(song => {
        const searchText = text.toLowerCase();
        const currentTitle = song.title.toLowerCase();

        return currentTitle.indexOf(searchText) > -1;   
    });
    setList(filterList)

};

    return(
   <SafeAreaView style = {styles.container}>
        
    <SearchBar onSearch={handleSearch}/>
    <FlatList  
    keyExtractor={item => item.id}
    data = {list}
    renderItem={renderSong}
    ItemSeparatorComponent={renderSeperator}
    />
   </SafeAreaView>
    )
}
export default App;

const styles = StyleSheet.create({
    container:  {flex :1},
    seperator:{
        borderWidth:1,
        borderColor:'#e0e0e0'
    }
})