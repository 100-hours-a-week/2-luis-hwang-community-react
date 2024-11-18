import { useCallback } from 'react'
import { GrPrevious } from 'react-icons/gr'

const PrevBtn = ({ className: _className }) => {
  const handlePrevBtnClick = useCallback((e) => {
    e.preventDefault()
    window.history.back()
  }, [])

  const className = [_className, 'cursor-pointer font-bold text-[24px]'].join(' ')

  return (
    <div onClick={handlePrevBtnClick} className={className}>
      <GrPrevious />
    </div>
  )
}

export default PrevBtn
