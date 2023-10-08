<script>
    export default {
        props: {
            state: Boolean,
            loadingString: String,
        },
    }
</script>

<template>
    <div v-if="state" class="overlay fixed h-screen w-screen flex justify-center items-center">
        <div class="loading">
            <div class="bounceball"></div>
            <div class="text">{{ loadingString }}....</div>
        </div>
    </div>

</template>

<style scoped>
@import  url(https://fonts.googleapis.com/css?family=Montserrat);

.overlay {
  /* display: none; */
  z-index: 2003;
  left: 0;
  top: 0;
  overflow: hidden;
  padding: 10% 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              linear-gradient(0deg, rgba(209, 47, 62, 0.7), rgba(209, 47, 62, 0.7))
}

.text {
  color: #FFCC00;
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: 27px;
}

.bounceball::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #FFCC00;
    transform-origin: 50%;
    animation: bounce 500ms alternate infinite ease;
}

@keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

</style>