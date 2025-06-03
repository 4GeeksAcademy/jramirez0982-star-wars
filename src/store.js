export const initialStore=()=>{
  return{
    message: null,
    results: [
      {
      uid: "",
      name: "",
      url: ""
      }

    ]

    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'load_characters':
      return{
        ...store,
        results: action.payload
      }

    default:
      throw Error('Unknown action.');
  }    
}
