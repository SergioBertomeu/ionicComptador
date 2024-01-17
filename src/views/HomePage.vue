<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button color="primary" fill="solid" @click="presentAlert">
            <ion-icon slot="icon-only" :icon="alertCircle"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Time Fighter</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Prova</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-button id="tapMeButton" color="primary" @click="countClick">Clicam</ion-button>
        <ion-icon v-if="showHeart" class="heart" name="heart"></ion-icon>
        <p>Temps restant: {{ timeLeft }} segons</p>
        <p>Clics: {{ clickCount }}</p>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon} from '@ionic/vue';

import {alertCircle, helpCircle, personCircle} from "ionicons/icons";

import { ref } from 'vue';
import {alertController, createAnimation} from '@ionic/vue';
const count = ref(0);
const presentAlert = async () => {
  const alert = await alertController.create({
    header: 'Time Fighter 2.0',
    subHeader: 'Creat per Sergio Bertomeu',
    message: 'Per veure el codi font, fes clic en OK.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          window.open('https://github.com/SergioBertomeu/ionicComptador', '_blank');
        }
      }
    ],
  });

  await alert.present();
};
const tap = async () => {
  count.value++; // Incrementar el contador
};


const timeLeft = ref(3); // 3 segons per al comptador enrrere
const clickCount = ref(0); // Comptador de clics
let timer: number | null = null; // Variable per al temporitzador
let timerStarted = false; // Indicador si el temporitzador ha començat
let initialTime = 3; // Defineix el temps inicial del comptador enrrere
let initialClick = 0; // Defineix els clicks inicials al reinicia


const showHeart = ref(false);

const countClick = () => {
  showHeart.value = true;
  // Resto de tu lógica aquí...
  if (!timerStarted) {
    startCountdown(); // Començar el temporitzador si encara no ha començat
    timerStarted = true;
  }
  clickCount.value++;
  // Opcional: Ocultar el corazón después de un tiempo
  setTimeout(() => {
    showHeart.value = false;
  }, 100); // Ajusta este tiempo según necesites
};


const startCountdown = () => {
  timeLeft.value = initialTime; // Reiniciar el temps a l'inici
  clickCount.value = 0; // Reiniciar els clics
  timer = window.setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer as number); // Aturar el temporitzador
      timer = null;
      timerStarted = false; // Permetre reiniciar el temporitzador en el proper clic
      alert(`Clics realitzats: ${clickCount.value}`);
      // Opcional: Reiniciar el temporitzador aquí si es desitja que comenci automàticament
      timeLeft.value = initialTime; // Restableix el comptador al temps inicial
      clickCount.value = initialClick; // Restableix el clic al clic inicial
    }
  }, 1000) as unknown as number;
};




</script>

<style scoped>

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.heart {
  font-size: 50px;
  color: red;
  animation: pulse 1s infinite;
}



#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
