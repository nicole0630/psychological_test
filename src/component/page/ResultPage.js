'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function ResultPage() {

  const psyState = usePsyStore((state) => state);


  const playAgain = function () {
    // todo: 重新整理頁面
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div>

          {
            psyState.score < 6 &&
            <Image src={result1} alt='result1' style={{ width: '298px', height: '600px' }} />
          }

          {
            (psyState.score >= 6 && psyState.score < 8) &&
            <Image src={result2} alt='result2' style={{ width: '298px', height: '600px' }} />
          }

          {
            psyState.score >= 8 &&
            <Image src={result3} alt='result3' style={{ width: '298px', height: '600px' }} />
          }

          <div className='flex justify-center gap-[12px] text-[#B65A0F] font-semibold mt-[12px]'>長按或截圖可保存結果</div>

          {/* 按紐 */}
          <div className='mt-6 flex justify-center items-center space-x-10 relative z-10'>
            <div
              className={` bg-[#B65A0F] text-white rounded-full px-6 py-2 font-bold
              shadow-[0px_4px_0px_1px_#8b4712] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 再玩一次 </div>

            <div className={` bg-[#B65A0F] text-white rounded-full px-6 py-2 font-bold
              shadow-[0px_4px_0px_1px_#8b4712] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 分享測驗 </div>
          </div>

        </div>
        <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-0' src={circle1Img} alt='circle1Img' />
      </MobileFrame>
    </>
  );
}
