export async function handle({event, resolve}) {
	console.log('handle() - 1st')
	const resp = await resolve(event)
	console.log('handle() - 4th')
	return resp
}

export async function getSession({locals}) {
	console.log('getSession() - 3rd')
	return {}
}
