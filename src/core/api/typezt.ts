import axios from 'axios';
import { useAuthStore } from '../store';

const typeztAPI = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_PREFIX}`,
	headers: {
		Accept: '*/*',
		'Content-Type': 'application/json',
	},
});

typeztAPI.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token;
	if (token) config.headers['Authorization'] = `Bearer ${token}`;
	return config;
});

export { typeztAPI };
