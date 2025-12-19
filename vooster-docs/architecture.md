# 기술 요구사항서 (TRD)
  
## 기술 스택

- frontend
: Next.js 16, TypeScript, Tailwind CSS, Zod, React Hook Form, @tanstack/react-query, ESLint, Prettier, Husky, Lint-staged, 
- backend
: NestJS, PostgreSQL, Supabase Auth

# Code Organization & Convention
**Domain-Driven Organization Strategy**
- **Domain Separation**: 기능으로 도메인 분리.
- **Layer-Based Architecture**: 프레젠테이션 레이어(Next.js 컴포넌트), 비즈니스 로직 레이어(Nest.js 서비스), 데이터 접근 레이어(PostgreSQL)로 분리.
- **Feature-Based Modules**: 각 기능별로 모듈을 구성하여 코드 재사용성 및 유지보수성 향상.
- **Shared Components**: 공통 UI 컴포넌트, 유틸리티 함수, 타입 정의 등을 shared 모듈에 저장.

# Performance & Optimization Strategy

- 캐싱 전략: 자주 변경되지 않는 데이터는 Redis 또는 Memcached를 사용하여 캐싱하여 데이터베이스 부하를 줄입니다.
- 이미지 최적화: 이미지 크기 및 포맷을 최적화하여 로딩 속도를 향상시킵니다.
- 코드 분할 및 지연 로딩: 초기 로딩 속도를 줄이기 위해 코드 분할 및 지연 로딩을 적용합니다.

# Implementation Roadmap & Milestones
### Phase 1: Foundation (MVP Implementation)
- **Core Infrastructure**: Next.js 및 Nest.js 프로젝트 설정, PostgreSQL 데이터베이스 설정, OAuth 2.0 인증 서버 연동.
- **Basic Security**: 기본적인 XSS, CSRF 방어 및 데이터베이스 보안 설정.
- **Development Setup**: 개발 환경 설정 및 기본적인 CI/CD 파이프라인 구축.

### Phase 2: Feature Enhancement
- **Advanced Features**: 개인 맞춤 추천 기능 구현, 검색 조건 상세 필터링 기능 추가.
- **Performance Optimization**: 데이터베이스 인덱싱 최적화, 캐싱 전략 적용, 코드 최적화.
- **Enhanced Security**: API rate limiting, 데이터 암호화, 보안 취약점 점검.
- **Monitoring Implementation**: 로그 수집 및 분석, 성능 모니터링 시스템 구축.

# 폴더 구조


### 프론트엔드 레포
| 경로                                    | 설명                    |
| --------------------------------------- | ----------------------- |
| /src/app/                               | Next.js 앱 라우터         |
| /src/app/(protected)/                   | 보호된 라우트 그룹        |
| /src/app/(protected)/dashboard/         | 대시보드 페이지           |
| /src/app/api/                           | API 라우트 (프록시/Mock 등) |
| /src/app/login/                         | 로그인 페이지             |
| /src/app/signup/                        | 회원가입 페이지           |
| /src/app/example/                       | 예시 페이지               |
| /src/components/                        | 공통 컴포넌트             |
| /src/components/ui/                     | shadcn/ui 컴포넌트        |
| /src/features/                          | 피처(기능) 단위 모듈      |
| /src/features/auth/                     | 인증 기능                 |
| /src/features/auth/context/             | 인증 컨텍스트             |
| /src/features/auth/hooks/               | 인증 훅                   |
| /src/features/auth/types.ts             | 인증 타입 정의             |
| /src/features/[featureName]/            | 다른 피처 예시            |
| /src/features/[featureName]/components/ | 피처 컴포넌트             |
| /src/features/[featureName]/pages/      | 피처 페이지               |
| /src/features/[featureName]/constants.ts| 피처 상수                 |
| /src/features/[featureName]/types.ts    | 피처 타입                 |
| /src/features/[featureName]/utils.ts    | 피처 유틸                 |
| /src/features/[featureName]/hooks/      | 피처 훅                   |
| /src/features/[featureName]/lib/        | 피처 라이브러리/유틸      |
| /src/constants/                         | 전역 상수                 |
| /src/hooks/                             | 공통 훅                   |
| /src/lib/                               | 유틸리티                  |
| /src/lib/remote/                        | API 클라이언트            |
| /public/                                | 정적 자산                 |

### 백엔드 레포
| 경로                                    | 설명                         |
| --------------------------------------- | ---------------------------- |
| /src/app/                               | Hono/NestJS 등 서버 엔트리포인트 |
| /src/config/                            | 백엔드 환경설정                |
| /src/http/                              | HTTP 유틸리티                  |
| /src/middleware/                        | 서버 미들웨어                  |
| /src/supabase/                          | supabase 서버 클라이언트        |
| /src/features/                          | 백엔드 도메인/피처별 디렉토리   |
| /src/features/auth/                     | 인증 관련 로직                  |
| /src/features/auth/server/              | 인증 서버 로직                  |
| /src/features/auth/types.ts             | 인증 타입 정의                  |
| /src/features/[featureName]/            | 다른 피처 예시                 |
| /src/features/[featureName]/backend/    | 피처 백엔드 로직               |
| /src/features/[featureName]/constants.ts| 피처 상수                      |
| /src/features/[featureName]/types.ts    | 피처 타입                      |
| /src/features/[featureName]/utils.ts    | 피처 유틸                      |
| /src/features/[featureName]/hooks/      | 피처 관련 훅                   |
| /src/features/[featureName]/lib/        | 피처 라이브러리/유틸           |
| /src/constants/                         | 전역 상수                      |
| /supabase/migrations/                   | supabase 마이그레이션           |


  