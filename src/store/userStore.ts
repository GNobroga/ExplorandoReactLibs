import { create } from 'zustand';

interface IState {
    user: { email: string; password: string; } | null;
    error: string | null;
}

interface IAction {
    type: 'setUser' | 'setError';
    payload: any;
}

interface IActions {
    dispatch: (action: IAction) => void;
}

function userReducer(state: IState, action: IAction) {
    switch(action.type) {
        case 'setUser':
            return { ...state, user: action.payload.user };
        case 'setError': 
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
}

const userStore = create<IState & IActions>(set => ({
   user: null,
   error: null,
   dispatch: (action) => set(state => userReducer(state, action)),
}));

userStore.subscribe((state) => console.log(state))

export default userStore;