import { Button, Image, Text, TextInput } from 'react-native-web';
import { Pressable, View } from 'react-native';
import handleCadaster from '../hooks/cadaster/handleCadaster';

export default function CadasterPage({ setPages, setEmail, setPassw, setSecPassw, email, passw, secPassw }) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Cadastro</Text>

            <Image source={require('../assets/user.png')} style={{ width: 130, height: 130, marginVertical: 20 }} />

            <Text>Digite seu email:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setEmail(newText)}} />

            <Text>Digite sua senha:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setPassw(newText)}} />

            <Text>Digite seu senha de novo:</Text>
            <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setSecPassw(newText)}}/>

            <Pressable 
                style={{ backgroundColor: 'darkblue', paddingVertical: 8, paddingHorizontal: 40, marginTop: 20, borderRadius: 6 }}
                onPress={() => {handleCadaster(email, passw, secPassw, setPages)}}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
            </Pressable>

            <Text style={{ marginTop: 10 }}>Já tem uma conta? </Text>

            <Button title='logar' onPress={() => { setPages(1) }} />

        </View>
    )
}