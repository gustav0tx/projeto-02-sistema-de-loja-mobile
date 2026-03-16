import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Button, FlatList, Image, Text, TextInput } from 'react-native-web';
import clientBuy from '../hooks/client/clientBuy';

export default function ClientCart({ cart, setCart, setPages }) {
    return (
        <View>

            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Carrinho</Text>

            <FlatList
                data={cart}
                horizontal={true}
                style={{ flexGrow: 0, marginBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={{ padding: 20, backgroundColor: 'lightgray', borderRadius: 10, marginRight: 15, display: 'flex', maxWidth: 160, }}>

                        <Image source={{ uri: item.img }} style={{ width: 120, height: 160, borderRadius: 10, marginBottom: 10 }} />

                        <View style={{ maxWidth: 120 }}>

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>

                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>

                                <Text>{'R$'.concat(item.price.toFixed(2))}</Text>

                            </View>

                            <Text numberOfLines={5} >{item.description}</Text>

                            <Pressable
                                style={{ padding: 10, backgroundColor: 'skyblue', borderRadius: 6, marginTop: 5, alignItems: 'center' }}
                                onPress={() => {clientBuy(item.id, cart, setCart)}}
                            >

                                <Text style={{ color: 'black' }}>Comprar</Text>

                            </Pressable>

                        </View>

                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            <Button title='sair' onPress={() => {setPages(3)}} />

        </View>
    )
}