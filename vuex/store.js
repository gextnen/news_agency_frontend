import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);
/*
* store: repository of articles
*/
let store = new Vuex.Store({
    state:{
        articles: []
    },
    mutations: {
        SET_ARTICLES_TO_STATE: (state, articles )=> {
            state.articles = articles
        }
    },
    actions: {
        GET_ARTICLES_FROM_API({commit}){
            return axios('http://localhost:3000/articles',{
                method: "GET"
            })
                .then((articles) => {
                    commit('SET_ARTICLES_TO_STATE', articles.data);
                    return articles;
                })
                .catch((error)=>{
                console.log(error);
                return error;
            })
        },
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        }
    },
    getters: {
        ARTICLES(state) {
            return state.articles;
        }
    }
});

export default store;