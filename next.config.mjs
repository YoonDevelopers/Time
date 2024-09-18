import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    dest: 'public', // 서비스 워커 파일이 저장될 위치
    disable: process.env.NODE_ENV === 'development', // 개발 모드에서는 PWA 비활성화
});

const withNextIntl = createNextIntlPlugin();

export default  withNextIntl(nextConfig);
