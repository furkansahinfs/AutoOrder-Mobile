import * as React from 'react';
import {ProfilePage} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigation.style';
import {useTheme} from '../theme';
import {I18N} from '../locales';

const Tab = createBottomTabNavigator();

function MainPageTabs() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: '#95a5a6',
        keyboardHidesTabBar: false,
        showLabel: false,
        style: [styles.bottomBar, {backgroundColor: colors.background}],
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('profile'),
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPageTabs;
