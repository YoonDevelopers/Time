"use client";
export async function getHolidays(city: string) {
    const regionCode = (city === "Current Location" || city === null)   ? getRegionCodeByTimeZone() : getRegionCodeByCity(city);
    const year = new Date().getFullYear(); // 현재 년도 동적으로 가져오기
  
    if (!regionCode) {
      throw new Error("Region code not found for the selected city or time zone");
    }
  
    // Nager.Date API를 사용하여 해당 국가의 공휴일 가져오기 (년도 동적)
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${regionCode}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch holidays");
    }
  
    const holidays = await response.json();
    console.log(holidays);
    return holidays; // API에서 공휴일 목록 반환
  }
  
  // 타임존에 맞는 국가 코드 반환
  function getRegionCodeByTimeZone(): string | null {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const timeZoneMap: { [key: string]: string } = {
      "America/Los_Angeles": "US",  // 미국
      "America/New_York": "US",     // 미국
      "Europe/London": "GB",        // 영국
      "Europe/Paris": "FR",         // 프랑스
      "Asia/Dubai": "AE",           // 아랍에미리트
      "Asia/Shanghai": "CN",        // 중국
      "Asia/Tokyo": "JP",           // 일본
      "Asia/Seoul": "KR",           // 한국
      // 다른 타임존은 필요에 따라 추가
    };
  
    return timeZoneMap[timeZone] || null; // 타임존에 맞는 국가 코드 반환
  }
  
  // 도시 이름에 맞는 국가 코드 반환
  function getRegionCodeByCity(city: string): string | null {
    const regionMap: { [key: string]: string } = {
      LA: "US",           // 미국 캘리포니아
      "New York": "US",    // 미국 뉴욕
      London: "GB",        // 영국
      Paris: "FR",         // 프랑스
      Dubai: "AE",         // 아랍에미리트
      Beijing: "CN",       // 중국
      Tokyo: "JP",         // 일본
      Seoul: "KR",         // 한국
    };
  
    return regionMap[city] || null; // 도시를 찾지 못하면 null 반환
  }
  