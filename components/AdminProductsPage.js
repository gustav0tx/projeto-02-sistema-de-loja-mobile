import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Button, FlatList, Image, Text, TextInput } from 'react-native-web';
import createProduct from '../hooks/admin/createProduct';

export default function AdminProducts({ productsList, setProductList }) {

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

            <Pressable style={{ marginBottom: 30, backgroundColor: 'darkblue', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }} onPress={() => {setMenu(!menu)}} >
                <Text style={{color: 'white', fontSize: 22}}>+</Text>
            </Pressable>

            {(menu) &&

                <View style={{gap: 5, border: 'solid 2px gray', padding: 20, borderRadius: 10}}>

                    <Text style={{ fontWeight: 'bold', fontSize: 28 }}>Formulario do Produto:</Text>

                    <Text>Digite o nome do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} />

                    <Text>Digite a descrição do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} multiline={true} />

                    <Text>Digite o preço do produto:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} />

                    <Text>Digite a uri da imagem:</Text>
                    <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} />

                    <Pressable style={{alignItems: 'center', backgroundColor: 'darkblue', paddingVertical: 8, paddingHorizontal: 40, marginTop: 20, borderRadius: 6}} onPress={() => {createProduct(name, description, price, img, setProductList, productsList, idRef)}} >
                        <Text style={{color: 'white'}}>Adicionar Produto</Text>
                    </Pressable>

                </View>

            }

            <FlatList 
                data={productsList}
                renderItem={(item) => {
                    <View>

                        <Image source={{ uri: item.img }} />

                        <View>

                            <Text>{item.name}</Text>

                            <Text>{item.price}</Text>

                        </View>

                        <Text>{item.description}</Text>

                    </View>
                }}
                keyExtractor={(item) => {item.id}}
            />

        </View>
    )
}