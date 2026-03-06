import { Pressable, View } from 'react-native';
import { Button, Image, Text, TextInput } from 'react-native-web';

export default function LoginPage({ setIsCadaster, setEmail, setPassw }) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Login</Text>

          <Image source={require('./assets/user.png')} style={{ width: 130, height: 130, marginVertical: 20 }} />

          <Text>Digite seu email:</Text>
          <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setEmail(newText)}} />

          <Text>Digite sua senha:</Text>
          <TextInput style={{ border: 'solid 2px black', borderRadius: 5, padding: 2 }} onChangeText={(newText) => {setPassw(newText)}} />

          <Pressable style={{ backgroundColor: 'skyblue', paddingVertical: 8, paddingHorizontal: 40, marginTop: 20, borderRadius: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Logar</Text>
          </Pressable>

          <Text style={{ marginTop: 10 }}>Não tem uma conta? <Button title='Cadastrar' onPress={() => {setIsCadaster(true)}} /></Text>

        </View>
    )
}