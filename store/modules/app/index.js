

export const namespaced = true
export const state = {
    appointments: [],
    addShift: true
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
    }
}