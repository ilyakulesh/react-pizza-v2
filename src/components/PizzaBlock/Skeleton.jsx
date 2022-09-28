import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-2" y="268" rx="10" ry="10" width="280" height="28" /> 
    <rect x="-3" y="312" rx="10" ry="10" width="280" height="70" /> 
    <rect x="0" y="406" rx="10" ry="10" width="94" height="38" /> 
    <rect x="126" y="400" rx="20" ry="20" width="152" height="45" /> 
    <circle cx="130" cy="126" r="125" />
  </ContentLoader>
)

export default Skeleton