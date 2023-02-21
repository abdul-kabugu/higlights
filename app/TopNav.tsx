'use client';
import {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'
import {ConnectButton, useConnectModal,} from '@rainbow-me/rainbowkit'
import { useAuthenticate } from '@/Hooks';
import { useAccount, useSignMessage } from 'wagmi';

export default function TopNav() {
  const [searchTerm, setsearchTerm] = useState("")
  const {address, isConnected, } = useAccount()
  const {openConnectModal} = useConnectModal()
  const {generateMessage, authenticate} = useAuthenticate()
   const {signMessageAsync} = useSignMessage()
    const  myStoredTokens =  window.sessionStorage.getItem("accessToken")
    console.log("the stored sestion token", myStoredTokens)
    
    const  handleSignInWithCyber = async () =>  {
       if(! isConnected) {
        alert("connect  wallet  first")
       }
       const message = await generateMessage(address)
        const signuture = await signMessageAsync({message : message})
        const accessToken = await authenticate(address, signuture)
        window.sessionStorage.setItem('accessToken', accessToken);
       console.log("the access token", accessToken)
    }
  return (
    <div className='px-3 flex items-center justify-between  sticky top-2 text-white mb-4'>
      <div>
        <p className='font-serif font-semibold text-xl'>Highlights</p>
        </div>
         <div className='flex items-center gap-2 border py-1 rounded-lg px-2'>
          <input   type="text"  value={searchTerm} onChange={e => setsearchTerm(e.target.value)} placeholder="Searc by Channel or #Tag"
            className='bg-inherit w-[400px] py-1 px-2 focus:outline-none '
          />
            <AiOutlineSearch className='cursor-pointer' size={25} />
         </div>
          <div className='flex items-center gap-2'>
             <ConnectButton  />
           <div className='flex gap-2 items-center bg-blue-700 py-2 px-3 rounded-md cursor-pointer'>
              <BiUserCircle  />
               <button className='font-semibold' onClick={handleSignInWithCyber}>Connect Wallet</button>
           </div>
          </div>
    </div>
  )
}
