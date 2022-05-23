import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from "./Navbar"
import AllInventory  from "./AllInventory";
import InventoryForm  from "./InventoryForm";
import AddItem from './AddItem';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {


    return (
    <Router>
          <div>
            <Navbar />
            <main>
              <div>
                <Route exact path = "/inventory" component = { AllInventory } />
                <Route exact path = "/add-product" component = { AddItem } />
                <Route exact path = "/edit-product/:name" component = { InventoryForm } />
              </div>
            </main>
          </div>
        </Router>
    )
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
