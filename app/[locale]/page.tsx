"use client";
import { I18nProvider } from "@react-aria/i18n";
import InteractiveClock from "@/components/InteractiveClock";
import { useLocaleFromPathname } from "../../hook/useLocaleFromPathname"; // 커스텀 훅 import

export default function Page() {
  const locale = useLocaleFromPathname(); // 커스텀 훅 사용

  return (
    <I18nProvider locale={locale} > {/* 추출한 로케일을 I18nProvider에 전달 */}
      <InteractiveClock />
    </I18nProvider>
  );
}
