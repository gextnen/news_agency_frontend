import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);
/*
* store: repository of articles
*/
let store = new Vuex.Store({
    state: {
        articles: [],
        token: localStorage.getItem('token') || '',
        searchValue: '',
    },
    mutations: {
        SET_ARTICLES_TO_STATE: (state, articles) => {
            console.log("Hello from store.js SET_ARTICLES_TO_STATE")
            state.articles = articles
        },
        DEL_ARTICLE_FROM_STATE: (state, id) => {
            console.log(state.articles)
            let index = state.articles.findIndex(articles => articles.id === id)
            console.log("hello from DEL_ARTICLE_FROM_STATE ", state.articles, id)
            console.log(index)
            state.articles.splice(index, 1)
            console.log("hello from DEL_ARTICLE_FROM_STATE ", state.articles, id)
        },

        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            console.log("Hello from store.js SET_SEARCH_VALUE_TO_VUEX")

            state.searchValue = value;
        },

        LOGOUT(state) {
            console.log("Hello from store.js LOGOUT")
            state.token = ''
        },


    },
    actions: {
        GET_ARTICLES_FROM_API({commit}) {
            console.log("Hello from GET_ARTICLES_FROM_API")
            return axios('http://localhost:3000/articles', {
                method: "GET"
            })
                .then((articles) => {
                        console.log("commit articles", articles.data);

                        commit('SET_ARTICLES_TO_STATE', articles.data);
                        console.log("commit articles", articles.data);

                        return articles;
                    },
                    reason => {
                        console.log("reason")
                        console.log(reason)
                    })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ChangeNews({commit}, article) {
            axios({url: 'http://localhost:3000/articles/' + article.id, data: article, method: 'PATCH'})
                .then(resp => {
                    console.log("then ChangeNews", article.id)
                    commit('SET_ARTICLES_TO_STATE', resp.data)
                }).catch(err => {
                console.log("catch ChangeNews")
                console.log(err)
            })
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        },

        LOGOUT({commit}) {
            return new Promise((resolve) => {
                commit('LOGOUT')
                console.log("hello from logout")
                console.log(localStorage)
                localStorage.removeItem('token')
                delete axios.defaults.headers.authorization
                resolve()
            })
        },

    },
    getters: {
        ARTICLES(state) {
            return state.articles;
        },

        isAuthenticated: state => !!state.token,
        SEARCH_VALUE(state) {
            return state.searchValue;
        }
    }
});

export default store;