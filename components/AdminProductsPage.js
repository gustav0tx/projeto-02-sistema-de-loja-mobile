import { useState, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Button, FlatList, Image, Text, TextInput } from 'react-native-web';
import createProduct from '../hooks/admin/createProduct';
import deleteProduct from '../hooks/admin/deleteProduct';

export default function AdminProducts({ productsList, setProductsList, setPages }) {

    const [menu, setMenu] = useState(false)
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const idRef = useRef(0)

    return (
        <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 29 }} >Bem-vindo Admin</Text>

            <Text style={{ marginBottom: 8 }}>Clique para Adicionar novos produtos.</Text>

            <Pressable style={{ marginBottom: 30, backgroundColor: 'darkblue', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }} onPress={() => { setMenu(!menu) }} >
                <Text style={{ color: 'white', fontSize: 22 }}>+</Text>
            </Pressable>

            {(menu) &&

                <View style={{ gap: 5, border: 'solid 2px gray', padding: 20, borderRadius: 10, marginBottom: 10 }}>

                    <Text style={{ fontWeight: 'bold', fontSize: 28 }}>Formulario do Produto:</Text>

                    <Text>Digite o nome do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => { setName(newText) }} />

                    <Text>Digite a descrição do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} multiline={true} onChangeText={(newText) => { setDescription(newText) }} />

                    <Text>Digite o preço do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => { setPrice(newText) }} />

                    <Text>Digite a url da imagem:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => { setImg(newText) }} />

                    <Pressable style={{ alignItems: 'center', backgroundColor: 'darkblue', paddingVertical: 8, paddingHorizontal: 40, marginTop: 20, borderRadius: 6 }} onPress={() => { createProduct(name, description, price, img, setProductsList, productsList, idRef) }} >
                        <Text style={{ color: 'white' }}>Adicionar Produto</Text>
                    </Pressable>

                </View>

            }

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

                            <Pressable
                                style={{ padding: 10, backgroundColor: 'red', borderRadius: 6, marginTop: 5, alignItems: 'center' }}
                                onPress={() => { deleteProduct(item.id, productsList, setProductsList) }}
                            >

                                <Text style={{ color: 'white' }}>Delete</Text>

                            </Pressable>

                        </View>

                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            <Button title='logout' onPress={() => { setPages(1) }} />

        </View>
    )
}