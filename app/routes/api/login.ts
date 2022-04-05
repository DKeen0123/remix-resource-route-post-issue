import {ActionFunction, json} from '@remix-run/node'

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  if (
    !email ||
    !password ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return json(
      {error: `Form not submitted correctly.`},
      {
        status: 400,
      },
    )
  }

  try {
    console.log('something')

    throw new Error('something')
  } catch (error: unknown) {
    return json({error: 'an error occurred'}, {status: 400})
  }
}
