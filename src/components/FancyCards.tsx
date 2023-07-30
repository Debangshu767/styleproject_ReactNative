import { View, Text,Image } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
        <Text className="font-bold text-2xl p-4 ">Fancy Cards</Text>
        <View className='p-2 bg-white rounded-lg mx-4' >
            <Image
            source={{uri: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'}} 
            className=' h-[200px] rounded-lg'
            />
            <View className='flex flex-col gap-y-1 bg-slate-200 p-2 my-2 rounded-lg ' >
              <Text className=' text-slate-600 font-extrabold uppercase  text-lg  ' >This is a Dog </Text>
              <Text className=' text-s text-slate-800 font-extralight ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque maiores ea itaque ullam natus fugiat laborum architecto dolorem temporibus, enim vel pariatur odit sint magni distinctio expedita odio labore?</Text>
              <Text className=' text-right font-thin text-xs text-slate-800 capitalize ' > this is footer text </Text>
            </View>
            
        </View>
      </View>
  )
}

export default FancyCards