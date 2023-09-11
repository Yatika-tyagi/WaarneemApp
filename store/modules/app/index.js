

export const namespaced = true
export const state = {
    appointments: [],
    addShift: true,
    deleteShift: false
}

export const mutations = {
    SET_APPOINTMENT(state, value) {
        state.appointments = state.appointments ? [
            ...state.appointments,
            ...[value]
        ]: [value]
    },
    SET_ADD_SHIFT(state, value) {
        state.addShift = value
    },
    SET_DELETE_SHIFT(state, value) {
        const index = state.appointments.findIndex(item => item.id === value)
        if (index !== -1) {
          state.appointments.splice(index, 1)
        }
        state.app.deleteShift = !state.app.deleteShift;
    }
}