import { View, Text, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {

    const openWebsite = (WebsiteLink: string) => {
        Linking.openURL(WebsiteLink);
    };

    return (
        <View>
            <Text className="font-bold text-2xl p-4 ">Blog Card</Text>
            <View className='flex flex-col p-2 bg-slate-700 rounded-lg mx-4' >
                    <Text className=' text-lg font-bold capitalize text-center p-1' >Lorem Ipsum</Text>
                    <Image className='h-[250px] rounded-lg ' source={{ uri: 'https://images.pexels.com/photos/17747475/pexels-photo-17747475/free-photo-of-the-end-of-another-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />

                <View className=' p-4' >
                    <Text numberOfLines={3} className='font-light ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur assumenda, atque, distinctio nobis soluta officia quod laboriosam dignissimos quos, accusantium quo obcaecati eligendi doloribus necessitatibus praesentium quam beatae natus!
                    </Text>
                </View>
                <View className='flex flex-row justify-center gap-x-4' >
                    <TouchableOpacity onPress={() => openWebsite('https://www.lipsum.com/')}>
                        <Text className=' p-2 bg-slate-100 rounded-lg text-slate-600 font-black capitalize ' >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.lipsum.com/')}>
                        <Text className='  p-2 bg-slate-100 rounded-lg text-slate-600 font-black capitalize  '>Follow me</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ActionCard