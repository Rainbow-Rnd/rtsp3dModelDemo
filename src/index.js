import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

// const ip = 'localhost'
const ip = '211.34.80.54'

createRoot(document.getElementById('root')).render(<App id={'test_video'} url={'rtsp://' + `${ip}` + ':8554/drone'} />)
