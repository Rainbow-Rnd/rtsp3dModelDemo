import React, { useState, useEffect } from 'react'
import problemAreas from './Json/Jongro/problem_areas.json'
import './popUpModelStyles.css'

function Popup({ visible, onHide, imageFile, problemAreaId }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [jsonData, setJsonData] = useState({})

  useEffect(() => {
    const image = new Image()
    image.src = process.env.PUBLIC_URL + `/images/${imageFile}`
    image.onload = () => {
      setImageLoaded(true)
    }
  }, [visible])

  useEffect(() => {
    if (problemAreaId !== undefined) {
      problemAreaId = parseInt(problemAreaId)
      const currentJsonData = problemAreas[problemAreaId]
      //console.log('Popup useEffect currentJsonData: ', currentJsonData)
      setJsonData(currentJsonData)
    }
  }, [problemAreaId, visible])

  //console.log('Popup visible ? : ' + `${visible}`)

  return visible ? (
    <div className="popUpStyles">
      <div className="dialogStyles">
        <div className="popUpContainer">
          <h2>{jsonData.button_name} 세부 정보</h2>
          <button className="btnStyle" onClick={onHide}>
            닫기
          </button>
        </div>
        {imageLoaded ? (
          <img className="popUpImg" src={process.env.PUBLIC_URL + `/images/${imageFile}`} alt="image" />
        ) : (
          <div className="popUpLoading">Loading image...</div>
        )}{' '}
        <div className="popUpTag">
          <h3>하자 종류</h3>
          <span style={{ color: 'black', fontSize: '22px', fontWeight: 'bold' }}>:</span>
          <h3 className="popUpTag" key={jsonData.id}>
            {jsonData.problem_type}
          </h3>

        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Popup
