import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBarStyles';

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
        <TextInput placeholder="Ara..." style={styles.placeholder_text} onChangeText={props.onSearch}/>
    </View>
    );
    
};
 export default SearchBar;