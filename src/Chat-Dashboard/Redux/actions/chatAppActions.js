import { FETCH_USERS,ADD_USER,SET_SELECTED_USER,SAVE_MESSAGES, SHOW_MODAL,DELETE_USER} from '../actionTypes/chatAppActionTypes';
import axios from 'axios';
  
  
  export function getUsers(users) {
    return {
      type: FETCH_USERS,
      users,
    };
  }

  export function updateShowModal() {
    return {
      type: SHOW_MODAL,
    }
  }
  
  export function storeUser(user) {
    return {
      type: ADD_USER,
      user,
    };
  }
  
  export function setUser(id) {
    
    return {
      type:SET_SELECTED_USER,
      id,
    };
  }  
  
  export function storeMessage(msg) {
    return {
      type: SAVE_MESSAGES,
      msg,
    };
  }

  
  // when clicking users we are setting as current user
  export function setCurrentUser(dispatch, id) {
    
    dispatch(setUser(id));
  }
  
  //save messages to the list
  export function saveMessage(dispatch, msgObj) {
    dispatch(storeMessage(msgObj));
  }

// adding user to the list
export const saveUser = (dispatch, user) => {
  dispatch(storeUser(user));
};


//Changing showModel boolean value
export function changeShowModal(dispatch) {
  
  dispatch(updateShowModal())
}


  

// fetching users data
  export const fectUsersDataFromApi = (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          
          dispatch(getUsers(response.data));
        })
        .catch((error) => {
          console.log(error)
        })
       
    });
  };