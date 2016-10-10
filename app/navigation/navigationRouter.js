import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Styles from './style/navigationContainerStyle'
import NavigationDrawer from './navigationDrawer'
import NavItems from './navItems'

// screens identified by the router
import HomeScreen from '../container/homeScreen'
import NewExpenseScreen from '../container/newExpenseScreen'
import ExpensesListScreen from '../container/expensesListScreen'
import SettingsScreen from '../container/settingsScreen'

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='homeScreen' component={HomeScreen} title='Home' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='newExpenseScreen' component={NewExpenseScreen} title='New' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='expensesListScreen' component={ExpensesListScreen} title='List' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='settingsScreen' component={SettingsScreen} title='Settings' renderLeftButton={NavItems.hamburgerButton} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
