<template>
  <v-container class="pa-0 ma-0">
    <v-col class="text-center pa-0 ma-0">
      <v-row>
        <p class="title text-center ml-8">{{id}}年生</p>
      </v-row>
      <v-row id="body">
        <template class="ma-0 pa-0 mb-6">
          <span v-for="scratchData in scratchData[id]" :key="scratchData.name"
                class="ma-0 pa-0 mb-6"
          >
          <v-card
              :class="cardsClass"
              :width="scratchWidth"
          >
            <p>{{ scratchData.name }}</p>
            <p><iframe
                class="ma-0 pa-0 mb-6"
                :src="scratchData.url"
                :width="scratchWidth"
                :height="scratchHeight"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                allowfullscreen
            ></iframe></p>
          </v-card>
            </span>
        </template>

      </v-row>


    </v-col>
  </v-container>
</template>

<script>
export default {
  props: ["id","scratchData"],
  computed:{
    cardsClass(){
      const displayWidth = document.body.clientWidth;
      const displayHeight = document.body.clientHeight;
      if(displayWidth>=displayHeight){

        return "ml-10 mb-6 "

      }else{
        return "ma-0 pa-n2 mb-6"
      }
    },
    scratchWidth(){
      const displayWidth = document.body.clientWidth;
      const displayHeight = document.body.clientHeight;
      // const ScratchIframeRatio = 402 / 485;

      /* if
        ----------
        |         |
        ----------
      */
      if (displayWidth >= displayHeight) {
        // iframeElm.style.height = ToString_And_AddPx(displayHeight);
        return ToString_And_AddPx(
            (displayWidth - 150 ) / 2
        );
      } else {
        return ToString_And_AddPx(displayWidth);
        // iframeElm.style.height = ToString_And_AddPx(
        //     displayWidth * ScratchIframeRatio
        // );
      }

      function ToString_And_AddPx(num) {
        return `${String(num)}px`;
      }
    },
    scratchHeight(){
      const displayWidth = document.body.clientWidth;
      const displayHeight = document.body.clientHeight;
      const ScratchIframeRatio = 402 / 485;

      if (displayWidth >= displayHeight) {
        return  ToString_And_AddPx((displayWidth - 150 ) * ( ScratchIframeRatio) / 2);
      } else {
        return ToString_And_AddPx(
            displayWidth * ScratchIframeRatio
        );
      }
      function ToString_And_AddPx(num) {
        return `${String(num)}px`;
      }
    },
  }
};
</script>