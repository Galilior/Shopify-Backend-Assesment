import axios from 'axios';

const SET_INVENTORY = 'SET_INVENTORY'
const ADD_INVENTORY = 'ADD_INVENTORY'
const REMOVE_INVENTORY = "REMOVE_INVENTORY"
const UPDATE_INVENTORY = 'UPDATE_INVENTORY'

export const setInventory = (stock) => ({
    type: SET_INVENTORY,
    stock
})

export const addInventory = (stock) => ({
    type: ADD_INVENTORY,
    stock
})

export const _deleteInventory = (stock) => ({
    type: REMOVE_INVENTORY,
    stock
  })
 
  export const _updateInventory = (stock) => ({
    type: UPDATE_INVENTORY,
    stock
  })

export const fetchInventory = () => {
    return async (dispatch) => {
        try {
            const { data: inventory } = await axios.get('/api/stock');
            dispatch(setInventory(inventory));
        } catch (err) {
            console.log(err);
        }
    }
}

export const createInventory = (stock, history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/api/stock', stock);
            dispatch(addInventory(data));
            //history.push('/stock');
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteInventory = (name, history) => {
    return async (dispatch) => {
        try { const { data: stock } = await axios.delete(`/api/stock/${name}`);
        dispatch(_deleteInventory(stock));
        //history.push('/');
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateCampus = (name, history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`/api/stock/${name}`);
            dispatch(_updateInventory(data));
            //history.push('/')
        } catch (err) {
            console.log(err);
        }
    }
}

export default function inventoryReducer (state = [], action) {
    switch (action.type) {
        case SET_INVENTORY:
            return action.stock;
        case ADD_INVENTORY:
            return [...state, action.stock];
        case REMOVE_INVENTORY:
            return state.filter(stock => {
                return stock.name !== action.stock.name;
            });
        case UPDATE_INVENTORY:
            return state.map((stock) => {
                return stock.name === action.stock.name ? action.stock : stock});
        default:
            return state;
    }
}