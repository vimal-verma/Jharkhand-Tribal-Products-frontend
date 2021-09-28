import React from 'react'
import Lottie from 'react-lottie'

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <>
      <Lottie options={defaultOptions} />
    </>
  )
}

export default DisplayLottie
