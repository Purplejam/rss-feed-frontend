export const validatePassword = (password: string) => {
	return password.length >= 6
}

export const validateEmail = (email: string) => {
	const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return mailformat.test(email)
}
