import moment from 'moment'

const expenses = [
  {
    id: '1',
    description: 'Gas',
    note: 'For Cooking',
    amount: 76500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '2',
    description: 'Rent',
    note: 'Final Payment',
    amount: 400000,
    createdAt: moment(0).valueOf()
  },
  {
    id: '3',
    description: 'Water',
    note: '',
    amount: 2500,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
]

export default expenses