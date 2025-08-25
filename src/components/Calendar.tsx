"use client";

import { useEffect, useState } from "react";
import '@fullcalendar/common/main.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import styles from './styles/Calendar.module.css';

type DiaryData = {
    diaryID: string;
    created_at?: string;
    mood?: { icon: string; label: string };
};

type CalendarProps = {
    onDateSelect: (date: string) => void;
    diaryList: DiaryData[];
};

type DiaryEvent = {
    title: string;
    date: string;
};

export const Calendar = ({ onDateSelect, diaryList }: CalendarProps): JSX.Element => {
    const [events, setEvents] = useState<DiaryEvent[]>([]);
    const [calendarKey, setCalendarKey] = useState(0);

    const handleDateClick = (arg: DateClickArg) => {
        onDateSelect(arg.dateStr);
    };

    useEffect(() => {
        const diaryEvents = diaryList.map((item) => ({
            title: item.mood?.icon || "📖",
            date: item.created_at?.slice(0, 10) || "",
        }));
        setEvents(diaryEvents);
        setCalendarKey(prev => prev + 1); //これで強制レンダリング
    }, [diaryList]);

    return (
        <div className={styles.calendarContainer}>
            <FullCalendar
                key={calendarKey}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale="ja"
                headerToolbar={{ left: "prev", center: "title", right: "next" }}
                dateClick={handleDateClick}
                events={events}
                fixedWeekCount={false}
            />
        </div>
    );
};
