import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import path from 'path';

// ✅ GitHub Pages + 커스텀 도메인(가비아) 완벽 호환 버전
export default defineConfig(({ mode }) => {
  // 커스텀 도메인은 base 경로를 항상 루트('/')로 유지
  const basePath = '/';

  return {
    plugins: [
      react(),
      {
        // ✅ 빌드 후 CNAME 자동 생성 플러그인
        name: 'keep-cname',
        closeBundle() {
          const cnamePath = path.resolve(__dirname, 'docs', 'CNAME');
          writeFileSync(cnamePath, 'hurobotics.co.kr\n');
          console.log('✅ CNAME file created successfully:', cnamePath);
        },
      },
    ],
    base: basePath,
    build: {
      outDir: 'docs', // ⚡ GitHub Pages에서 사용하는 빌드 폴더
    },
    server: {
      open: true, // 개발 시 자동으로 브라우저 열기
    },
  };
});
