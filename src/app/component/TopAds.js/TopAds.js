import Image from 'next/image'
import React from 'react'
import AdsImage from '/public/images/Ads.gif'
const TopAds = () => {
  return (
    <div className='hidden md:block'>
        <Image src={AdsImage} width={'100%'} height={200} alt='سيداس للأدوات المنزلية' priority={true}/>
    </div>
  )
}

export default TopAds
