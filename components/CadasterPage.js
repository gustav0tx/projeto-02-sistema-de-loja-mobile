import { Button, Image, Text, TextInput } from 'react-native-web';
import { Pressable, View } from 'react-native';
import handleCadaster from '../hooks/handleCadaster';

export default function CadasterPage({ setIsCadaster, setEmail, setPassw, setSecPassw, setIsCadaster, email, passw, secPassw }) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Cadastro</Text>

            <Image source={require('./assets/user.png')} style={{ width: 130, height: 130, marginVertical: 20 }} />

            <Text>Digite seu email:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setEmail(newText)}} />

            <Text>Digite sua senha:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setPassw(newText)}} />

            <Text>Digite seu senha de novo:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setSecPassw(newText)}}/>

            <Pressable 
                style={{ backgroundColor: 'skyblue', paddingVertical: 8, paddingHorizontal: 40, marginTop: 20, borderRadius: 6 }}
                onPress={() => {handleCadaster(email, passw, secPassw, setIsCadaster)}}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
            </Pressable>

            <Text style={{ marginTop: 10 }}>Já tem uma conta? <Button title='logar' onPress={() => { setIsCadaster(false) }} /></Text>

        </View>
    )
}