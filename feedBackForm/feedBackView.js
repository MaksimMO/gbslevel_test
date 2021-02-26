import feedBackForm from './form.js';

export default {
    template:`
    <div class="address">ТСК “МАГІГРАНД”, вул. Келецька, 78В</div>
    <div class="logo"></div>
    <div class="phone">0800 35 55 55</div>
    <div class="text-1">або<br>залиште свій телефон і ми зателефонуємо Вам</div>
    <feedBackForm />
    `,
    components:{
        feedBackForm
    }
};
