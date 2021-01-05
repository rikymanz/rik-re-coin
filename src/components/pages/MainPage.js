import React , {useState} from 'react';
import Modal from 'react-modal';
// caricmaneot componenti3
import Loading from '../children/Loading'
import Wallets from '../children/Wallets'
import AddModal from '../children/AddModal'
import UpdateModal from '../children/UpdateModal'

const MainPage = () => {
  // Wallets, dati presi dall'API. Il cambiamento della variabile aggiorna il componente
  const [wallets, setWallets] = useState([]); // inizializzazione array in array vuoto
  // variabili di stato dei modal, gestiscono la visualizzazione
  const [addModalIsOpen,setAddIsOpen] = useState(false);
  const [updateModalIsOpen,setUpdateIsOpen] = useState(false);
  // METODO DI INIAZILIAZZAIONE - funzione autoinvocante
  const initWallets = async () => {
    let temp = await (await fetch('https://rik-ex-coin.azurewebsites.net/wallets')).json()
    setWallets(temp)
  } // FIne funzione init

  // funzioni apertura e chiusura modal di aggiunta
  function openAddModal() {
    setAddIsOpen(true);
  }
  function closeAddModal() {
    setAddIsOpen(false);
  }

  // funzioni apertura e chiusura modal di update
  function openUpdateModal() {
    setUpdateIsOpen(true);
  }
  function closeUpdateModal() {
    setUpdateIsOpen(false);
  }

  // chiamata di inzializzazone iniziale wallets 
  if( wallets.length === 0){
    initWallets()
  }

  // funzioni da passare ai figli, vengono definite nel padre e poi eseguite nei figli
  const funcs = {
    // funzione di aggiunta nuovo wallet
    addWallet : ()=>{
      openAddModal()
    },
    // funzione di modifica wallet
    updateWallet : ()=>{
      openUpdateModal()
    },
  } // fine oggetto con le funzioni da passare ai figli

  return (
    <div style={style.main}>
      <a href='https://rik-ex-coin.azurewebsites.net/wallets'> Database </a>
      {/* Lista dei componenti wallets - Se non è stato impostato vinee visualizzato il componente di caricamento*/}
      { wallets.length > 0 ? <Wallets wallets={wallets} funcs={funcs} /> : <Loading /> }    
      {/** Modal di aggiunta nuovo Wallet */}
      <Modal
          isOpen={addModalIsOpen}
          onRequestClose={closeAddModal}
          style={style.modal}
      >
         <AddModal />
      </Modal>
      {/** Modal di modifica Wallet */}
      <Modal
          isOpen={updateModalIsOpen}
          onRequestClose={closeUpdateModal}
          style={style.modal}
      >
         <UpdateModal />
      </Modal>
    </div>
  );
}

let style = {
  main:{
    height:'100%',
    backgroundColor:'#F2F5FF',
    textAlign:'center',
    overflowY:'scroll'
  },
  modal:{
    maxWidth:400,
    margin:'0 auto'
  }
}

export default MainPage;
