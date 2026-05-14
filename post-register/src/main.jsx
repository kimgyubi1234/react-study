import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Global } from '@emotion/react'
import { global } from './styles/global.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Global styles={global} />
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)

// 리엑퀴리 서버전역상태(서버로부처 가지고오 데이터 즉 응답받은 데이터를 전역상태로 관리)
// 즉 로그인을 한번하고 서버가 로그인 된 사용자란걸 익식. 토큰을 나눠줌,. 토큰으로 정보조회함