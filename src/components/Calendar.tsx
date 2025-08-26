"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import { useEffect, useRef } from "react";
import styles from "./styles/Calendar.module.css";

type DiaryEvent = { title: string; date: string };
type DiaryData = {
    diaryID: string;
    created_at?: string;
    mood?: { label: string; icon: string };
};

interface CalendarProps {
    onDateSelect: (date: string) => void;
    diaryList: DiaryData[];
}

export const Calendar = ({ onDateSelect, diaryList }: CalendarProps) => {
    const calendarRef = useRef<FullCalendar>(null);

    useEffect(() => {
        const calendarApi = calendarRef.current?.getApi();
        if (!calendarApi) return;

        // 既存イベントをすべて削除
        calendarApi.removeAllEvents();

        // diaryList からイベントを生成して追加
        diaryList.forEach((item) => {
            if (item.created_at) {
                calendarApi.addEvent({
                    title: item.mood?.icon || "📖",
                    date: item.created_at.slice(0, 10),
                });
            }
        });
    }, [diaryList]);

    const handleDateClick = (arg: DateClickArg) => {
        onDateSelect(arg.dateStr);
    };

    return (
        <div className={styles.calendarContainer}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale="ja"
                headerToolbar={{ left: "prev", center: "title", right: "next" }}
                dateClick={handleDateClick}
                fixedWeekCount={false}
            />
        </div>
    );
};
