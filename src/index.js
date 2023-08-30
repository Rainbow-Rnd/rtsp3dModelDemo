import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import {rtspIP}  from './config.js'

// const ip = 'localhost'
//const ip = '211.34.80.54'


createRoot(document.getElementById('root')).render(<App id={'test_video'} url={'rtsp://' + `${rtspIP}` + ':8554/drone'} />)
