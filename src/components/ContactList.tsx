import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
    
  return (
    <View>
      <Text className="font-bold text-2xl p-4 ">Contact List</Text>

        <ScrollView scrollEnabled = {false}>
            

            {contacts.map((contact) => (
                
                <View className='flex flex-row gap-1 p-1 mx-3 mb-1 rounded-lg bg-slate-700  border-b-2 border-slate-600' key={contact.uid} >
                    <Image className='h-[50px] w-[50px] rounded-full  '  source={ {uri : contact.imageUrl} } />
                    <View className='flex flex-col justify-center '>
                        <Text className=' text-lg font-bold   ' > {contact.name} </Text>
                        <Text className=' text-xs font-thin text-slate-200 '> {contact.status} </Text>
                    </View>
                </View>
            ))}

        </ScrollView>

    </View>
  )
}

export default ContactList