import { useRef, useEffect, useState, use } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Image, Text, TextInput } from 'react-native-web';
import CadasterPage from './components/CadasterPage';
import LoginPage from './components/LoginPage';
import AdminProducts from './components/AdminProductsPage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() { 

  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [secPassw, setSecPassw] = useState('')
  const [pages, setPages] = useState(2)
  const [productsList, setProductsList] = useState([{ name: 'cafe', description: 'é legal', price: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXZe8qQD9rfry3D75GyIFcGHdcvjamBbZkVm4z1ggOauJ_GP4GHkMkTD7d-8&s', id: 0  }, { name: 'praia', description: 'muito boa asodiaosdhaosdihaoshdaoishdoahs  ', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgIg20Hu38MgqDWoMy67cPpRGhD8Hmn8L0J-_uQre4hICYJ5q2TjK97OmiQ&s' }])

  useEffect(() => {

    const updateProductList =  async () => {

      const objList = { list: productsList }

      await AsyncStorage.setItem('productList', JSON.parse(objList))

    }

    updateProductList()

  }, [productsList])

  useEffect(() => {

    const getUpdatedList = async () => {

      const updatedList = JSON.stringify(await AsyncStorage.getItem('productList'))

      setProductsList(updatedList.list)

    }

    getUpdatedList()

  }, [pages])
  

  return (
    <View style={{ display: 'flex', alignItems: 'center', flex: 1 }}>

      {(pages == 0) &&

        <CadasterPage 
          setPages={setPages}
          setEmail={setEmail}
          setPassw={setPassw}
          setSecPassw={setSecPassw}
          email={email}
          passw={passw}
          secPassw={secPassw}
        />

      }

      {(pages == 1) &&

        <LoginPage
          setPages={setPages} 
          setEmail={setEmail}
          setPassw={setPassw}
          email={email}
          passw={passw}
        />

      }

      {(pages == 2) &&
      
        <AdminProducts 
          productsList={productsList}
          setProductList={setProductsList}
          setPages={setPages}
        />

      }

      {(pages == 3) &&
      
        <View><Text>oi</Text></View>

      }

    </View>
  )
}
