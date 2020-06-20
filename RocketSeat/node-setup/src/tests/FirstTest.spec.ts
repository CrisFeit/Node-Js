import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Cris'

  expect(user.name).toEqual('Cris')
})
