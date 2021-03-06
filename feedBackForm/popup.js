

export default {
    template:
    `<div class="popup">
        <div class="title">Дякуємо,</div>
        <div class="description">Ваша заявка успішно надіслана</div>
        <button @click="action"><span>на головну сторінку</span></button>
    </div>`,
    methods:{
        action(){
            location.assign('/');
        }
    },
    mounted(){
        document.body.classList.add('is-popup-opened');
        console.log('onMounted!');
    },
    unmounted(){
        console.log('onUnmounted!');
        document.body.classList.remove('is-popup-opened');
    }
};
