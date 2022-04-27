const state = {
  todos: [],
  logIt: "",
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  addTodo({ commit }, title) {
    commit("newTodo", title);
  },
};

const mutations = {
  newTodo: (state, todo) => (state.logIt = todo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
