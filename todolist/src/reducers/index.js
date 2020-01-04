import tks from 'js-toolkits';

export default (state = tks.storage().get('todolist') || ['item1', 'item2'], action) => {
  //console.log(state, action)
  switch (action.type) {
    case 'ADD':
      state.push(action.value);
      tks.storage().set('todolist', state);
      return state;
    case 'DELETE':
      state.splice(action.value, 1);
      tks.storage().set('todolist', state);
      return state;
    default:
      return state
  }
}
