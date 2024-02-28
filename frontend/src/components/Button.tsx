
import { Link } from 'react-router-dom'

interface ButtonProps {
  link:string
  title:string
  variants?:string
}

const Button = ({link,title,variants,} : ButtonProps) => {
  return (
    <Link to={link} className={`text-white bg-gray-800  font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-btn before:ease relative overflow-hidden shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180 border border-purple-400 ${variants}`}>
      <span className="relative z-10">{title}</span>
    </Link>
  )
}

export default Button