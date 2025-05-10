import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dayjs from 'dayjs';
import { Tooltip } from '@chakra-ui/react';

const events = [
    { date: '2025-05-20', name: 'Pirate Penguin Launch Party' },
    { date: '2025-06-15', name: 'Budapest River Tour' },
];

const PiratePenguinCalendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const days = [];
    let day = startOfWeek;

    while (day.isBefore(endOfWeek, 'day')) {
        days.push(day);
        day = day.add(1, 'day');
    }

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const renderDay = (day) => {
        const event = events.find(e => e.date === day.format('YYYY-MM-DD'));
        return (
            <Tooltip label={event ? event.name : ''} isDisabled={!event} placement='top'>
                <div
                    className={`p-2 text-center rounded-lg ${day.month() === currentDate.month() ? 'bg-blue-100' : 'bg-gray-100'} hover:bg-blue-200 cursor-pointer ${event ? 'border-2 border-yellow-500' : ''}`}
                >
                    {day.date()}
                </div>
            </Tooltip>
        );
    };

    return (
        <div className='p-4 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto'>
            <div className='flex justify-between items-center mb-4'>
                <button onClick={handlePrevMonth}><ChevronLeft /></button>
                <span className='font-bold text-lg'>{currentDate.format('MMMM YYYY')}</span>
                <button onClick={handleNextMonth}><ChevronRight /></button>
            </div>
            <div className='grid grid-cols-7 gap-1'>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, idx) => (
                    <div key={idx} className='text-center font-medium'>{d}</div>
                ))}
                {days.map((day, idx) => (
                    <div key={idx}>{renderDay(day)}</div>
                ))}
            </div>
        </div>
    );
};

export default PiratePenguinCalendar;
