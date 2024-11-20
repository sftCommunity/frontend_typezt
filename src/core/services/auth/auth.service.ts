import { typeztAPI } from '@/core/api';
import { AxiosInstance } from 'axios';
import { ISignin, OSignin } from './auth.interface';

export class AuthService {
	static readonly API: AxiosInstance = typeztAPI;
	static readonly prefix: string = '/auth';

	static readonly signin = async (credentials: ISignin): Promise<OSignin> => {
		const { data: response } = await this.API.post(this.prefix + '/login', credentials);
		return response;
	};
}
