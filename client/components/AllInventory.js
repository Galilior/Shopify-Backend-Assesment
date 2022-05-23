import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getInventory, deleteInventory } from "../redux/inventory"

class AllInventory extends React.Component {

  componentDidMount(){
    try {
      this.props.getInventory()
    } catch (err){
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {
          this.props.inventory.map(item => {
            return (
              <div key = {item.id}>
                <Link to = {`/inventory/${item.name}`}>
                  <h1>{item.name}</h1>
                {/* <img src = {student.imageUrl} style = {{width: '100px', height: '100px'}} /> */}
                </Link>
                <button
                  type = "button"
                  className = "delete-button"
                  onClick= {() => this.props.deleteStudent(item.name)}>
                    X
                </button>
              </div>
            );
        })
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    inventory: state.inventory,
  }
};

const mapDispatch = (dispatch) => ({
    getInventory: () => dispatch(getInventory()),
    deleteInventory: (name) => dispatch(deleteInventory(name))
});

export default connect(mapState, mapDispatch)(AllInventory);