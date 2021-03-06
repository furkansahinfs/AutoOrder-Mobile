import * as React from 'react';
import { ConfigurationPage, MainPage, OrdersPage, ProfilePage } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigation.style';
import { useTheme } from '../theme';
import { I18N } from '../locales';

const Tab = createBottomTabNavigator();

function MainPageTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: '#95a5a6',
        keyboardHidesTabBar: false,
        showLabel: false,
        style: [styles.bottomBar, { backgroundColor: colors.background }],
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('tabbar.main'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={ConfigurationPage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('tabbar.configuration'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tools" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersPage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('tabbar.orders'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basket" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('tabbar.profile'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={styles.iconSize.height}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPageTabs;
