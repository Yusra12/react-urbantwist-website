import React from 'react'
import { FeatureContainer,FeatureButton } from './FeatureElements'

const Feature =()=> {
  return (
   <FeatureContainer>
       <h1>Milkshakes of the Day</h1>
     
       <p> They're rich, creamy, and come in almost any flavor you could possibly want</p>
       <FeatureButton>Order Now ! </FeatureButton>
   </FeatureContainer>
  )
}

export default Feature