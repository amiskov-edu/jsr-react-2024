export const selectUserModule = state => state.user;
export const selectUserById = (state, id) => { console.log(selectUserModule(state).entities, id); return selectUserModule(state).entities[id]; }
export const selectUserIds = state => selectUserModule(state).ids;
