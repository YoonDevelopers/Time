

// 공휴일 데이터 타입
export interface Holiday {
  date: string;
  localName: string;
  name: string;
}

interface CalendarProps {
  year: number;
  holidays: Holiday[];
}

export const Calendar = ({ year, holidays }: CalendarProps) => {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const isHoliday = (day: number, month: number): boolean => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    // 공휴일 목록과 비교
    return holidays.some(holiday => {
      return holiday.date === formattedDate;
    });
  };

  const getDayClass = (dayIndex: number, monthIndex: number): string => {
    const dayOfWeek = new Date(year, monthIndex, dayIndex + 1).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 일요일(0), 토요일(6)
    const isHolidayFlag = isHoliday(dayIndex + 1, monthIndex);
    
    // 공휴일이면 배경과 텍스트 색상 변경, 주말이면 텍스트만 빨간색
    if (isHolidayFlag) {
      return "bg-red-500 text-white"; // 공휴일 배경 및 텍스트 빨간색
    }
    if (isWeekend) {
      return "text-red-500"; // 주말(토, 일)은 숫자만 빨간색
    }
    return "hover:bg-gray-200";
  };

  const getMonthHolidays = (monthIndex: number): Holiday[] => {
    return holidays.filter(holiday => {
      const holidayMonth = new Date(holiday.date).getMonth();
      return holidayMonth === monthIndex;
    });
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">{year} Calendar</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {months.map((month, monthIndex) => {
          const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
          const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

          const monthHolidays = getMonthHolidays(monthIndex); // 해당 월의 공휴일 목록

          return (
            <div key={month} className="bg-white p-4 rounded">
              <h3 className="text-center font-bold">{month}</h3>
              <div className="grid grid-cols-7 text-center gap-1">
                {["S", "M", "T", "W", "Th", "F", "Sa"].map((day) => (
                  <div key={day} className="font-bold">{day}</div>
                ))}
                {/* 빈 칸 채우기 (달력 시작 요일 맞추기) */}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={index} className="text-center"></div>
                ))}
                {/* 달력 날짜 표시 */}
                {Array.from({ length: daysInMonth }).map((_, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`text-center p-2 rounded ${getDayClass(dayIndex, monthIndex)}`}
                  >
                    {dayIndex + 1}
                  </div>
                ))}
              </div>

              {/* 해당 월의 공휴일 목록 표시 */}
              {monthHolidays.length > 0 && (
  <div className="mt-4">
    <ul>
      {Array.from(new Set(monthHolidays.map(holiday => `${new Date(holiday.date).getDate()}  ${holiday.localName}`))).map((holidayText, index) => (
        <li key={index}>
          {holidayText}
        </li>
      ))}
    </ul>
  </div>
)}
            </div>
          );
        })}
      </div>
    </>
  );
};