const LabelInput = ({ labelName, inputType, placeholder, isValid, helperText, onChange }) => {
  // prettier-ignore
  const helperTextClassName = [
    'text-[14px] h-3',
    isValid ? 'text-green-500' : 'text-red-500'
  ].join(' ')

  return (
    <div className='flex flex-col gap-1'>
      <p className='font-bold'>{labelName}</p>
      <input
        type={inputType}
        placeholder={placeholder}
        className='w-[350px] p-2 border-2 border-gray-300 rounded-md'
        onChange={onChange}
      />
      <p className={helperTextClassName}>{helperText}</p>
    </div>
  )
}

export default LabelInput
