'use client';

import { DatePicker } from 'antd';
import { useState } from 'react';
import CalenderPage from '@/component/CalenderPage'


export default function TestUI() {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        alert("你選的是： " + dateString);
    };



    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* <DatePicker onChange={onChange} needConfirm /> */}
            <CalenderPage year="2025" month="五月" day="01" weekDay="星期四"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="02" weekDay="星期五"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="03" weekDay="星期六"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="04" weekDay="星期日"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="05" weekDay="星期一"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="06" weekDay="星期二"></CalenderPage>
            <CalenderPage year="2025" month="五月" day="07" weekDay="星期三"></CalenderPage>
        </div>
    );
}