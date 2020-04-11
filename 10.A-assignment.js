// 10.A-assignment.js
//
// Axios and Vue
// 

Vue.component('show-episode', {
  template: `<div v-bind:class="['episode']">
      <div v-bind:class="['image']">
        <img v-bind:src="episode.image.original" v-bind:alt="episode.name">
      </div>
      <div>
        <h3>{{episode.name}}</h3>
        <h5>
          Season {{episode.season}}, episode #{{episode.number}}<br>
          Original airdate: {{episode.airdate}}
        </h5>
        <span v-html="episode.summary"></span>
      </div>
    </div>`,
  props: ['episode'],
});

var baseURL = "http://api.tvmaze.com/shows/722"
const vm = new Vue({
  el: "#goldenApp",
  data: {
    episodes: []
  },
  mounted () {
    axios
      .get(baseURL + "/episodes")
      .then(response => {
        vm.episodes = response.data.filter(
          episode => {
            return episode.season === 7
          }
        );
      });
  }
})