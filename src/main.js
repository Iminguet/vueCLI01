import { createApp } from 'vue';

// Esta es la aplicación principal sobre la que añadiremos componentes
import App from './App.vue';

// Este es el componente
import FriendsContact from './components/FriendContact.vue';

// Añadimos la aplicacion principal a una constante
const app = createApp(App);

// Añadimos el componente a la aplicación principal con un método. 1º nombre que usaremos en la aplicación principal y luego llámada al método que hemos creado.
app.component('friend-contact', FriendsContact);

// Montamos!!
app.mount('#app');
