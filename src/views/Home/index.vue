<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
          <p>ホーム画面</p>
        サークルのURL貼ったりできますがどうしましょう

        <v-list dense>
          <v-list-item-group v-model="group">
            <v-list-item
                v-for="item in yearsList"
                :key="item"
                :to="`/scratch_view/${item}`"
                :style="background_Color"
                class="mb-1"
            >
              <v-list-item-title > {{ item }}年生の作品 </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["yearsList"],

  data:() => ({
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    background_Color() {
      if (this.$vuetify.theme.dark) {
        return {
          background: "#333",
        };
      } else {
        return {
          background: "#ddd",
        };
      }
    },
  },


}


</script>
