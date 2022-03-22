import { FETCH_USERS,ADD_USER,SET_SELECTED_USER,SAVE_MESSAGES, SHOW_MODAL,DELETE_USER} from "../actionTypes/chatAppActionTypes";



const initialState = { users: [], user: {}, isShowModal:false};

//User reducer

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_USERS:
        return {
          ...state,
          users: action.users.map((user) => ({
            id: user.id,
            name: user.name,
            messages: [],
          })),
          user: {
            id: action.users[0].id,
            name: action.users[0].name,
            messages: [],
          },
        };

        case SHOW_MODAL: 

        return {
          ...state,
          isShowModal: !state.isShowModal
        }
      
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.user],
          user: { ...state.user },
        };

  
      case SET_SELECTED_USER:
    
        return {
          ...state,
          users: [...state.users],
          user: state.users.find((user) => user.id === action.id),
        };
  
      case SAVE_MESSAGES:
        
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.id === state.user.id) {
              return {
                ...user,
                messages: [
                  ...state.user.messages,
                  {
                    id: state.user.messages.length + 1,
                    message: action.msg.message,
                  },
                ],
              };
            } else {
              return {
                ...user,
              };
            }
          }),
          user: {
            ...state.user,
            messages: [
              ...state.user.messages,
              { id: state.user.messages.length + 1, message: action.msg.message },
            ],
          },
        }; 
        
   
      default:
        return state;
    }
  }
  