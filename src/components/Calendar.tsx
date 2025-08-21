"use client";

import { useEffect, useState } from "react";
import '@fullcalendar/common/main.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import styles from './styles/Calendar.module.css';

type CalendarProps = {
    onDateSelect: (date: string) => void;
};

type DiaryEvent = {
    title: string;
    date: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
};

export const Calendar = ({ onDateSelect }: CalendarProps): JSX.Element => {
    const [events, setEvents] = useState<DiaryEvent[]>([]);

    const handleDateClick = (arg: DateClickArg) => {
        onDateSelect(arg.dateStr);
    };

    useEffect(() => {
        fetch("/api/diary/list")
            .then((res) => res.json())
            .then((data) => {
                const diaries = Array.isArray(data)
                    ? data
                    : Array.isArray(data.diaries)
                        ? data.diaries
                        : [];

                if (diaries.length === 0) {
                    console.warn("日記データが空または不正な形式です:", data);
                }

                const diaryEvents = diaries.map((item: any) => ({
                    title: item.mood?.icon || "📖",
                    date: new Date(item.created_at).toISOString().split("T")[0],
                    display: "auto",
                }));

                setEvents(diaryEvents);
            })
            .catch((err) => {
                console.error("日記イベントの取得に失敗しました:", err);
            });
    }, []);

    return (
        <div className={styles.calendarContainer}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale="ja"
                headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                }}
                dateClick={handleDateClick}
                events={events}
                fixedWeekCount={false}
            />
        </div>
    );
};
