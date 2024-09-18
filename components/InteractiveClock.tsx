"use client";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";

import WorldClockItem from "./WorldClockItem";
import SettingsDropdown, {FontDropdown ,LanguageDropdown, TimeFormatDropdown } from "./DropdownMenu";
import { fonts } from "./font"; // Import the fonts list
import { useTranslations } from "next-intl";
import {  usePathname } from "next/navigation";
import {  getHolidays } from "./Holidays";
import {Calendar, Holiday} from "@/components/Calender";
// 이번 연도의 각 달의 시작 날짜를 생성하는 함수
function getMonthStartDates(year: number) {
  return Array.from({ length: 12 }, (_, index) => today(getLocalTimeZone()).set({
    year: year,
    month: index + 1,
    day: 1,
  }));
}
export default function InteractiveClock() {

  const t = useTranslations("HomePage");
  const pathname = usePathname();
    // Next.js에서 현재 로케일은 router의 locale 속성에서 확인합니다.
    const locale = pathname.split("/")[1];
    const year = new Date().getFullYear(); // 현재 연도 가져오기
    const monthStartDates = getMonthStartDates(year); // 올해의 각 달의 시작 날짜 배열

  const [time, setTime] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showOnlyTime, setShowOnlyTime] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [font, setFont] = useState(fonts[0].font);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [timeFormat, setTimeFormat] = useState("24"); // 시간 형식 상태 추가

useEffect(() => {
  if (selectedCity) {
    getHolidays(selectedCity).then((holidayData) => {
      
      setHolidays(holidayData);
    });
  }
}, [selectedCity]);

useEffect(() => {
  if (typeof window !== "undefined") {  // 클라이언트에서만 실행되도록 설정
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }
}, []);

const worldClocks = [
  // { city: "", timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { city: "LA", timeZone: "America/Los_Angeles" },
  { city: "New York", timeZone: "America/New_York" },
  { city: "London", timeZone: "Europe/London" },
  { city: "Paris", timeZone: "Europe/Paris" },
  { city: "Dubai", timeZone: "Asia/Dubai" },
  { city: "Beijing", timeZone: "Asia/Shanghai" },
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "Seoul", timeZone: "Asia/Seoul" },  // 한국 서울 추가
];


  const handleCityClick = (city: string) => {
    setSelectedCity((prevCity) => (prevCity === city ? null : city));
    setShowCalendar(false);
  };

  const handleTimeClick = () => {
    setShowOnlyTime((prev) => !prev);
    setShowCalendar(false);
  };

  const handleCalendarClick = () => {
    setShowCalendar((prev) => !prev);
    setShowOnlyTime(false);
  };
  const handleTimeFormatChange = (key: string) => {
    setTimeFormat(key); // 시간 형식을 업데이트
  };
  const getTimeInTimeZone = (timeZone: string): Date => {
    const dateStr = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }).format(new Date());
  
    const [hour, minute, second] = dateStr.split(":").map(Number); // 시간, 분, 초로 분리
    const now = new Date(); // 현재 날짜
    now.setHours(hour, minute, second); // 시간 설정
  
    return now; // Date 객체 반환
  };
  
  const displayTime = selectedCity
  ? getTimeInTimeZone(worldClocks.find((clock) => clock.city === selectedCity)!.timeZone)
  : new Date(); // 로컬 시간을 사용

  const handleFontChange = (key: string) => {
    const selectedFont = fonts.find((font) => font.key === key);
    if (selectedFont) {
      setFont(selectedFont.font);
    }
  };


  return (
    <main className={font.className}>
      {/* 언어 전환 버튼 */}
 
      <div className="absolute top-4 right-4">
        <SettingsDropdown handleFontChange={handleFontChange} />
      
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        {showOnlyTime ? (
          <Button
            onClick={handleTimeClick}
            variant="light"
            className="text-8xl font-bold mb-4 min-w-[200px] h-[150px] flex items-center justify-center text-center"
          >
            {displayTime
              ? displayTime.toLocaleTimeString("en-US", {
                  hour12: timeFormat === "12", // 시간 형식 적용
                })
              : t(`loading`)}
          </Button>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">
  {selectedCity && selectedCity !== "Current Location" ? (
    `${selectedCity}의 현재 시간은`
  ) : (
    t("currentTime") // 기본 메시지
  )}
</h1>
            <Button
              variant="light"
              onClick={handleTimeClick}
              className="text-8xl font-bold mb-4 min-w-[200px] h-[150px] flex items-center justify-center text-center"
            >
                {displayTime
                ? displayTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: timeFormat === "12", // 시간 형식 적용
                  })
                : t(`loading`)}
            </Button>
            <div className="flex space-x-2 mb-8">
              <Button onClick={handleCalendarClick} className="text-xl">
                {displayTime
                  ? displayTime.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "numeric",
                      day: "numeric",
                    })
                  : t(`loading`)}
              </Button>
            </div>
            {showCalendar && (
  <div className=" mb-4">
     <Calendar year={year} holidays={holidays} />
  </div>
)}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {worldClocks.map((clock) => (
                <WorldClockItem
                  key={clock.city}
                  city={clock.city}
                  timeZone={clock.timeZone}
                  onClick={() => handleCityClick(clock.city)}
                  isSelected={selectedCity === clock.city}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
