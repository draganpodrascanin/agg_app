export default interface User {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	phoneNumber: number;
	passwordResetToken?: string;
	passwordResetExpires?: Date;
	passwordChangedAt?: Date;
}
