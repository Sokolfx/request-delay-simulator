let store
if (process.browser) {
  window.onNuxtReady(({$store}) => {
    store = $store
  })
}

export default class ItemService {
  store(request) {
    store.commit('items/store', request)
  }
  delete(index) {
    store.commit('items/delete', index)
  }
  action(state) {
    store.commit('items/action', state)
  }
}
