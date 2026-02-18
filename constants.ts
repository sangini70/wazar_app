import { FaqItem, ComplianceRule, SeoMeta } from './types';

// 브랜드 기본 정보
export const BRAND_NAME = "WAZRA";
export const TAGLINE = "연구의 깊이가 만든 차이";
export const DR_NAME = "김부열 박사";
export const PATENT_COUNT = 75;

// SEO 메타데이터
export const SEO_DATA: SeoMeta[] = [
  {
    page: "Home",
    title: "WAZRA WATER | 김부열 박사의 75개 특허 기술이 담긴 프리미엄 워터",
    description: "단순한 물이 아닙니다. 연구의 정수가 담긴 와즈라 워터. 프리미엄 수분 섭취 루틴을 시작하세요.",
    keywords: ["프리미엄 워터", "김부열 박사", "연구 개발", "프리미엄 생수", "수분 섭취"]
  },
  {
    page: "Story",
    title: "WAZRA Story | 공기에서 물로, 연구의 여정",
    description: "평생을 공기 정화 기술에 바친 김부열 박사가 왜 물을 선택했는지, 그 연구 철학을 소개합니다.",
    keywords: ["연구 철학", "특허 기술", "브랜드 스토리"]
  }
];

// 금칙어 리스트 (컴플라이언스)
export const COMPLIANCE_RULES: ComplianceRule[] = [
  {
    category: "질병/치료",
    forbidden: ["암 예방", "당뇨 개선", "혈압 조절", "염증 제거", "치료"],
    allowed: ["건강한 루틴", "수분 보충", "프리미엄 라이프스타일", "연구 기술 적용"],
    reason: "식품표시광고법 위반 소지 (의약품 오인 혼동)"
  },
  {
    category: "효능 단정",
    forbidden: ["효과가 있다", "낫는다", "해결된다", "즉효"],
    allowed: ["도움을 줄 수 있음", "경험해보세요", "관리를 위한 선택"],
    reason: "과대광고 및 허위사실 유포 방지"
  }
];

// FAQ 데이터
export const FAQ_DATA: FaqItem[] = [
  {
    category: 'price',
    question: "시중 생수보다 가격이 높은 이유는 무엇인가요?",
    answer: "와즈라는 대량 생산되는 일반 생수와 달리, 김부열 박사의 특허 기술을 적용한 공정을 거쳐 한정된 수량만 생산됩니다. 단순한 취수가 아닌, 연구 기술이 집약된 프리미엄 공정의 가치입니다."
  },
  {
    category: 'patent',
    question: "75개 특허는 어떤 분야인가요?",
    answer: "주로 공기 정화, 유체 역학, 그리고 환경 개선 기술에 관한 국내외 특허입니다. 와즈라는 이러한 김부열 박사의 평생 연구 데이터와 기술적 노하우를 기반으로 탄생했습니다."
  },
  {
    category: 'product',
    question: "일반 물과 맛이 다른가요?",
    answer: "미세한 차이가 있을 수 있으나, 인공 첨가물이 들어가지 않은 순수한 물입니다. 목넘김이 부드럽고 깔끔하다는 평가를 주로 받습니다."
  },
  {
    category: 'product',
    question: "어떻게 마시는 것이 가장 좋은가요?",
    answer: "기상 직후 미온수로 한 잔, 그리고 일상 속에서 갈증을 느끼기 전에 꾸준히 섭취하는 '와즈라 루틴'을 권장합니다. 차갑게 드시는 것보다 상온 보관 후 드시는 것을 추천합니다."
  },
  {
    category: 'shipping',
    question: "체험팩 이벤트는 언제까지인가요?",
    answer: "현재 진행 중인 1+1 체험팩은 한정 수량 소진 시 조기 마감될 수 있습니다. 구매 페이지에서 재고 상황을 확인해주세요."
  },
];

export const HERO_HEADLINES = [
  "단순한 물이 아닙니다. 연구의 결과입니다.",
  "75개의 특허, 하나의 물.",
  "공기를 연구하던 박사가 물을 선택한 이유.",
  "타협하지 않는 프리미엄, 와즈라.",
  "당신의 수분 루틴에 연구를 더하다."
];

// 선택된 메인 헤드라인
export const MAIN_HEADLINE = HERO_HEADLINES[2]; // "공기를 연구하던 박사가 물을 선택한 이유."