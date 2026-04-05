import React from 'react'
import { selectorLoading, selectorLoadingPickerItemContainer, selectorLoadingPickerItemInner, selectorLoadingPickerItemInnerTitle } from './selector.style'

export default function SelectorLoading() {
  return (
    <div className={selectorLoading}>
      <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-color)')}></span>
      <div className={selectorLoadingPickerItemContainer}>
        <div className={selectorLoadingPickerItemInner}>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-color)')}></span>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-secondary-color)')}></span>
        </div>
        <div className={selectorLoadingPickerItemInner}>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-color)')}></span>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-secondary-color)')}></span>
        </div>
        <div className={selectorLoadingPickerItemInner}>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-color)')}></span>
          <span className={selectorLoadingPickerItemInnerTitle('bg-(--loading-secondary-color)')}></span>
        </div>
      </div>
    </div>
  )
}
