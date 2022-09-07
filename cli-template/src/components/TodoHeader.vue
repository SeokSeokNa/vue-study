<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>

<script>
export default {
  name: "TodoHeader"
}
</script>

<style scoped> /*scoped 속성은 vue 에서 지원하는 속성으로 해당 스타일은 이 컴포넌트에서만 사용하겠다는 의미이다.*/
  h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>