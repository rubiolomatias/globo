app.component('publicar-comentario',{
    props:{
        usuario:{
            type:String,
            required:true
        }
    },
    template:/*html*/
    `<div class="comentar">
        <input id="comentario" v-model="comentario" ref="comentario" type="text" :placeholder="textError">
        <button id="comentar" @click="comentar">Comentar</button>
    </div>`,
    data(){
        return{
            comentario:"",
            textError:"Deja tu comentario..."
        }
    },
    methods:{
        comentar(){
            if(this.usuario === ""){
                this.$emit('falta-campo',this.usuario)
            }else if(this.comentario === ""){
                this.$refs.comentario.focus();
            }else{
                this.$emit('enviar-comentario',this.comentario)
                this.comentario = '';
            }
        }
    }
    
})