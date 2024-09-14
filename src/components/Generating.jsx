import {loading} from '../assets'

const Generating = ({classname}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${classname || ''} text-base`}>
        <img className=' w-5  h-5 mr-5 'src={loading} alt="Loading" />
        Ai is generating
    </div>
  )
}

export default Generating