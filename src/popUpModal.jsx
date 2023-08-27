import React from 'react'

function Popup({ visible, onHide, imageFile }) {
  const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  }

  const dialogStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px'
  }

  console.log('Popup visible ? : ' + `${visible}`)

  return visible ? (
    <div style={popupStyle}>
      <div style={dialogStyle}>
        <div
          style={{
<<<<<<< HEAD
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
          <h2 style={{ margin: 0 }}>Details about Apartment</h2>
=======
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2 style={{ margin: 0 }}>Details about area</h2>
>>>>>>> refs/remotes/origin/testJongro
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={onHide}>
            Close
          </button>
        </div>
        <div>
          <img
              //src={process.env.PUBLIC_URL + "/crack_1.jpg"}
              src={process.env.PUBLIC_URL + `/${imageFile}.jpg`}
            alt="image"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <h3>Recommended repair Method </h3>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Popup
