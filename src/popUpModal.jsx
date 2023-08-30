import React, { useState, useEffect } from 'react'
import problemAreas from './Json/Jongro/problem_areas.json'
import './popUpModelStyles.css'

function Popup({ visible, onHide, imageFile }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [paragraphs, setParagraphs] = useState([])

  useEffect(() => {
    const image = new Image()
    image.src = process.env.PUBLIC_URL + `/images/${imageFile}`
    image.onload = () => {
      setImageLoaded(true)
    }
  }, [imageFile])

  // useEffect(() => {
  //   fetch('./Json/Jongro/problem_areas.json')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setParagraphs(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error)
  //     })
  // }, [])
  useEffect(() => {
    setParagraphs(problemAreas)
  }, [])
  //console.log('Popup visible ? : ' + `${visible}`)

  return visible ? (
    <div className="popUpStyles">
      <div className="dialogStyles">
        <div className="popUpContainer">
          <h2>하자에 대한 세부 정보</h2>
          <button className="btnStyle" onClick={onHide}>
            닫기
          </button>
        </div>
        {imageLoaded ? (
          <img src={process.env.PUBLIC_URL + `/images/${imageFile}`} alt="image" style={{ width: '100%', marginBottom: '10px' }} />
        ) : (
          <div className="popUpLoading">Loading image...</div>
        )}
        <h3>추천 시공방법</h3>
        {paragraphs.map((paragraph) => (
          <p className="popUpTag" key={paragraph.id}>
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Popup