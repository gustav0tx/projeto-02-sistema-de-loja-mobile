import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, View } from 'react-native';
import { Button, FlatList, Image, Text, TextInput } from 'react-native-web';
import clientBuy from '../hooks/client/clientBuy';
import clientAddInCart from '../hooks/client/clientAddInCart';

export default function ClientProductsPage({ productsList, setProductsList, setCart, cart, setPages }) {
    return (

        <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Bem-Vindo!</Text>

            <Text>Clique para visitar o carrinho!</Text>

            <Pressable 
                style={{ marginBottom: 10, backgroundColor: 'darkblue', paddingVertical: 5, paddingHorizontal: 10, marginTop: 10, borderRadius: 10 }}
                onPress={() => {setPages(4)}}
            >

                <Image source={require('../assets/carrinho.png')} style={{ height: 30, width: 30 }} />

            </Pressable>

            <FlatList
                data={productsList}
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

                            <View>

                                <Pressable 
                                    style={{ backgroundColor: 'skyblue', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 7, alignItems: 'center', marginTop: 11 }}
                                    onPress={() => {clientBuy(item.id, productsList, setProductsList)}}
                                >

                                    <Text style={{ color: 'black' }}>Comprar</Text>

                                </Pressable>

                                <Pressable 
                                    style={{ backgroundColor: 'darkblue', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 7,  marginTop: 11 }}
                                    onPress={() => {clientAddInCart(item.id, productsList, setCart, cart)}}
                                >

                                    <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>

                                </Pressable>

                            </View>

                        </View>

                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            <Button title='logout' onPress={() => { setPages(1) }} />

        </View>

    )
}