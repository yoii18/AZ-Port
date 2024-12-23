import AZP from '@/assets/AZP.png'
import az from '@/assets/az.jpeg'

export const Navbar = () => {
    return(
        <div className="border-b border-gray-400 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] pb-4 mt-2">
            <div className="flex justify-between items-center">
                <img src={AZP} alt="AZP" className="h-[20%] w-[10%] pl-2"/>
                <img src={az} alt="AZ-Logo" className="h-[20%] w-[10%] pr-3"/>
            </div>
        </div>
    )
}