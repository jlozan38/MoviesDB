<template>
  <v-card>
    <v-img
      class="white--text align-end"
      contain
      :src="`${imageURL}${movie.poster_path}`"
    />
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle class="pb-0">
      <v-chip
        v-for="genre in movie.genre_ids"
        :key="genre"
        class="ma-2 purple--text text--darken-4"
        color="purple lighten-4"
        x-small
      >
        {{ genres.find(g => g.id === genre).name }}
      </v-chip>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ movie.overview }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>
        Share
      </v-btn>

      <v-btn color="orange" text>
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    imageURL: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      genres: []
    };
  },
  created() {
    this.getGenres();
  },
  methods: {
    async getGenres() {
      const genres = await this.$axios("genre/movie/list");
      this.genres = genres.data?.genres;
    }
  }
};
</script>