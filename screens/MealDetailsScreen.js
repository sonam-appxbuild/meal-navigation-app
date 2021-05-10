import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is a Meal Details Screen..</Text>
            <Button title="Go Back to Categories!!" onPress={() => {

                // pop is only used in stack navigator and goBack() is used everywhere
                props.navigation.popToTop();
                // props.navigation.goBack()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailsScreen