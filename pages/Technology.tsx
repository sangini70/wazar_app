import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Shield, BookOpen, Globe } from 'lucide-react';
import { PATENT_COUNT } from '../constants';

const Technology: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper className="bg-slate-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology & Patents</h1>
          <p className="text-slate-400 text-lg">
            숫자가 증명하는 기술력. {PATENT_COUNT}개의 특허가 와즈라의 근간입니다.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">특허 보유 현황</h3>
            <p className="text-gray-600">
              국내외 총 {PATENT_COUNT}건의 특허를 보유하고 있습니다.
              단순 아이디어가 아닌, 검증된 기술 자산입니다.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">연구 분야</h3>
            <p className="text-gray-600">
              공기 정화, 유체 역학, 환경 개선 등
              인간의 삶을 쾌적하게 만드는 기초 과학 기술에 집중합니다.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">글로벌 스탠다드</h3>
            <p className="text-gray-600">
              한국뿐만 아니라 미국, 유럽 등 선진국 기준에 부합하는
              기술력을 확보하기 위해 끊임없이 연구합니다.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">주요 관련 특허 (예시)</h2>
          <div className="space-y-4">
            {[
              "공기 정화 시스템 및 그 제어 방법 (KR 10-XXXX-XXXX)",
              "유체 순환 및 필터링 기술 (US Patent XXXXXXX)",
              "고효율 환경 개선 장치 특허",
              "미세 입자 제거를 위한 유체 역학 설계",
              "자연 모사형 정화 기술"
            ].map((patent, idx) => (
              <div key={idx} className="bg-white p-4 rounded border border-gray-200 flex items-center gap-4">
                <span className="text-blue-600 font-mono text-sm">PATENT</span>
                <span className="text-gray-800 font-medium">{patent}</span>
              </div>
            ))}
            <p className="text-xs text-gray-400 mt-4 text-center">
              * 보안상의 이유로 전체 리스트 중 일부만 공개합니다. 상세 내용은 제휴 문의를 통해 확인 가능합니다.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Technology;