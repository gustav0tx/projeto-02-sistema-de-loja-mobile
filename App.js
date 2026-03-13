import { useRef, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Image, Text, TextInput } from 'react-native-web';
import CadasterPage from './components/CadasterPage';
import LoginPage from './components/LoginPage';
import AdminProducts from './components/AdminProductsPage';

export default function App() { 

  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [secPassw, setSecPassw] = useState('')
  const [pages, setPages] = useState(2)
  const [productsList, setProductsList] = useState([])

  useEffect(() => {



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
          p
        />

      }

      {(pages == 3) &&
      
        <View><Text>oi</Text></View>

      }

    </View>
  )
}
