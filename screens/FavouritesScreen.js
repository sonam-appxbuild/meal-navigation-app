import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>This is a Favourites Screen..</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FavouritesScreen