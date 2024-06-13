import React from 'react'

const transactions = [
  { id: 1, description: 'Money Transfer emeka', amount: '120000.00', date: '12/10/2015', time: '14:40', type: 'income', category: 'Transfer' },
  { id: 2, description: 'Design eBook', amount: '300.99', date: '08/10/2015', time: '10:05', type: 'expense', category: 'Books' },
  { id: 3, description: 'pro shoes', amount: '1200.49', date: '29/09/2015', time: '12:10', type: 'expense', category: 'Food' },
  { id: 4, description: 'boots', amount: '2600.00', date: '29/09/2015', time: '11:30', type: 'income', category: 'Wages' },
  { id: 1, description: 'Money Transfer dave', amount: '1000.00', date: '12/10/2015', time: '14:40', type: 'income', category: 'Transfer' },
  { id: 5, description: 'Pig&Heifer', amount: '10000.00', date: '26/09/2015', time: '14:40', type: 'expense', category: 'Food' },
  { id: 3, description: 'Neon99', amount: '3400.49', date: '29/09/2015', time: '12:10', type: 'expense', category: 'Food' },
  { id: 4, description: 'Wages', amount: '2600.00', date: '29/09/2015', time: '11:30', type: 'income', category: 'Wages' },
  { id: 5, description: 'Pig&Heifer', amount: '10000.00', date: '26/09/2015', time: '14:40', type: 'expense', category: 'Food' },
  { id: 6, description: 'Apple shoes', amount: '1000.00', date: '26/09/2015', time: '12:13', type: 'expense', category: 'Store' },
  { id: 1, description: 'Money Transfer chijoke', amount: '500000.00', date: '12/10/2015', time: '14:40', type: 'income', category: 'Transfer' },
];

export default function Transaction() {
  return (
    <div className="ml-9 mr-9">
    <h2 className="text-lg font-semibold mb-4">Balance <span className="text-xl text-blue-600">&#8358;3,261,000,000.98</span></h2>
    <div className="overflow-y-auto" style={{ height: '550px' }}>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex justify-between mb-4">
          <div className="flex flex-col">
            <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
              {transaction.description}
            </span>
            <span className="text-xs text-gray-500">{transaction.date} {transaction.time}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
            &#8358;{transaction.amount.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500">{transaction.category}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex justify-center items-center cursor-pointer text-blue-600">
      <span className="text-xl">+</span>
    </div>
  </div>
  )
}


