import React, { FC } from 'react'
import Tooltip from './Tooltip'

interface LabelProps {
  label?: string
  hint?: string
  className?: string
  children?: React.ReactNode
}

const Label: FC<LabelProps> = ({ hint, label, children, className }) => {
  return (
    <div className={`flex relative ${className}`}>
      <label>
        <span className='whitespace-nowrap'>{label}</span>
        {children}
      </label>
      {hint && <Tooltip>{hint}</Tooltip>}
    </div>
  )
}

export default Label
