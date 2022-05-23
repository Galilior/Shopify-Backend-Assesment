import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = () => {

  return (
    <div>
      <h3>Welcome!</h3>
      <p>Take a look at the inventory and feel free to play around with the items</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
