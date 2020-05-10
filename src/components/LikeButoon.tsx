import React, { useState } from 'react'

const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({ like: 0, on: true })

  return (
    <>
      <button
        onClick={() => {
          setObj({ like: obj.like + 1, on: obj.on })
        }}
      >
        {obj.like} 👍
      </button>
    </>
  )
}

export default LikeButton
