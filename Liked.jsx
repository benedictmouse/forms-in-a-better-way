import React, { useState } from 'react'

const Liked = () => {
  const [liked, setLiked] = useState(true);
  function handleChange() {
    setLiked(!liked);
  }
  return (
    <>
      <input type='checkbox' checked={liked} onClick={handleChange} />
    </>
  )
}


export default Liked