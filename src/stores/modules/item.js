import itemApi from '../../api/item.api'
import * as types from '../mutation-types'

const state = {
  all: itemApi.immediately()
}

const getters = {
  allItems: state => state.all
}

const actions = {
  getAllItems ({commit}) {
    itemApi.getProducts(items => {
      commit(types.RECEIVE_ITEMS, { items })
    })
  }
}

const mutations = {
  [types.RECEIVE_ITEMS] (state, { items }) {
    state.all = items
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
