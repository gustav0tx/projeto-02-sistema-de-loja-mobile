import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CadasterPage from './components/CadasterPage';
import LoginPage from './components/LoginPage';
import AdminProducts from './components/AdminProductsPage';
import ClientProductsPage from './components/ClientProductsPage';
import ClientCart from './components/ClientCart';
import saveProductsInStorage from './hooks/admin/saveProductsInStorage';
import updateProducts from './hooks/admin/updateProducts';
import { Button } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() { 

  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [secPassw, setSecPassw] = useState('')
  const [pages, setPages] = useState(0)
  const [cart, setCart] = useState([])
  const [productsList, setProductsList] = useState([])

  useEffect(() => {

    saveProductsInStorage(productsList)

  }, [productsList])

  useEffect(() => {

    updateProducts(setProductsList)

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

      <Button title='ver' onPress={ async () => {console.log(await AsyncStorage.getAllKeys())}} />

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
          setProductsList={setProductsList}
          setPages={setPages}
        />

      }

      {(pages == 3) &&
      
        <ClientProductsPage
          productsList={productsList}
          setProductsList={setProductsList}
          setPages={setPages}
          cart={cart}
          setCart={setCart}
        />

      }

      {(pages == 4) &&
        
        <ClientCart
          cart={cart}
          setCart={setCart}
          setPages={setPages}
          productList={productsList}
        />

      }

    </View>
  )
}
