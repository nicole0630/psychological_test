'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1_up.png';
import q1Down from '@/../public/1.question/q1_down.png';
import q2Up from '@/../public/1.question/q2_up.png';
import q2Down from '@/../public/1.question/q2_down.png';
import q3Up from '@/../public/1.question/q3_up.png';
import q3Down from '@/../public/1.question/q3_down.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import circle3Img from '@/../public/1.question/blur-circle-3.png';
import circle4Img from '@/../public/1.question/blur-circle-4.png';

import { usePsyStore, useQuestionStore } from '@/app/store/store'


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value );

    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    let colorString = "";

    switch(questionIndex) {
      case 0:
        colorString = prefix === 'text' ? 'text-[#90B62A]' : 'border-[#90B62A]';  // 綠色
        break;
      case 1:
        colorString = prefix === 'text' ? 'text-[#DD3E3E]' : 'border-[#DD3E3E]';  // 紅色
        break;
      case 2:
        colorString = prefix === 'text' ? 'text-[#1098EC]' : 'border-[#1098EC]';  // 藍色
        break;
      default:
        colorString = prefix === 'text' ? 'text-[#90B62A]' : 'border-[#90B62A]';  // 預設綠色
    }

    return colorString;
  }

  // 圓形
  const getCircleImage = function() {
    switch(questionIndex) {
      case 0:
        return circle2Img;
      case 1:
        return circle3Img;
      default:
        return circle4Img;
    }
  }

// 上可頌
  const getCrossiantImage = function() {
    switch(questionIndex) {
      case 0:
        return q1Up;
      case 1:
        return q2Up;
      default:
        return q3Up;
    }
  }

  // 下可頌
  const getCrossiantDownImage = function() {
    switch(questionIndex) {
      case 0:
        return q1Down;
      case 1:
        return q2Down;
      default:
        return q3Down;
    }
  }

  return (
    <>
      <MobileFrame>
        
        <Image className=' absolute top-0 -translate-y-1/2 ' src={getCircleImage()} alt='circleImg' />

        


        <div className='flex flex-col items-center gap-[26px]'>
          <Image src={getCrossiantImage()} className='w-[88px]' alt='crossiantUp' />

          <div className={`${getMainColor('text')} border-2 ${getMainColor('border')} rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl `}>
            Q{questionIndex+1}
          </div>
          

          <div 
            className={`text-center font-bold text-3xl mb-[60px] ${getMainColor('text')} `}
          > {questionData.questions[questionIndex+1].title} </div>


          {            
            questionData.questions[questionIndex+1].options.map( (option, index) => {

              return (
                <>
                  {
                    questionIndex == 0 && 
                    <div 
                      className={` bg-[#BEE351] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition z-10`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "green"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 1 && 
                    <div 
                      className={` bg-[#DD3E3E] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition z-10`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "red"}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 2 && 
                    <div 
                      className={` bg-[#89BCFF] w-full rounded-full text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition z-10`}

                      onClick={() => clickAnswer(option)}
                      key={option.title + "blue"}
                    > {option.title} </div>
                  }
                </>
              )

            })

          }
          

          <Image src={getCrossiantDownImage()} className='w-[88px]' alt='crossiantDown' />

        </div>

        <Image className=' absolute bottom-0 translate-y-1/2 z-0' src={getCircleImage()} alt='circleImg' />
        
      </MobileFrame>
    </>
  );
}
