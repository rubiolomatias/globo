app.component('profile-data',{
    template:
    /*html*/
    `<div class="informacion">
        <img :src="foto" alt="Picture Jane Doe">
        <div class="info">
            <h1>{{nombre}}</h1>
            <p><span>Email</span>: {{email}}</p>
            <p><span>Fecha de nacimiento</span>: {{fechaNacimiento}}</p>
            <p><span>Telfono</span>: {{telefono}}</p>
            <p><span>Ciudad</span>: {{ciudad}}</p>
            <p class="work">Trabando en <span>{{trabajo}}</span></p>
        </div>
        <button @click="seguidor" :style="{ backgroundColor: fondoSeguir }">{{botonSeguir}}</button>
    </div>`,
    data(){
        return{
            foto:"./assets/img/user.jpeg",
            nombre: "Jane Doe",
            email: "jane_doe@email.com",
            fechaNacimiento : "01/05/1996",
            telefono: "918-936-9585",
            ciudad: "Tokyo, Japan",
            trabajo: "Lawn N",
            botonSeguir : "Seguir",
            fondoSeguir: "#3b82f6"
        }
    },
    methods:{
        seguidor(){
            if(this.botonSeguir === "Seguir"){
                this.botonSeguir = "Dejar de seguir";
                this.fondoSeguir = "#ff0000";
            }else{
                this.botonSeguir = "Seguir";
                this.fondoSeguir = "#3b82f6"

            }
        }
    }
})