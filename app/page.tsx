'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  MessageSquare, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  Phone
} from 'lucide-react';

export default function B2CHome() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '에어컨 분해청소',
    region: '서울/경기 전지역',
    memo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }
    alert(`[신청 완료] ${formData.name}님, 담당 전문 엔지니어가 빠른 시간 내에 연락드리겠습니다.`);
    setFormData({ name: '', phone: '', service: '에어컨 분해청소', region: '서울/경기 전지역', memo: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      
      {/* 1. 최상단 헤더 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BANFF CLEANING" className="h-10 object-contain rounded-lg" />
            <span className="font-extrabold text-[#1E3653] text-lg tracking-tight hidden sm:inline">
              BANFF CLEANING <span className="text-xs font-semibold bg-[#8FD3D5] text-[#1E3653] px-2 py-0.5 rounded-full ml-1">HOMECARE</span>
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold">
            <a href="#services" className="hover:text-[#1E3653] transition-colors hidden md:inline">서비스 안내</a>
            <a href="#process" className="hover:text-[#1E3653] transition-colors hidden md:inline">작업 공정</a>
            <a href="#quote" className="bg-[#1E3653] text-white px-4 py-2 rounded-xl hover:bg-[#2a4a70] transition-all shadow-sm">
              무료 방문견적 신청
            </a>
          </div>
        </div>
      </header>

      {/* 2. 히어로 섹션 */}
      <section className="bg-gradient-to-br from-[#1E3653] via-[#244266] to-[#0f1f33] text-white py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm text-[#8FD3D5] font-medium">
            <Sparkles className="w-4 h-4" /> 프리미엄 친환경 가전/홈케어 전문 브랜드
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            우리 집 숨쉬는 공기부터 달라집니다 <br className="hidden sm:inline" />
            <span className="text-[#8FD3D5]">100% 완전 분해 고압 세척</span> 케어
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            보이지 않는 곳의 곰팡이와 유해세균까지 완전 제거. <br />
            전문 엔지니어의 정밀 종합 진단과 책임 A/S를 약속드립니다.
          </p>
          
          {/* 주요 상담 버튼 모음 */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="http://pf.kakao.com/_KdxgrX" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#FEE500] text-[#191919] font-bold rounded-2xl shadow-md hover:brightness-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-[#191919]" /> 카카오톡 1:1 상담
            </a>
            <a 
              href="https://talk.naver.com/profile/wzb7nyu" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#03CF5D] text-white font-bold rounded-2xl shadow-md hover:brightness-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-5 h-5 fill-white" /> 네이버 톡톡 문의
            </a>
            <a 
              href="#quote" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#8FD3D5] text-[#1E3653] font-extrabold rounded-2xl shadow-lg hover:bg-[#a6e2e4] transition-all text-center text-sm"
            >
              간편 견적받기 ➔
            </a>
          </div>
        </div>
      </section>

      {/* 3. 신뢰 지표 바 */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-[#1E3653]">99.9%</div>
            <div className="text-xs text-slate-500 font-medium">친환경 항균 살균율</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-[#1E3653]">100%</div>
            <div className="text-xs text-slate-500 font-medium">전문 엔지니어 직접 방문</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-[#1E3653]">책임 A/S</div>
            <div className="text-xs text-slate-500 font-medium">작업 후 품질 보증</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-[#1E3653]">★ 4.9 / 5.0</div>
            <div className="text-xs text-slate-500 font-medium">실제 고객 만족도</div>
          </div>
        </div>
      </section>

      {/* 4. 서비스 품목 */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3653]">
            밴프 클리닝 맞춤 케어 서비스
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">원하시는 가전/가구 케어 서비스를 선택해 보세요.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#1E3653]">에어컨 분해 고압세척</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              벽걸이, 스탠드, 시스템 에어컨 내부의 열교환기와 팬에 쌓인 곰팡이/악취 완전 제거
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 친환경 약제 고압 세척</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 자외선/고온 스팀 살균</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#1E3653]">세탁기 완전 분해세척</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              통돌이/드럼 세탁조 외벽과 세제찌꺼기, 오염물질을 아우터 드럼까지 완전 분해
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 세탁조 내부 미세오염 제거</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 배수관 및 고무패킹 케어</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#1E3653]">매트리스 / 패브릭 케어</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              집먼지 진드기, 미세먼지 건식 추출 및 오염 자국 습식 딥클리닝
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 초강력 UV 진드기 케어</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 얼룩 제거 및 항균 코팅</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. 4단계 작업 공정 */}
      <section id="process" className="py-16 bg-white border-y border-slate-200 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3653]">
              체계적인 4단계 서비스 공정
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">체계화된 정밀 가이드에 따라 안전하게 작업합니다.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: '사전 제품 점검', desc: '작동 상태 및 오염도 측정' },
              { step: '02', title: '부품 완전 분해', desc: '부품별 정밀 분해 작업' },
              { step: '03', title: '친환경 고압 세척', desc: '전용 약제 및 고압 세척' },
              { step: '04', title: '살균 및 조립 검수', desc: '스팀 살균 후 정상 작동 확인' },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
                <span className="text-xs font-black text-[#8FD3D5] bg-[#1E3653] px-2.5 py-1 rounded-full">
                  STEP {item.step}
                </span>
                <h4 className="font-bold text-sm text-[#1E3653] pt-1">{item.title}</h4>
                <p className="text-[11px] text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 견적/예약 신청 폼 */}
      <section id="quote" className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">QUICK BOOKING</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3653]">무료 방문 견적 & 예약 신청</h2>
            <p className="text-slate-500 text-xs sm:text-sm">정보를 남겨주시면 담당 엔지니어가 빠르게 안내해 드립니다.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">고객성함 *</label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E3653]"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-slate-700">연락처 *</label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E3653]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">희망 서비스 선택</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E3653] bg-white"
                >
                  <option value="에어컨 분해청소">에어컨 분해청소 (벽걸이/스탠드/시스템)</option>
                  <option value="세탁기 완전분해">세탁기 완전분해 (통돌이/드럼)</option>
                  <option value="매트리스/소파 케어">매트리스 / 소파 케어</option>
                  <option value="종합 홈케어 상담">종합 홈케어 상담</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-bold text-slate-700">방문 희망지역</label>
                <input
                  type="text"
                  placeholder="예: 서울 강남구 / 경기 김포시"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E3653]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">추가 요청사항</label>
              <textarea
                rows={3}
                placeholder="방문 희망 날짜나 제품 모델명 등을 적어주시면 더 정확한 안내가 가능합니다."
                value={formData.memo}
                onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E3653]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1E3653] text-white font-extrabold text-base rounded-2xl shadow-lg hover:bg-[#2a4a70] transition-all"
            >
              상담 및 방문견적 신청하기 ➔
            </button>
          </form>
        </div>
      </section>

      {/* 7. 푸터 */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-xs border-t border-slate-800 mb-20 sm:mb-0">
        <div className="max-w-5xl mx-auto space-y-4 text-center sm:text-left">
          <div className="font-extrabold text-white text-base">BANFF CLEANING</div>
          <p className="leading-relaxed text-slate-400">
            상호명: 밴프 클리닝 | 대표: 김승기 <br />
            주소: 경기도 김포시 | 서비스 지역: 서울, 경기, 인천 수도권 전지역 <br />
            고객센터: 카카오톡 1:1 상담 / 네이버 톡톡 지원
          </p>
          <div className="pt-2 text-slate-400 border-t border-slate-800 text-[11px]">
            © BANFF CLEANING. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 8. PC/태블릿 전용 우측 하단 고정 플로팅 버튼 (업로드된 이미지 디자인 반영) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-2.5 items-end">
        {/* 카카오톡 1:1 상담 버튼 */}
        <a
          href="http://pf.kakao.com/_KdxgrX"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#FEE500] text-[#191919] font-extrabold text-sm rounded-full shadow-lg hover:scale-105 transition-all border border-black/5"
        >
          <MessageCircle className="w-5 h-5 fill-[#191919]" />
          <span>카카오톡 1:1 상담</span>
        </a>

        {/* 네이버 톡톡 문의 버튼 */}
        <a
          href="https://talk.naver.com/profile/wzb7nyu"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#03CF5D] text-white font-extrabold text-sm rounded-full shadow-lg hover:scale-105 transition-all"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span>네이버 톡톡 문의</span>
        </a>
      </div>

      {/* 9. 스마트폰(모바일) 전용 하단 고정 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="http://pf.kakao.com/_KdxgrX"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 bg-[#FEE500] text-[#191919] font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-[#191919]" /> 카카오톡
        </a>
        <a
          href="https://talk.naver.com/profile/wzb7nyu"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 bg-[#03CF5D] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-white" /> 네이버 톡톡
        </a>
        <a
          href="#quote"
          className="flex-1 py-2.5 bg-[#1E3653] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm text-center"
        >
          <Zap className="w-4 h-4 text-[#8FD3D5]" /> 견적신청
        </a>
      </div>

    </div>
  );
}