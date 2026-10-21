'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  MessageSquare, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  BookOpen
} from 'lucide-react';

export default function B2CHome() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '매트리스/소파 케어',
    region: '서울/경기 전지역',
    memo: ''
  });

  // 동영상 자동재생 강제 적용을 위한 Ref
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 모바일 브라우저 접속 시 즉시 동영상 재생 시도
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
    if (fgVideoRef.current) {
      fgVideoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }
    alert(`[신청 완료] ${formData.name}님, 담당 전문 엔지니어가 빠른 시간 내에 연락드리겠습니다.`);
    setFormData({ name: '', phone: '', service: '매트리스/소파 케어', region: '서울/경기 전지역', memo: '' });
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
            
            {/* 네이버 블로그 메뉴 링크 */}
            <a 
              href="https://blog.naver.com/본인_네이버_아이디" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden md:flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition-colors font-bold"
            >
              <BookOpen className="w-4 h-4" />
              <span>네이버 블로그</span>
            </a>

            <a href="#quote" className="bg-[#1E3653] text-white px-4 py-2 rounded-xl hover:bg-[#2a4a70] transition-all shadow-sm">
              방문견적 신청
            </a>
          </div>
        </div>
      </header>

      {/* 2. 히어로 섹션 (모바일 바로 재생 최적화 동영상) */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-950 flex items-center justify-center overflow-hidden">
        
        {/* (1) 배경 layer: 블러 동영상 */}
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-40 scale-110 z-0"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* (2) 어두운 반투명 오버레이 */}
        <div className="absolute inset-0 bg-slate-950/50 z-10" />

        {/* (3) 전면 layer: 잘림 없는 원본 비율 동영상 */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
          <div className="h-full max-h-[520px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
            <video
              ref={fgVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              className="w-full h-full object-cover"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
              브라우저가 동영상 재생을 지원하지 않습니다.
            </video>
          </div>
        </div>

        {/* (4) 최상단 텍스트 및 상담 버튼 */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full text-white flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#8FD3D5] uppercase shadow-md">
            <Sparkles className="w-4 h-4" /> THE CARE YOU CAN SEE
          </div>
          
          <h1 className="text-3xl sm:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
            보이지 않는 틈까지, <br />
            <span className="text-[#8FD3D5]">온전히.</span>
          </h1>
          
          <p className="text-slate-100 text-sm sm:text-lg max-w-xl font-light leading-relaxed drop-shadow-md">
            과정과 결과로 보여드리는 섬세한 케어. <br className="hidden sm:inline" />
            소파·매트리스·카펫부터 세탁기·에어컨 분해세척까지.
          </p>

          {/* 상담 및 이동 버튼 모음 */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <a 
              href="https://pf.kakao.com" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3.5 bg-[#FEE500] text-[#191919] font-extrabold rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-[#191919]" />
              <span>카카오톡 예약·문의 ➔</span>
            </a>
            <a 
              href="https://talk.naver.com" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3.5 bg-[#03CF5D] text-white font-extrabold rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>네이버 톡톡 문의</span>
            </a>
            <a 
              href="#services" 
              className="px-6 py-3.5 bg-black/40 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-black/60 transition-all text-sm"
            >
              서비스 살펴보기를 ↓
            </a>
          </div>
        </div>

        {/* (5) 하단 실시간 출장 케어 안내 */}
        <div className="absolute bottom-4 left-6 z-20 text-[11px] text-slate-300 font-medium tracking-wider hidden sm:flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          BANFF CLEANING HOMECARE · 서울·경기 출장 케어
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3653]">방문 견적 & 예약 신청</h2>
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
                  <option value="매트리스/소파 케어">매트리스 / 소파 케어</option>
                  <option value="에어컨 분해청소">에어컨 분해청소 (벽걸이/스탠드/시스템)</option>
                  <option value="세탁기 완전분해">세탁기 완전분해 (통돌이/드럼)</option>
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
            상호명: 밴프 클리닝 | 대표: 엄우준 <br />
            주소: 경기도 김포시 | 서비스 지역: 서울, 경기, 인천 수도권 전지역 <br />
            고객센터: 카카오톡 1:1 상담 / 네이버 톡톡 지원 / 네이버 블로그 운영
          </p>
          <div className="pt-2 text-slate-400 border-t border-slate-800 text-[11px]">
            © BANFF CLEANING. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 8. PC/태블릿 전용 우측 하단 고정 플로팅 버튼 */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-2.5 items-end">
        <a
          href="https://pf.kakao.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#FEE500] text-[#191919] font-extrabold text-sm rounded-full shadow-lg hover:scale-105 transition-all border border-black/5"
        >
          <MessageCircle className="w-5 h-5 fill-[#191919]" />
          <span>카카오톡 1:1 상담</span>
        </a>

        <a
          href="https://talk.naver.com"
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
          href="https://pf.kakao.com"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 bg-[#FEE500] text-[#191919] font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-[#191919]" /> 카카오톡
        </a>
        <a
          href="https://talk.naver.com"
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