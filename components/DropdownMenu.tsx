"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as NextUIDropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // 페이지 경로 가져오기
import { fonts } from "./font"; // Import the fonts array from fonts.ts
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"; // 설정 아이콘 (Heroicons 사용)
interface SettingsDropdownProps {
  handleFontChange: (font: React.Key) => void;
  handleTimeFormatChange?: (format: React.Key) => void;
}
// 지원하는 로케일 목록
const supportedLocales = ['en', 'ko'];

export default function SettingsDropdown({ handleFontChange }: SettingsDropdownProps) {
  return (
    <div className="absolute top-4 right-4">
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <EllipsisHorizontalIcon className="w-6 h-6" />
          </button>
        </DropdownTrigger>
        <NextUIDropdownMenu>
          <DropdownItem key="font">
            <FontDropdown handleFontChange={handleFontChange} />
          </DropdownItem>
          <DropdownItem key="language">
            <LanguageDropdown />
          </DropdownItem>
          {/* <DropdownItem key="timeFormat">
            <TimeFormatDropdown handleTimeFormatChange={handleTimeFormatChange} />
          </DropdownItem> */}
        </NextUIDropdownMenu>
      </Dropdown>
    </div>
  );
}
// 폰트 선택 드롭다운
export function FontDropdown({ handleFontChange }: { handleFontChange: (key: React.Key) => void }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">Change Font</Button>
      </DropdownTrigger>
      <NextUIDropdownMenu
        aria-label="Font Selection"
        onAction={handleFontChange}
        className="max-h-60 overflow-y-auto"
      >
        {fonts.map((font) => (
          <DropdownItem key={font.key} style={{ fontFamily: font.font.style.fontFamily }}>
            {font.name}
          </DropdownItem>
        ))}
      </NextUIDropdownMenu>
    </Dropdown>
  );
}

// 언어 설정 드롭다운
export function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로 가져오기

  // 언어 변경 함수
  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/'); // 경로를 '/'로 분리
    const currentLocale = supportedLocales.includes(segments[1]) ? segments[1] : null; // 현재 로케일 확인

    // 로케일이 포함된 경로를 새 로케일로 변경
    if (currentLocale) {
      segments[1] = locale; // 기존 로케일을 새 로케일로 대체
    } else {
      segments.unshift(locale); // 로케일이 없는 경우 새 로케일 추가
    }

    const newPathname = segments.join('/'); // 경로 재조립
    router.push(newPathname); // 새 경로로 이동
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">Change Language</Button>
      </DropdownTrigger>
      <NextUIDropdownMenu
        aria-label="Language Selection"
        onAction={(locale) => changeLanguage(locale as string)}
        className="max-h-60 overflow-y-auto"
      >
        <DropdownItem key="en">English</DropdownItem>
        <DropdownItem key="ko">한국어</DropdownItem>
      </NextUIDropdownMenu>
    </Dropdown>
  );
}

// 시간 형식 선택 드롭다운
export function TimeFormatDropdown({ handleTimeFormatChange }: { handleTimeFormatChange: (key: React.Key) => void }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">Change Time Format</Button>
      </DropdownTrigger>
      <NextUIDropdownMenu
        aria-label="Time Format Selection"
        onAction={handleTimeFormatChange}
        className="max-h-60 overflow-y-auto"
      >
        <DropdownItem key="24">24-hour</DropdownItem>
        <DropdownItem key="12">AM/PM</DropdownItem>
      </NextUIDropdownMenu>
    </Dropdown>
  );
}
