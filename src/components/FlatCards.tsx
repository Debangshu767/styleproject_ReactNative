import {Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text className="font-bold text-2xl p-4 ">Flat Cards</Text>
      <View className='flex flex-row px-4 gap-x-3 '>
        <View className=' h-[100px] w-[100px] bg-[#bc2038] items-center justify-center p-4 rounded-xl ' >
            <Text>Red</Text>
        </View>
        <View className=' h-[100px] w-[100px] bg-[#205ebc] items-center justify-center p-4 rounded-xl ' >
            <Text>Blue</Text>
        </View>
        <View className=' h-[100px] w-[100px] bg-[#20bc7e] items-center justify-center p-4 rounded-xl ' >
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//     headingText : {
//       fontSize: 24,
//       fontWeight: 'bold',
//       padding : 24
//     },
//     container : {

//     },
//     card : {
//       height : 100,
//       width : 100,
//       backgroundColor : 'red'
      

//     },
//     cardOne : {

//     }
// })