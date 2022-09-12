<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

<!--    <modal v-if="showModal" @close="showModal = false">-->
<!--      <slot name="header">경고</slot>-->
<!--      <slot name="footer" @click="showModal = false">-->
<!--        할 일을 입력하세요.-->
<!--        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>-->
<!--      </slot>-->
<!--    </modal>-->


      <!-- use the modal component, pass in the prop -->
      <modal v-bind:propsdata="showModal" @close="showModal = false">
        <template v-slot:header> <!-- v-slot 으로 MyModal에 있는 slot 태그 내용 커스텀할 수 있음-->
          <h3>경고</h3>
        </template>
        <template v-slot:footer>
          <span @click="showModal = false">할 일을 입력하세요.
               <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
          </span>

        </template>
      </modal>


  </div>
</template>

<script>
import Modal from "@/components/common/MyModal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: '',
      showModal : false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo' , value); //상위 컴포넌트인 App.vue 의 addTodo 메소드에 파라미터를 넘기며 호출한다.
        this.clearInput();
      } else {
        console.log('aaa');
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right , #6478FB , #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>