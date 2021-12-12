export const state = () => ({
  items: [],
  state: false,
})

export const mutations = {
  store(state, payload) {
    state.items.push(payload)
  },
  delete(state, { index }) {
    state.items.splice(index, 1)
  },
  action(state, payload) {
    state.state = payload
  },
}
