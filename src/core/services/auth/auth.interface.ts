export interface ISignin {
	email: string;
	password: string;
}
export interface OSignin {
	user: {
		id: string;
		name: string;
		email: string;
		isActive: boolean;
		roles: string[];
	};
	token: string;
}
