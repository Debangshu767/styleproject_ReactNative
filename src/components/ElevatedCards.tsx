import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text className="font-bold text-2xl p-4 ">Flat Cards</Text>
            <ScrollView horizontal={true}  >

                <View className='flex flex-row  gap-x-2 px-4 '>

                    <View className=' h-[100px] w-[120px] bg-[#f1f1f1] items-center justify-center  rounded-xl shadow-2xl  ' >
                        <Text className=' text-neutral-700' >Tap</Text>
                    </View>

                    <View className=' h-[100px] w-[120px] bg-[#f1f1f1] items-center justify-center  rounded-xl  ' >
                        <Text className=' text-neutral-700' >Tap</Text>
                    </View>

                    <View className=' h-[100px] w-[120px] bg-[#f1f1f1] items-center justify-center  rounded-xl  ' >
                        <Text className=' text-neutral-700' >Tap</Text>
                    </View>

                    <View className=' h-[100px] w-[120px] bg-[#f1f1f1] items-center justify-center  rounded-xl  ' >
                        <Text className=' text-neutral-700' >Tap</Text>
                    </View>

                </View>




            </ScrollView>
        </View>
    )
}

export default ElevatedCards