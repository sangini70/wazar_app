import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { COMPLIANCE_RULES, SEO_DATA } from '../constants';

const Compliance: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <h1 className="text-xl font-bold text-red-700">WAZRA BRAND STRATEGY & COMPLIANCE GUIDE</h1>
            <p className="text-sm text-red-600 mt-1">
              본 페이지는 내부 관계자 및 마케팅/개발팀을 위한 가이드라인입니다. 
              (실제 배포 시 일반 사용자에게는 노출되지 않도록 처리 필요)
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 border-b pb-2">1. 금칙어 및 대체어 가이드 (Compliance)</h2>
          <div className="grid gap-6 mb-12">
            {COMPLIANCE_RULES.map((rule, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">{rule.category}</h3>
                <p className="text-xs text-gray-500 mb-4">{rule.reason}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-bold text-red-500 mb-1">사용 금지 (Risk)</span>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {rule.forbidden.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-green-600 mb-1">권장 표현 (Safe)</span>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {rule.allowed.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 border-b pb-2">2. SEO Strategy (Meta Data)</h2>
          <div className="overflow-x-auto mb-12">
             <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-6 py-3">Page</th>
                    <th className="px-6 py-3">Title Tag</th>
                    <th className="px-6 py-3">Meta Description</th>
                    <th className="px-6 py-3">Keywords</th>
                  </tr>
                </thead>
                <tbody>
                  {SEO_DATA.map((seo, i) => (
                    <tr key={i} className="bg-white border-b">
                      <td className="px-6 py-4 font-bold text-slate-900">{seo.page}</td>
                      <td className="px-6 py-4">{seo.title}</td>
                      <td className="px-6 py-4">{seo.description}</td>
                      <td className="px-6 py-4">{seo.keywords.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>

          <h2 className="text-2xl font-bold mb-6 border-b pb-2">3. 후기(UGC) 검수 가이드</h2>
          <div className="bg-slate-50 p-6 rounded-lg border mb-12">
            <h4 className="font-bold mb-2">자동 필터링 및 관리자 검수 규칙</h4>
            <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700">
              <li><strong>질병 명칭 포함 시 비공개:</strong> 암, 당뇨, 혈압 등 특정 질병명이 포함된 후기는 즉시 비공개 처리.</li>
              <li><strong>단정적 표현 수정 요청:</strong> "이거 먹고 나았다" -> "컨디션 관리에 도움이 되었다"로 수정 유도.</li>
              <li><strong>체험단 표기:</strong> 무상 제공 받은 경우 반드시 "제품을 제공받아 작성된 후기입니다" 문구 포함 확인.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Compliance;