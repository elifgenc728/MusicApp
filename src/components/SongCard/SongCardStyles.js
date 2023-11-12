import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection:'row',
    },
    image: {
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container: {
        padding:10,
        flex:1,
        justifyContent:'center'
    },
    title: {
    fontWeight:'bold',
    fontSize:22,
    color:'black'
    },
    info_container: {
        flexDirection:'row',
        alignItems:'baseline',
        flex:1
    },
    artist:{
        color:'black',
        fontSize:15
    },
    year: {
        marginLeft:10,
        fontWeight:'bold',
        color:'grey',
        fontSize:12
        
    },
    soldout_title:{
        color:'red',
        fontSize:12,
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    content_container:{
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'space-between'
    }

})