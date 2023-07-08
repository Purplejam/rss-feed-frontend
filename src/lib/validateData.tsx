export const validatePassword = (password: string) => {
	return password.length >= 6
}

export const validateEmail = (email: string) => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	return mailformat.test(email)
}
