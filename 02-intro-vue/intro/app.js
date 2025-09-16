const { createApp, ref } = Vue

const app = createApp({
    // template: `
    // <h1>{{ message}}</h1>
    // <p>{{ subMiss }}</p>
    // `,

    setup() {
        const message = ref("Bon dia!");
        const subMiss = ref("Benvinguts al meu web");

        // setTimeout(() => {
        //     message.value = "Hola!";
        //     subMiss.value = "Reactivament canviant el missatge";
        // }, 1000);

        const changeMessage = () => {
            message.value = "Hola!";
            subMiss.value = "Reactivament canviant el missatge";
        }

        return { 
            message,
            subMiss,
            changeMessage,
         };
    }
});



app.mount('#app')
