/* jshint esversion: 6 */

// import { getBooksFromFakeXHR } from '../../lib/books.db';

// export const LOAD_CARDS = 'LOAD_CARDS';
// export const ADD_CARD = 'ADD_CARD';
// export const CHANGE_CARD = 'CHANGE_CARD';
// export const DELETE_CARD = 'DELETE_CARD';

// export const loadCards = cards => {
//   return {
//     type: LOAD_CARDS,
//     cards
//   };
// };

// export const addCard = card => {

//   return {
//     type: ADD_CARD,
//     card
//   };

// // export const changeCard = card => {

// //   return {
// //     type: CHANGE_CARD,
// //     card
// //   };

// // export const deleteCard = card => {

// //   return {
// //     type: DELETE_CARD,
// //     card
// //   };



// };
export const LOAD_CARDS = 'LOAD_CARDS';
// export const RECEIVE_USERS = 'RECEIVE_USERS';
// export const DELETE_CARD = 'DELETE_CARD';
// export const MOVE_CARD = 'MOVE_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
// export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';


// export const receiveUsers = (users) =>{
//   return {
//     type: RECEIVE_USERS,
//     users
//   }
// }

export const loadCards = cards => {
  return {
    type: LOAD_CARDS,
    cards
  };
};
// export const loadCards = (card) =>{
//   return {
//     type: LOAD_CARDS,
//     cards
//   }
// }

// export const deleteCard = (index) =>{
//   return {
//     type: DELETE_CARD,
//     index
//   }
// }


export function editCard(id, title, priority, status, createdBy, assignedTo) {
  return {
    type: EDIT_CARD,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  };
}

export const addCard = (newcard) =>{
  let card = newcard;
  return {
    type: ADD_CARD,
    card
  }
}

// export const onEditFieldChange = (index, id, fieldName, body) =>{
//   return {
//     type: EDIT_CARD,
//     index,
//     id,
//     fieldName,
//     body
//   }
// }

// export const onShowEditForm = (id, bool) =>{
//   console.log('bool: ', bool);
//   return {
//     type: SHOW_EDIT_FORM,
//     id,
//     bool
//   }
// }