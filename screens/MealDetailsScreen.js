import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories!!" onPress={() => {

                // pop is only used in stack navigator and goBack() is used everywhere
                props.navigation.popToTop();
                // props.navigation.goBack()
            }} />
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData =>{
    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return{
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title="Favourite"
                iconName="ios-star"
                onPress={()=>{
                    console.log("Mark as Favourite");
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailsScreen