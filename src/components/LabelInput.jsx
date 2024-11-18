const LabelInput = ({ labelName, inputType, placeholder, helperText, onChange }) => {
  const helperTextClassName = [
    'text-red-500 text-[14px] h-3',
    helperText ? 'visible' : 'invisible',
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
