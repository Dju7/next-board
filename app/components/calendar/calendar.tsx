'use client'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendrier() {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='h-full w-full bg-white '>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
