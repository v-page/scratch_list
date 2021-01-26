<template>
  <v-container id="contain" style="mx-1">
    <v-col class="text-center">
      <v-row>
        <p class="title text-center">{{ id }}年生</p>
      </v-row>
      <v-row id="body" cols="12">
        <template>
          <v-layout row class="mx-1" style="flex-wrap: wrap">
            <span
              v-for="scratchData in scratchData[id]"
              :key="scratchData.name"
              class="d-flex flex-wrap"
              style="flex-wrap: wrap"
            >
              <v-col>
                <v-card
                  style="line-height: 0px; flex-wrap: wrap"
                  class="card"
                >
                  <p class="pt-6 font-weight-bold">{{ scratchData.title }}</p>
                  <p class="mt-6">{{ scratchData.name }}</p>
                  <!-- <v-btn
                    color="primary"
                    dark
                    @click.stop="
                      text = scratchData.comment;
                      dialog = true;
                    "
                    style="position: absolute; top: 10px; right: 10px"
                    icon
                    fab
                  >
                    <v-icon dark>mdi-information</v-icon>
                  </v-btn> -->

                  <p>
                    <iframe
                      class="mx-0 mt-3 pa-0"
                      :src="scratchData.url"
                      :height="height()"
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      allowfullscreen
                    ></iframe>
                  </p>
                  <template>
                  <p class="text-justify font-weight-medium ma-3 mt-0 pb-3" style="line-height: 25px;">{{scratchData.comment}}</p>
                  </template>
                </v-card>
              </v-col>
            </span>
          </v-layout>
        </template>
      </v-row>
    </v-col>

    <!-- <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title class="headline"> コメント </v-card-title>

            <v-card-text>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </template>-->
    </v-container
  >
</template> 

<style>
.card {
  /* height: calc( 40vw + 200px ); */
  width: 40vw;
}
iframe {
  width: 100%;
  /* height: 40vw; */
}
@media only screen and (max-width: 480px) {
  .card {
    /* height: 85vw; */
    width: 85vw;
  }
  iframe {
    width: 100%;
    /* height: 85vw; */
  }
}
</style>

<script>
export default {
  props: ["id", "scratchData"],
  // data() {
  //   return {
  //     dialog: false,
  //     text: "",
  //   };
  // },
  methods:{
    height(){
      return document.querySelector('iframe')?.clientWidth / (485 / 402) || "50vw"
    },
  },
  mounted(){
    document.querySelector("iframe").onload = () => this.$forceUpdate()
  }
};
</script>
