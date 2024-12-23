import { useState } from "react"
import { Dropdown } from "./Dropdown"

export const Main = () => {
    const [dropdown, setDropdown] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownOptions = [
        { label: 'がん領域', value: 'Option 1' },
        { label: '糖尿病・循環器・腎疾患', value: 'Option 2' },
        { label: '呼吸器・免疫疾患', value: 'Option 3' },
        { label: '感染症', value: ''},
        { label: '消化器疾患', value: ''}
      ]
    return (
        <div className="ml-[15%]">
            <div className="box-border mt-11 mr-1">
                <div className="w-fit h-11 flex items-center gap-1 bg-customBlue rounded pt-1 pb-1 pr-4 pl-4">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-5 h-5">
                        <path d="M9.35296 23.9974C9.01963 23.9974 8.71036 23.8511 8.42516 23.5585C8.13998 23.2659 7.9974 22.953 7.9974 22.6196V19.5529H24.8863V7.9974H27.9974C28.3307 7.9974 28.6363 8.1437 28.9141 8.4363C29.1918 8.72887 29.3307 9.04924 29.3307 9.3974V29.3085L24.0196 23.9974H9.35296ZM2.66406 22.6641V4.04183C2.66406 3.7085 2.80295 3.39554 3.08073 3.10296C3.35851 2.81036 3.66406 2.66406 3.9974 2.66406H21.3085C21.6567 2.66406 21.9696 2.80665 22.2474 3.09183C22.5252 3.37703 22.6641 3.6937 22.6641 4.04183V15.953C22.6641 16.2863 22.5252 16.5993 22.2474 16.8918C21.9696 17.1844 21.6567 17.3307 21.3085 17.3307H7.9974L2.66406 22.6641ZM20.4419 15.1085V4.88626H4.88626V15.1085H20.4419Z" fill="currentColor" />
                    </svg>
                    <p className="text-base pr-1 font-semibold text-white">FAQ</p>
                </div>
            </div>
            <div className="mt-[3%]">
                現在、治療中の疾患領域を選んでください。<br />
                領域を選ぶと、製品リストが確認できますので、製品を選んでください
            </div>
        <Dropdown title = {"領域"} options={dropdownOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        { selectedOption == '' ? "skeleton" : <Dropdown title={"製品"} options={dropdownOptions}/> }

        </div>
    )
}
