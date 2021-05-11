import React from 'react';
import { Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATERGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={CATERGORIES}
            renderItem={renderGridItem}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default CategoriesScreen