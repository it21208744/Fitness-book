import React from 'react'

const HeaderForHome = () => {
  return (
    <div>
      <header
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.5)',
          display: 'flex',
          justifyContent: 'space-between', // Align left and center sections
          alignItems: 'center',
          padding: '10px 20px', // Adds padding for visual balance
        }}
      >
        <nav style={{ width: '100%' }}>
          <ul
            style={{
              display: 'flex',
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              justifyContent: 'space-between', // Spreads content to utilize full width
            }}
          >
            {/* Left-aligned item */}
            <li
              style={{
                padding: '0 15px',
                color: '#414654',
                fontWeight: '800',
                fontSize: '20px',
              }}
            >
              <a
                href="#home"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                FITNESS BOOK
              </a>
            </li>

            {/* Center-aligned section */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'right',
                flex: 1, // Ensures it takes the rest of the space
              }}
            >
              <li style={{ padding: '0 15px' }}>
                <a
                  href="login"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Login
                </a>
              </li>
              <li style={{ padding: '0 15px' }}>
                <a
                  href="register"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Register
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderForHome
