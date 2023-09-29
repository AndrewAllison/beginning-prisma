import { describe, expect, it } from 'vitest'
import prisma from '../__mocks__/prisma.mock'
describe('jest-tests', () => {
	it('should add stuff to the db', async () => {
		const spy = await prisma.user.create.mockResolvedValue({
			name: '123245',
			email: 'mail.mail.com',
			id: 12345,
		})

		const users = await prisma.user.create({
			data: {
				name: '123245',
				email: 'mail.mail.com',
				id: 12345,
			},
		})
		console.log(users)

		expect(spy).toHaveBeenCalledWith({
			data: {
				name: '123245',
				email: 'mail.mail.com',
				id: 12345,
			},
		})
	})
})
