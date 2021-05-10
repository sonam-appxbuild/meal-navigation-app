import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
import Colors from '../constants/Colors';
import { CATERGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props =>{

    const renderMealItems = itemData =>{
        return(
            <MealItem title={itemData.item.title} 
            onSelectMeals={()=>{}}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            imageUrl={itemData.item.imageUrl}/>
        )
    }

    const catId = props.navigation.getParam('categoryId')

    // const selectedCategory = CATERGORIES.find(cat => cat.id === catId)

    const displayMeal = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0);

    return(
        <View style={styles.screen}>
            <FlatList data={displayMeal} 
            keyExtractor={(item, index)=> item.id} 
            renderItem={renderMealItems}
            style={{width: '100%'}}/>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData =>{
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATERGORIES.find(cat=> cat.id === catId);
    return{
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
})

export default CategoryMealsScreen