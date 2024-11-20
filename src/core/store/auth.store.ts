import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
	user: {
		id: string;
		name: string;
		email: string;
		isActive: boolean;
		roles: string[];
	};
	token: string;
}

export interface Actions {
	setUser: (user: AuthState['user']) => void;
	setToken: (token: AuthState['token']) => void;
}

type AuthStore = AuthState & Actions;
const storeApi: StateCreator<AuthStore> = (set, get) => ({
	user: {
		id: '',
		name: '',
		email: '',
		isActive: false,
		roles: [],
	},
	token: '',

	setUser: (user) => set({ user }),
	setToken: (token) => set({ token }),
});

export const useAuthStore = create(persist<AuthStore>(storeApi, { name: 'auth' }));
