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

  // 📅 登録済み日記をイベントに変換
  useEffect(() => {
    fetch("/api/diary/list")
      .then((res) => res.json())
      .then((data) => {
        const diaryEvents = data.map((item: any) => ({
          title: "📖",
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
        locale="en"
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
