import '@fullcalendar/common/main.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import styles from './Calendar.module.css';

type CalendarProps = {
  onDateSelect: (date: string) => void;
};

export const Calendar = ({ onDateSelect }: CalendarProps): JSX.Element => {
  const handleDateClick = (arg: DateClickArg) => {
    onDateSelect(arg.dateStr);
  };

  return (
    <div className={styles.calendarContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale="en"
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        dateClick={handleDateClick}
        events={[
          { id: '1', title: 'Test Event', date: '2025-06-16' },
        ]}
        fixedWeekCount={false}
      />
    </div>
  );
};
