import React from 'react'
import Banner from './component/Banner/Banner'
import Category from './component/category/Category'
import HotOffers from './component/HotOffers/HotOffers'
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
   </div>
    
  )
}

export default page
