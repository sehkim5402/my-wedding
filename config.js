/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.png       — 메인 사진 (1장)
 *    images/story/2.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "세환",
    lastName: "김",
    fullName: "김세환",
    father: "김상락",
    mother: "구자윤",
    fatherDeceased: true, // 故인이면 true
    motherDeceased: false,
  },

  bride: {
    name: "가영",
    lastName: "김",
    fullName: "김가영",
    father: "김봉식",
    mother: "최향미",
    fatherDeceased: true,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-10-09",        // YYYY-MM-DD
    time: "16:20",             // HH:MM (24시간)
    dayOfWeek: "금요일",
    venue: "광명 아이벡스 컨벤션",
    hall: "5층",
    address: "경기 광명시 양지로 17 AK플라자 광명점 5층",
    tel: "02-897-1002",
    mapLinks: {
      kakao: "https://kko.to/CKAfW2mt68",
      naver: "https://naver.me/GkURxNA2",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n삶의 여정 속에서 만난 소중한 인연,\n이제 평생을 함께 하려 합니다.\n\n귀한 걸음 하시어\n저희의 새 출발을 축복해 주세요.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "신한은행", number: "110-123-456789" },
      { role: "아버지", name: "홍판서", bank: "국민은행", number: "123-45-6789012" },
      { role: "어머니", name: "춘섬", bank: "우리은행", number: "1002-345-678901" },
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "234-56-7890123" },
      { role: "아버지", name: "김철수", bank: "농협", number: "301-0123-4567-01" },
      { role: "어머니", name: "이미영", bank: "기업은행", number: "012-345678-01-012" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "",
    title: "김세환 ♥ 김가영 결혼합니다",
    description: "2026년 10월 09일 금요일 오후 4시 20분\n광명 아이벡스 컨벤션",
  },

  meta: {
    title: "김세환 ♥ 김가영 결혼합니다",
    description: "2026년 10월 09일 금요일 오후 4시 20분, 광명 아이벡스 컨벤션",
  },
};
