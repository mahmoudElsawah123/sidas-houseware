import Image from 'next/image'
import AdvantagesImage1 from '/public/images/Advantages-1.png'
import AdvantagesImage2 from '/public/images/Advantages-2.png'
import AdvantagesImage3 from '/public/images/Advantages-3.png'
import AdvantagesImage4 from '/public/images/Advantages-4.png'

const Advantages = () => {
  return (
    <div className='container px-0 md:px-2'>
        <h1 className="font-semibold text-[25px] py-10 px-2">المزايا</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-5'>
            <Image src={AdvantagesImage1} alt='المزايا' className='w-[272px] h-auto'/>
            <Image src={AdvantagesImage2} alt='المزايا' className='w-[272px] h-auto'/>
            <Image src={AdvantagesImage3} alt='المزايا' className='w-[272px] h-auto'/>
            <Image src={AdvantagesImage4} alt='المزايا' className='w-[272px] h-auto'/>

        </div>
    </div>
  )
}

export default Advantages
