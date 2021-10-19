export default {
  state: { table: {} },
  mutations: {
    incrementTable(state, data) {
      // 变更状态
      state.table = data
    }
  }
}
