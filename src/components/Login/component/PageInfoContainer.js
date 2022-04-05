import React from 'react'
import { Text, View } from 'react-native'

const PageInfoContainer = ({title,description}) => {
  return (
    <View style={{paddingLeft:35,paddingRight:22}}>
    <Text style={{fontWeight:'bold',fontSize:48}}>{title}</Text>
    <Text style={{fontSize:15,color:"#757575",marginTop:18}}>{description}</Text>
    </View>
  )
  
}

export default PageInfoContainer