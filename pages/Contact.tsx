import React, { useState } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData(prev => ({ ...prev, agree: e.target.checked }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.agree) {
        alert("개인정보 수집 및 이용에 동의해주세요.");
        return;
    }
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 min-h-screen bg-slate-50 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">문의가 접수되었습니다.</h2>
        <p className="text-slate-600 mb-8">담당자가 내용 확인 후 {formData.email}로 3영업일 이내에 연락드리겠습니다.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <SectionWrapper>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">제휴 및 대량 구매</h1>
          <p className="text-center text-gray-500 mb-8">기업 선물, 정기 구독, 호텔 납품 등 비즈니스 문의</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">담당자 성함 (필수)</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">이메일 (필수)</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">회사/단체명 (선택)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">문의 내용</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="예: 임직원 선물용 100세트 견적 요청합니다."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                id="agree"
                type="checkbox"
                checked={formData.agree}
                onChange={handleCheckbox}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="agree" className="ml-2 block text-xs text-gray-500">
                (필수) 문의 처리를 위해 최소한의 개인정보(성함, 이메일)를 수집 및 이용하는 것에 동의합니다. 
                수집된 정보는 문의 처리 목적 외에는 사용되지 않으며 3년 후 파기됩니다.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-md font-bold hover:bg-slate-800 transition duration-200"
            >
              문의하기
            </button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;