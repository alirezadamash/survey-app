export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_ROLE (state, role) {
    state.role = role
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_SURVEY (state, survey){
    state.survey = survey
  }
}