import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants'

const BookDetail = ({ route, navigation}) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    let { book } = route.params
    setBook(book)
  }, [book])
  
  if(book) {
    return(
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {/* Book Cover Section */}

        {/* Description */}

        {/* Buttons */}
      </View>
    )
  } else {
    return(
      <></>
    )
  }
}

export default BookDetail