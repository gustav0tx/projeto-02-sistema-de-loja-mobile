import { use, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Image, Text, TextInput } from 'react-native-web';
import CadasterPage from './components/CadasterPage';
import LoginPage from './components/LoginPage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [isCadaster, setIsCadaster] = useState(true)
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [secPassw, setSecPassw] = useState('')

  

  return (
    <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

      {(isCadaster) &&

        <CadasterPage 
          setIsCadaster={setIsCadaster}
          setEmail={setEmail}
          setPassw={setPassw}
          setSecPassw={setSecPassw}
          email={email}
          passw={passw}
          secPassw={secPassw}
        />

      }

      {(!isCadaster) &&

        <LoginPage 
          setIsCadaster={setIsCadaster}
        />

      }

      


    </View>
  )
}
