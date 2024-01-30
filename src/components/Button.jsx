

const Button = ({ lable, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center border-[1px] px-4 py-3 gap-2 font-montserrat text-lg leading-none mt-4 rounded-full
    ${fullWidth && 'w-full'}
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-300 hover:text-white`
        : " bg-coral-red text-white border-coral-red"
      }`}>
      {lable}
      {iconURL && <img className="ml-2 rounded-full w-5 h-5"
        src={iconURL}
        alt="Button" />}
    </button>
  )
};

export default Button
