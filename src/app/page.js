import React from 'react'
import Banner from './component/Banner/Banner'
import Category from './component/category/Category'
import HotOffers from './component/HotOffers/HotOffers'
import PrivateOffer from './component/PrivateOffer/PrivateOffer'
import BestOffer from './component/BestOffer/BestOffer'
import Advantages from './component/Advantages/Advantages'
import BestSeller from './component/BestSeller/BestSeller'
import ExclusiveDscounts from './component/ExclusiveDscounts/ExclusiveDscounts'
const page = () => {
  return (
   <div>
      <header className='mt-3'>
        <Banner/>
      </header>
      <aside>
        <Category/>
      </aside>
      <section>
          <HotOffers/>
      </section>
      <section>
        <PrivateOffer/>
      </section>
      <section>
        <BestOffer/>
      </section>
      <section>
        <Advantages/>
      </section>
      <section>
         <BestSeller/>
      </section>
      <ExclusiveDscounts/>
   </div>
    
  )
}

export default page
