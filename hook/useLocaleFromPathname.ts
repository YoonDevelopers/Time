import { usePathname } from "next/navigation";

// 커스텀 훅으로 변환
export function useLocaleFromPathname(): string {
  const pathname = usePathname(); // 현재 경로 가져오기
  const segments = pathname.split('/'); // 경로를 '/'로 나누기
  const locale = segments[1]; // 첫 번째 세그먼트에서 로케일 추출
  return locale; // 로케일 반환
}
