import Image from 'next/image'
import React from 'react'
import { logoutAccount } from '../../lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({user,type='desktop'}:FooterProps) => {
     const router=useRouter();
    const handleLogoutUser = async () => {
       const logoutUser=await logoutAccount();

       if(logoutUser) router.push('/sign-in');
    }
  return (
    <footer className='footer'>
        <div className={type==='mobile'?'footer_name-mobile':'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>
      <div className={type==='mobile'?'footer_email-mobile':'footer_email'}>
        <h1 className='text-14 truncate font-bold text-gray-700'>{user?.name}</h1>
        <p className='text-14 truncate font-normal text-gray-600'>{user?.email}</p>
      </div>

      <div className='footer_image' onClick={handleLogoutUser}>
        <Image src="icons/logout.svg" alt='logout'height={50} width={50}/>
      </div>
    </footer>
  )
}

export default Footer
