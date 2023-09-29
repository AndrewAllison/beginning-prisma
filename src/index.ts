import { faker } from '@faker-js/faker'
import { prisma } from './database/prisma'

const main = async () => {
	const firstName = faker.person.firstName()
	const lastName = faker.person.lastName()

	await prisma?.user.create({
		data: {
			name: `${firstName} ${lastName}`,
			email: faker.internet.email({
				firstName,
				lastName,
			}),
		},
	})
}

main()
	.then(() => {
		console.log('Then')
	})
	.finally(() => console.log('Completed'))
