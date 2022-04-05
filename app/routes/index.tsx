import {Form} from '@remix-run/react'

export default function Index() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', lineHeight: '1.4'}}>
      <h1>Welcome to Remix</h1>
      <Form method="post" action="/api/login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
