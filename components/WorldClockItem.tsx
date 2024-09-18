"use client";
import { useEffect, useState } from "react";
import { Card } from "@nextui-org/card";

interface WorldClockItemProps {
  city: string;
  timeZone: string; // offset 대신 timeZone을 사용
  onClick: () => void;
  isSelected: boolean;
}

export default function WorldClockItem({ city, timeZone, onClick, isSelected }: WorldClockItemProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24시간 형식
      }).format(new Date());
      setTime(formattedTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  if (!time) return null;

  return (
    <Card isPressable onClick={onClick} className={`p-4 ${isSelected ? "ring-2 ring-blue-500" : ""}`}>
      <h3 className="font-bold">{city}</h3>
      <p>{time}</p>
    </Card>
  );
}
