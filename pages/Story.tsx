import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { DR_NAME } from '../constants';

const Story: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-12">Brand Story</h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/3 shrink-0">
               <img 
                src="https://lh3.googleusercontent.com/d/1PKqBFCFpqwokp7j_szHQPkD1dMOzEur4" 
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = "https://picsum.photos/seed/man/600/800";
                }}
                alt="김부열 박사" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="mt-4 text-center">
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      FOUNDER
                  </span>
                  <p className="font-bold text-slate-800">{DR_NAME}</p>
              </div>
            </div>

            <div className="prose prose-lg prose-slate flex-1">
              <h3 className="text-2xl font-bold text-blue-900 mt-0 mb-6">
                "공기에서 시작된 질문,<br/>물에서 찾은 답"
              </h3>
              <p className="text-gray-600 leading-8 mb-8">
                {DR_NAME}는 지난 40여 년간 공기 정화 기술을 연구해왔습니다. 
                눈에 보이지 않는 미세한 입자를 제어하고, 오염된 공기를 정화하여 
                사람들에게 맑은 숨을 돌려주는 것. 그것이 그의 사명이었습니다.
              </p>
              <p className="text-gray-600 leading-8">
                수많은 특허와 기술적 성취를 이룬 어느 날, 그는 새로운 질문을 던졌습니다.
                <br/>
                <span className="font-bold text-slate-800">"우리가 마시는 물은 과연 완벽한가?"</span>
              </p>
              
              <div className="my-8 border-l-4 border-blue-600 pl-6 py-2 bg-slate-50">
                <p className="text-lg italic font-serif text-slate-800">
                  "공기를 다루는 기술은 결국 유체를 다루는 기술입니다.
                  나는 공기 정화의 정밀한 기술을 물에 적용해보기로 했습니다."
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate mx-auto border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              연구실에서 탄생한 물
            </h3>
            <p className="text-gray-600 leading-8 mb-8">
              와즈라는 자연에서 단순히 퍼올린 물이 아닙니다. 
              {DR_NAME}의 특허 기술이 적용된 공정을 통과하며, 
              물 분자 하나하나에 연구의 정수가 담깁니다.
            </p>
            <p className="text-gray-600 leading-8">
              우리는 이것을 '음료'라고 부르기보다 '작품'이라 부르고 싶습니다.
              와즈라는 타협하지 않는 연구자의 고집이 만들어낸 결과물입니다.
            </p>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Timeline of Innovation</h2>
          <div className="space-y-8">
            {[
              { year: "1985", title: "연구의 시작", desc: "공기 정화 메커니즘 기초 연구 착수" },
              { year: "1998", title: "핵심 특허 획득", desc: "유체 역학 관련 주요 특허 등록" },
              { year: "2010", title: "기술의 확장", desc: "환경 개선 기술로 연구 분야 확장" },
              { year: "2019", title: "물의 재해석", desc: "정화 기술을 수처리 공정에 접목하는 실험 성공" },
              { year: "2024", title: "WAZRA 탄생", desc: "프리미엄 워터 브랜드 런칭" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12 items-center md:text-left text-center">
                <div className="w-24 text-2xl font-bold text-blue-600">{item.year}</div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-sm w-full">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Story;