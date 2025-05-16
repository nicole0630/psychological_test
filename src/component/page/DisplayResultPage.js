'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '@/../public/0.start/blur-circle-1.png';
import resultBtn from '@/../public/4.result/result_Btn.png';
import resultTitle from '@/../public/4.result/resultTitle.svg';

export default function DisplayResultPage({ nextStep }) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[60px]'>
          <Image className=' absolute top-0 -translate-y-1/2 ' src={circle1Img} alt='circle1Img' />
          <Image src={resultTitle} alt='resultTitle' />
          <Image onClick={nextStep} className='cursor-pointer hover:translate-y-0.5 transition w-[160px]' src={resultBtn} alt='resultBtn' />
          <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none ' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}
