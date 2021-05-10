import { Platform } from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

const MealsNavigator = createStackNavigator ({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailsScreen
    },{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
    }
}
)
 
export default createAppContainer(MealsNavigator)