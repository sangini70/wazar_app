import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Beaker, ShieldCheck, Clock } from 'lucide-react';
import { MAIN_HEADLINE, DR_NAME, PATENT_COUNT } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* S1: Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://picsum.photos/seed/water1/1920/1080" 
            alt="Water Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {MAIN_HEADLINE}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            75개의 특허 기술, 평생의 연구.<br/>
            와즈라는 단순한 물이 아닙니다. 연구의 결정체입니다.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://www.coupang.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              구매하기 <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/story" 
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition"
            >
              브랜드 스토리 보기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* S2: Price Defense */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">"물인데 왜 다른가요?"</h2>
            <p className="text-slate-600">와즈라가 프리미엄일 수밖에 없는 4가지 이유</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "특허 기술 적용", desc: "75개 특허 기반의 독자적인 공정 시스템" },
              { icon: <Clock className="w-8 h-8" />, title: "연구의 시간", desc: "단기간 생산이 아닌 오랜 연구 데이터의 집약" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "엄격한 품질", desc: "타협하지 않는 까다로운 품질 관리 기준" },
              { icon: <Beaker className="w-8 h-8" />, title: "순수함의 깊이", desc: "인공 첨가물 없이 기술로 완성한 순수성" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Founder Proof */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
               <img 
                src="https://lh3.googleusercontent.com/d/1PKqBFCFpqwokp7j_szHQPkD1dMOzEur4" 
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = "https://picsum.photos/seed/man/600/800";
                }}
                alt="김부열 박사" 
                className="rounded-lg shadow-2xl w-full max-w-md object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
                FOUNDER'S NOTE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "나는 물 장사가 아닙니다.<br/>
                <span className="text-blue-500">연구자입니다.</span>"
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                평생을 공기 정화 기술에 바쳤습니다. 눈에 보이지 않는 것을 맑게 하는 기술,
                그 정점에서 나는 물을 만났습니다. 와즈라는 단순한 상품이 아니라, 
                내 연구 인생의 결정체입니다.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">{PATENT_COUNT}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Patents Held</p>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">40+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Years Research</p>
                </div>
              </div>
              <Link to="/story" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                연구 스토리 더 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Product Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">프리미엄 워터 루틴</h2>
            <p className="text-slate-600">당신의 하루를 채우는 가장 순수한 선택</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm text-center">
                <h3 className="text-xl font-bold mb-4">Morning Routine</h3>
                <p className="text-gray-600 mb-4">기상 직후, 미온수의 와즈라 한 잔으로 깨어나는 몸의 감각을 느껴보세요.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm text-center transform md:-translate-y-4 border-t-4 border-t-blue-500">
                <h3 className="text-xl font-bold mb-4">Daily Hydration</h3>
                <p className="text-gray-600 mb-4">갈증이 나기 전, 꾸준한 섭취. 와즈라는 목넘김이 달라 부담 없이 섭취할 수 있습니다.</p>
                <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">Best Choice</span>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm text-center">
                <h3 className="text-xl font-bold mb-4">Evening Calm</h3>
                <p className="text-gray-600 mb-4">잠들기 전 가벼운 한 모금. 하루를 정리하는 순수한 의식입니다.</p>
             </div>
          </div>
        </div>
      </section>

      {/* S6: CTA Bar */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">지금, 변화를 경험하세요</h2>
          <p className="text-blue-200 mb-10">
            와즈라는 대량 생산되지 않습니다. <br/>
            지금 준비된 수량이 소진되기 전, 프리미엄을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.coupang.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              쿠팡 로켓배송으로 구매하기
            </a>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border border-blue-400 text-white rounded-full font-bold hover:bg-blue-800 transition"
            >
              대량 구매 / 제휴 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;