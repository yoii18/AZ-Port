import { useState } from "react"

export const Dropdown = ({title, options, setSelectedOption, selectedOption}) => {
    const [isOpen, setIsOpen] = useState(false)
    function onClickHandler(event) {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div className="mt-5 flex items-center gap-3">
                {title}
                <div className="">
                <button className="w-80 h-10 border border-slate-600 rounded-md" onClick={onClickHandler}>{selectedOption}
                </button>
                <div>
                    {isOpen && (
                    <div className="absolute mt-1 w-80 border border-slate-600 rounded-md bg-white">
                            {options.map((option, index) => (
                                <div 
                                    key={index} 
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedOption(option.label)
                                        setIsOpen(!isOpen)
                                    }
                                }
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}