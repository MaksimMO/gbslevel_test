import popup from './popup.js'
export default {
    template:
    `<form @submit.prevent="onSubmit">
    <div class="input-wrapper">
    <input autocomplete="off" v-model="name" type="text" id="name" name="name">
    <label for="name">Ім’я</label>
        <div class="error-message">Дане поле заповнене не коректно</div>
    </div>
    <div class="input-wrapper">
    <input autocomplete="off" v-model="phone" type="number" id="phone" name="phone">
    <label for="phone">Телефон</label>
        <div class="error-message">Дане поле заповнене не коректно</div>
    </div>
        <button type="submit"><span>Залишити заявку</span></button>
    </form>

    <teleport to="body">
        <popup v-if="modalOpen"/>
    </teleport>
    `,
    data(){
        return {
            name:'',
            phone:'',
            modalOpen:false
        }
    },
    methods:{
        onSubmit(e){
            let body = new FormData();
            body.append('name', this.name);
            body.append('phone', this.phone);

            fetch('/feedback-form', {method:'POST', body}).finally(()=>{
                this.modalOpen=true;
                // alert('ok');
            });

        },
        valid(){
            return false;
        }
    },
    components:{
        popup
    }
};
