import React from 'react'
import './homeStyles.css'

function Home() {
  return (
    <div className="mainWrap">
      <div className="mainContainer">
        <div className="mainContent">
          <div className="defaultContent">
            <div className="defualtContentTitle">
              <div className="defaultContentTitleRap">
                <h1>RAINBOWTECH RAP </h1>
                <img className="defaultContentTitleImg" src="/roundLogo.png" alt="Round Logo" />
              </div>
              <p>
                Experience the future of facility management now <br />
                Top Korean AI powered platform <br />
              </p>
            </div>
          </div>
          <div className="rap-buttons">
            <button className="btnRequest" onClick={() => (window.location.href = '/stream')}>
              촬영 영상 보기
            </button>

            <div>
              <button className="btnRequest" onClick={() => (window.location.href = '/model')}>
                3D 모델 보기
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="upper-footer">
            <p>경기도 성남시 중원구 사기막골로99 센트럴비즈타워2차 B동1005,1006호</p>
            <span>|</span>
            <p>CEO: 정한규 </p>
            <span>|</span>
            <p>TEL: 031-703-7929 </p>
            <span>|</span>
            <p> E-mail : rainbowtech@daum.net</p>
          </div>
          <div className="bottom-footer">
            <p>&copy;COPYRIGHT BY RAINBOWTECH. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
