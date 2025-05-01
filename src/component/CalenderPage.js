'use client';


export default function CalenderPage({year, month, day, weekDay}) {


    return (
        <>

            <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
                <div className='absolute top-4 left-4'> {year} </div>
                <div className='absolute top-4 right-4'> {month} </div>
                <div className='text-[240px]'> {day} </div>
                <div className='text-[60px]'> {weekDay} </div>
            </div>
        </>
    );
}