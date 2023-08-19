import { v4 as uuidv4 } from "uuid";

const basketModule = {
    namespaced: true,
    state: {
        basketItems: [],
        showingbasket: false,
        basketCount: 0
    },
    getters: {
        getbasketItems(state){
            return state.basketItems;
        },
        getShowingbasket(state){
            return state.showingbasket;
        },
        getBasketCount(state){
            return state.basketCount;
        }
    },
    mutations: {
        setbasketItems(state, payload){
            state.basketItems = payload;
            state.basketCount = state.basketItems.length;
        },
        setShowingbasket(state, payload){
            state.showingbasket = payload;
        },
        addBasketItem(state, payload){
            state.basketItems.push(payload);
            state.basketCount = state.basketItems.length;
        }
    },
    actions: {
        deleteBasketItem({state, commit}, payload){
            let filterItems = state.basketItems.filter(el => el.id !== payload);
            commit('setbasketItems', filterItems);
        },
        addItem({commit}, payload){
            let newItem = payload;
            newItem.id = uuidv4();
            commit('addBasketItem', newItem);
        }
    }
}
export default basketModule;