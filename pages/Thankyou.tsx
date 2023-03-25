import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Thankyou = (props: Props) => {
    const param= useRouter()
    console.log(param.asPath)
  return (
    <div>Thankyou</div>
  )
}

export default Thankyou