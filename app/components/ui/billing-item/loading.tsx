import React from 'react'
import {
  loadingContainerStyle,
  loadingHeaderStyle,
  loadingTitleWrapperStyle,
  loadingTitleSkeletonStyle,
  loadingSubtitleSkeletonStyle,
  loadingStepStyle,
  loadingGridStyle,
  loadingFieldGroupStyle,
  loadingLabelSkeletonStyle,
  loadingInputSkeletonStyle,
} from './billing.style'

export default function BillingLoading() {
  return (
    <div className={loadingContainerStyle}>
      <div className={loadingHeaderStyle}>
        <div className={loadingTitleWrapperStyle}>
          <span className={loadingTitleSkeletonStyle}></span>
          <span className={loadingSubtitleSkeletonStyle}></span>
        </div>
        <span className={loadingStepStyle}>Step 1 of 4</span>
      </div>
      <div className={loadingGridStyle}>
        {
          Array.from({length: 4}).map((_, i) => (
            <div key={i} className={loadingFieldGroupStyle}>
              <span className={loadingLabelSkeletonStyle}></span>
              <div className={loadingInputSkeletonStyle}></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
