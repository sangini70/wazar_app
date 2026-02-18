import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">{BRAND_NAME}</h3>
            <p className="text-sm leading-relaxed mb-4">
              연구의 깊이가 만든 차이. 김부열 박사의 기술력으로 탄생한 프리미엄 워터입니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/story" className="hover:text-white transition">Brand Story</Link></li>
              <li><Link to="/technology" className="hover:text-white transition">Technology</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">제휴 문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/compliance" className="hover:text-white transition">브랜드 가이드라인</Link></li>
              <li><a href="#" className="hover:text-white transition">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-xs text-slate-500">
          <p className="mb-2 font-bold text-slate-400">필수 고지 사항</p>
          <p className="mb-1">1. 본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.</p>
          <p className="mb-4">2. 개인의 생활습관과 섭취 상황에 따라 체감에는 차이가 있을 수 있습니다.</p>
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME} Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;