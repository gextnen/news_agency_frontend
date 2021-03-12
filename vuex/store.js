import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);
/*
* store: repository of articles
*/
let store = new Vuex.Store({
    state:{
        articles: [],
        tokens: [],
    },
    mutations: {
        SET_ARTICLES_TO_STATE: (state, articles )=> {
            state.articles = articles
        },
        DEL_ARTICLE_FROM_STATE: (state, id)=>{
            console.log(state.articles)
            let index = state.articles.findIndex(articles => articles.id == id)
            console.log("hello from DEL_ARTICLE_FROM_STATE ",state.articles, id)
            console.log(index)
            state.articles.splice(index,1)
            console.log("hello from DEL_ARTICLE_FROM_STATE ",state.articles, id)
        },

        SET_TOKENS_TO_STATE: (state, token)=>{
            state.tokens = token
        }

    },
    actions: {
        GET_ARTICLES_FROM_API({commit}){
            return axios('http://localhost:3000/articles',{
                method: "GET"
            })
                .then((articles) => {
                    commit('SET_ARTICLES_TO_STATE', articles.data);
                    console.log("commit articles",articles.data );

                    return articles;
                })
                .catch((error)=>{
                console.log(error);
                return error;
            })
        },
        AddNews({commit}, article){
            axios({url: 'http://localhost:3000/articles', data: article, method: 'POST'})
                .then(resp => {
                    console.log("then AddNews", resp.data)
                    // const title = resp.data.title
                    // const description = resp.data.description
                    // const content = resp.data.content
                    // const author = resp.data.author
                    // const publishedAt = resp.data.publishedAt
                    // const coverImage = resp.data.coverImage
                    commit('SET_ARTICLES_TO_STATE', resp.data)

                }).catch(err => {
                console.log("catch AddNews")
                // eslint-disable-next-line no-undef
                reject(err)
            })
        },
        AddToken({commit}, token){
            axios({url: 'http://localhost:3000/tokens', data: token, method: 'POST'})
                .then(resp => {
                    commit('SET_TOKENS_TO_STATE', resp.data)
                })
        }


        // login({commit}, user){
        //     return new Promise((resolve, reject) => {
        //         console.log("hello from store.js")
        //         commit('auth_request')
        //         axios({url: 'http://localhost:5500/login', data: user, method: 'POST' })
        //             .then(resp => {
        //                 const token = resp.data.token
        //                 const user = resp.data.user
        //                 console.log("token: ",resp," user: ", user)
        //                 localStorage.setItem('token', token)
        //                 axios.defaults.headers.common['Authorization'] = token
        //                 commit('auth_success', token, user)
        //                 resolve(resp)
        //             })
        //             .catch(err => {
        //                 commit('auth_error')
        //                 localStorage.removeItem('token')
        //                 reject(err)
        //             })
        //     })
        // },
        // logout({commit}){
        //     return new Promise((resolve) => {
        //         commit('logout')
        //         console.log("hello from logout")
        //         console.log(localStorage)
        //         localStorage.removeItem('token')
        //         delete axios.defaults.headers.common['Authorization']
        //         resolve()
        //     })
        // },

    },
    getters: {
        ARTICLES(state) {
            return state.articles;
        },
        TOKEN(state){
          return state.token;
        },
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
});

export default store;