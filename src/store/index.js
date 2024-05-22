import { createStore } from 'vuex'

export default createStore({
  state: {
    email:"",
    name:"",
  },
  getters: {
  },
  mutations: {
    login(state, email, name){
      state.email = email;
      state.name = name;
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
    },
    logout(state){
      state.email = "";
      state.name = "";
      localStorage.removeItem("email");
      localStorage.removeItem("name");
    },
    initializeStore(state){
      if(localStorage.getItem("email")){
        state.email = localStorage.getItem("email");
        state.name = localStorage.getItem("name");
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
