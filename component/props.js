Vue.component('child-component' , {
   props: ['propsdata'],
   template: '<p>{{propsdata}}</p>'
});

Vue.component('sibling-component' , {
    props: ['propsdata2'],
    template: '<p>{{propsdata2}}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        message2: 'sibling Message!'
    }
});