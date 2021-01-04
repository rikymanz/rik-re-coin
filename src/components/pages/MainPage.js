import React , {useState} from 'react';
// caricmaneot componenti3
import Loading from '../children/Loading'
import Wallets from '../children/Wallets'

const MainPage = () => {
  // Wallets, dati presi dall'API. Il cambiamento della variabile aggiorna il componente
  const [wallets, setWallets] = useState([]); // inizializzazione array in array vuoto
  // Funzione di richiesta dati API
  const getWallets = async () => {
    //let data = await fetch('https://rik-ex-coin.azurewebsites.net/wallets')
    let data =  await (await fetch('http://localhost:3000/wallets')).json()
    return data
  } // fine getWallets

  // METODO DI INIAZILIAZZAIONE - funzione autoinvocante
  (async() => {
    // inizilaizzazione wallets, solo se non sono già impostati
    if( wallets.length === 0){
      let temp = await getWallets()
      setWallets(temp)
    }
  })() // FIne funzione init

  return (
    <div style={styles.main}>
      {/* Lista dei componenti wallets - Se non è stato impostato vinee visualizzato il componente di caricamento*/}
      { wallets.length > 0 ? <Wallets wallets={wallets} /> : <Loading /> }    
    </div>
  );
}

let styles = {
  main:{
    
  }
}

export default MainPage;
