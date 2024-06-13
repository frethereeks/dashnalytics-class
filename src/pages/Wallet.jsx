import React from 'react'

export default function Wallet() {
  return (
    <div className='w-64'> <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
    <div className="border p-4 w-full rounded mb-4"><img src="/home/dave/Documents/github/dashnalytics-class/src/assets/images/debit.png" alt="visa" className='w-12 mb-2' />
    <p>Debit</p>
    <p>**** **** **** 8763</p>
    </div>
    <div className="border p-4 rounded mb-4"><img src="/home/dave/Documents/github/dashnalytics-class/src/assets/images/debit.png" alt="visa " className='w-12 mb-2' />
    <p>Credit</p>
    <p>**** **** **** 1792</p>
    </div>
    <div className="border p-4 rounded flex justify-center items-center cursor-pointer">
      <span className="text-xl">+</span>
    </div>
    </div>
  )
}
