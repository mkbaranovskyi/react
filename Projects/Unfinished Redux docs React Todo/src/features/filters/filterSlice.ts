const initialState = {
	status: 'All',
	colors: []
}

type Action = {
	type: string
	payload?: any
}

export default function filtersReducer(state = initialState, action: Action) {
	switch (action.type) {
		case 'filters/statusFilterChanged': {
			return {
				...state,
				status: action.payload
			}
		}
		default:
			return state
	}
}
