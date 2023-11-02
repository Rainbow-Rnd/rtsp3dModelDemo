
export const  modelPath = process.env.REACT_APP_MODEL_PATH;
export const rtspIP = process.env.REACT_APP_RTSP_IP;

export const cameraMoveTime = process.env.REACT_APP_CAMERA_MOVE_TIME

let progressTimeoutTemp = process.env.REACT_APP_PROGRESS_TIMEOUT;
//console.log('progressTimeoutTemp:', progressTimeoutTemp);

try {
  progressTimeoutTemp = parseInt(progressTimeoutTemp)
} catch (error) {
  console.log('progressTimeout parseInt error : ' , error)
  progressTimeoutTemp = 100000
}
export  const  progressTimeout = progressTimeoutTemp

// console.log('modelPath:', modelPath);
// console.log('rtspIP:', rtspIP);
// console.log('progressTimeout:', progressTimeout);
// console.log('cameraMoveTime:', cameraMoveTime);
