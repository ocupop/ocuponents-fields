import React, { useState, FC } from 'react'

// ----------------------------------------------------------------------
interface ToolTipProps {
  children?: React.ReactNode,
  text?: string,
  placement?: string,
  triggerType?: string,
  className?: string
}

const ToolTip: FC<ToolTipProps> = ({
  children,
  className = '',
  text,
  placement = 'top',
  triggerType: hover,
  ...props
}) => {
  const [show, setShow] = useState(false)

  return (
    <div {...props} className={`flex items-center relative mb-2 ${className}`}>
      {show && (
        <div
          id="tooltip-default"
          role="tooltip"
          style={{ minWidth: '300px' }}
          className={`tooltip ${placement} text-sm max-w-xs font-normal top-0 -translate-y-full inline-block absolute z-50 py-2 px-3 text-dark bg-white border border-light shadow-xl transition-all duration-500 rounded-lg `}>
          {children}
          <div
            className="tooltip-arrow"
            data-popper-arrow
            style={{ width: '12px', height: '12px' }}></div>
        </div>
      )}
      <button
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        data-tooltip-target="tooltip-default"
        style={{ lineHeight: 0 }}
        className="flex justify-center w-0 p-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-full focus:bg-primary hover:bg-primary hover:text-white">
        ?<i className="fas fa-question-circle icon"></i>
      </button>
    </div>
  )
}

export default ToolTip