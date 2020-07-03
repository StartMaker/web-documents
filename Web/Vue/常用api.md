vue上手容易，但是需要额外记住的api相比于react来说过多

##### template

```` 
v-bind:绑定属性名
v-if:判断语句
v-for:循环语句
v-model: 双向绑定
````

#####style

```` 
scoped: 样式只能用于当前组件
````

##### script

1、watch、computed

````
<template>
  <div>
    <label>
      question:
      <input v-model="question"/>
    </label>
    <label>
      answer:
      <input v-model="answer"/>
    </label>
    <div>result: {{all}}</div>
    <div>result2: {{all2}}</div>
    <div>{{question}}</div>
  </div>
</template>
<script>
  export default {
    watch: {
      //监听question状态的变化
      question: function(newQuestion, OldQuestion) {
        this.all2 = newQuestion;
      }
    },
    filters: {
      question: function (e) {
        console.log(e);
        return e;
      }
    },
    computed: {
      all: function() {
        return this.question + '---' + this.answer;
      }
    },
    data() {
      return {
        //question状态的变化
        question: '',
        answer: '',
        all2: ''
      };
    }
  }
</script>
````