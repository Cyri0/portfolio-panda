import { useEffect, useState } from "react"

const API_URL = "https://randomfox.ca/floof/"

const Projects = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    for(let i = 0; i < 10; i++){
      fetch(API_URL)
      .then(response => response.json())
      .then(data => setImages(prev => [...prev, data.image]))
    }
  },[])

  return (
    <div className="foxWrapper">
      {images.map(image => <img src={image} />)}
    </div>
  )
}

export default Projects