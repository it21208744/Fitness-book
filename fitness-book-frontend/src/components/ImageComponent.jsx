import React, { useEffect } from 'react'

function ImageComponent({ byteData }) {
  useEffect(() => {
    return () => {
      if (byteData) {
        URL.revokeObjectURL(byteData)
      }
    }
  }, [byteData])

  const imageUrl = byteData && URL.createObjectURL(new Blob([byteData]))

  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Image"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      )}
    </div>
  )
}

export default ImageComponent
