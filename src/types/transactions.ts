// would be good to turn these into an enum
// enum Category {
// }


export type Transaction = {
  id: number
  date: Date
  amount: number
  merchant: string
  category: string
}

export type Transactions = Transaction[]