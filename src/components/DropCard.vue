<template>
    <div class="drop-card" @click="toggle">
        <div class="drop-header">
            <slot name="header"></slot>
            <img src="../assets/arrow.svg" 
                alt="arrow" 
                v-bind:style="[this.isOpen ? {'transform': 'rotate(90deg)'} : {'transform':' rotate(0deg)'}]" 
            />
        </div>
        <div v-if="this.isOpen" class="drop-details" >
            <hr>
            <slot name="details"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DropCard',
  data: () => {
    return {
      isOpen: false
    }
  },

  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;  
    }
  }
}
</script>

<style>

.drop-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 30px 20px;
  border: 1px solid #4285F4;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 20px 0;
}

.drop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.drop-header img {
  transition: all 0.5s
}

.drop-details hr {
  margin: 15px 0;
}

</style>