# 기술 요구사항서 (TRD)

## 기술 스택

- frontend: Next.js 16, TypeScript, Tailwind CSS, Zod, React Hook Form, @tanstack/react-query, ESLint, Prettier, Husky, Lint-staged

# Code Organization & Convention

**FSD (Feature-Sliced Design) Architecture**
- **Layer Separation**: app, entities, features, shared 레이어로 분리
- **Entity-Based Models**: 데이터 모델(명사)은 entities에서 관리
- **Feature-Based Modules**: 기능(동사)은 features에서 관리
- **Shared Resources**: 공통 UI 컴포넌트, 유틸리티, Provider 등은 shared에서 관리

# Performance & Optimization Strategy

- 이미지 최적화: Next.js Image 컴포넌트를 활용하여 이미지 크기 및 포맷 최적화
- 코드 분할 및 지연 로딩: 초기 로딩 속도를 줄이기 위해 코드 분할 및 지연 로딩을 적용

# Implementation Roadmap & Milestones

### Phase 1: Foundation (MVP Implementation)
- **Core Infrastructure**: Next.js 프로젝트 설정, FSD 폴더 구조 구축
- **Basic Security**: 기본적인 XSS, CSRF 방어 설정
- **Development Setup**: 개발 환경 설정 및 기본적인 CI/CD 파이프라인 구축

### Phase 2: Feature Enhancement
- **Advanced Features**: 개인 맞춤 추천 기능 구현, 검색 조건 상세 필터링 기능 추가
- **Performance Optimization**: 캐싱 전략 적용, 코드 최적화
- **Monitoring Implementation**: 로그 수집 및 분석, 성능 모니터링 시스템 구축

# 폴더 구조 (FSD)

| 경로 | 설명 |
| --- | --- |
| `/src/app/` | Next.js App Router (라우팅) |
| `/src/app/(root)/` | 루트 라우트 그룹 |
| `/src/app/(auth)/` | 인증 관련 라우트 그룹 |
| `/src/app/api/` | API 라우트 |
| `/src/entities/` | 데이터 모델 (명사 형태) |
| `/src/entities/book/` | Book 엔티티 |
| `/src/entities/book/model.ts` | Book 타입, 목업 데이터 |
| `/src/entities/book/ui/` | Book 관련 UI 컴포넌트 |
| `/src/entities/user/` | User 엔티티 |
| `/src/features/` | 기능별 코드 (동사 형태) |
| `/src/features/[featureName]/` | 피처 폴더 |
| `/src/features/[featureName]/model.ts` | 피처 상태, 타입 |
| `/src/features/[featureName]/ui/` | 피처 UI 컴포넌트 |
| `/src/features/[featureName]/lib/` | 피처 유틸리티 |
| `/src/features/[featureName]/index.ts` | 피처 public API |
| `/src/shared/` | 공통 코드 |
| `/src/shared/ui/` | 공통 UI 컴포넌트 (Button, Header, Footer 등) |
| `/src/shared/libs/` | 유틸리티 함수 (cn 등) |
| `/src/shared/providers/` | Context Provider (ThemeProvider 등) |
| `/src/shared/constants/` | 전역 상수 |
| `/public/` | 정적 자산 |
