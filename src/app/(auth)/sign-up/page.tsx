import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUpPage = async () => {
  return (
    <section className='flex flex-center size-full max-sm:px-6'>
      <AuthForm type="Sign-up"/>
    </section>
  )
}

export default SignUpPage