import { useRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import CadasterPage from './components/CadasterPage';
import LoginPage from './components/LoginPage';
import AdminProducts from './components/AdminProductsPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ClientProductsPage from './components/ClientProductsPage';
import ClientCart from './components/ClientCart';

export default function App() { 

  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [secPassw, setSecPassw] = useState('')
  const [pages, setPages] = useState(3)
  const [cart, setCart] = useState([])
  const [productsList, setProductsList] = useState([{ name: 'cafe', description: 'é legal', price: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXZe8qQD9rfry3D75GyIFcGHdcvjamBbZkVm4z1ggOauJ_GP4GHkMkTD7d-8&s', id: 0  }, { name: 'praia', description: 'muito boa asodiaosdhaosdihaoshdaoishdoahs  ', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgIg20Hu38MgqDWoMy67cPpRGhD8Hmn8L0J-_uQre4hICYJ5q2TjK97OmiQ&s', id: 1 }])

  

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
          setProductsList={setProductsList}
          setPages={setPages}
        />

      }

      {(pages == 3) &&
      
        <ClientProductsPage
          productsList={productsList}
          setProductsList={setProductsList}
          setPages={setPages}
        />

      }

      {(pages == 4) &&
        
        <ClientCart
          cart={cart}
          setCart={setCart}
          setPages={setPages}
        />

      }

    </View>
  )
}
