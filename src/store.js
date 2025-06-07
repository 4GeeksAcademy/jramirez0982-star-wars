import { array } from "prop-types";

export const initialStore = () => {
  return {
    message: null,
    favorites: [
      
    ],

    resetIcons: false

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'add_favorites':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

    case 'delete_favorites':
      
      let elementToDelete = action.payload

      return {
        ...store,
        favorites: [...store.favorites.filter(element => element != elementToDelete)]
      }
    
    case 'reset_icon':
        let reset = action.payload
    return {
      resetIcons: reset=false
    }

    default:
      throw Error('Unknown action.');
  }
}
