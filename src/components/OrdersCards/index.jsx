import { ChevronRightIcon } from '@heroicons/react/24/solid';

function OrdersCard({ date, totalPrice, totalProducts }) {
  const getDate = () => {
    const formatDate = date.toString()
    const newDate = formatDate.substring(0, formatDate.indexOf(':')-3)
    return newDate
  }
  
  return (
    <div className="flex justify-between items-center mb-3 border border-black dark:border-white rounded-lg w-80 p-4 dark:text-white">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">{getDate()}</span>
          <span className="font-light">{totalProducts} articles</span>
        </div>
        <div className='flex gap-1 items-center'>
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export { OrdersCard };
