import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Z, {Hi as H, Bye} from './Hello.jsx' // 외부파일을 호출한다. import는 가져온다는 의미다
// ↑ default를 가진것과 아닌것(export)의 차이점. default는 이름의 쉽게 바꿀 수 있지만 {}(export)은 쉽게 못 바꿈

// createRoot(document.getElementById('root')).render(<div>{App()}{Z()}{H()}{Bye()}</div>)
createRoot(document.getElementById('root')).render(<div>
    {/* ↓ 바로 열고 닫을 수 있음 */}
    <App />
    <Z></Z>
    <H />
    <Bye></Bye>
    </div>)