<template>
  <div>
    <Header />
    <h1>Tacurando</h1>
    <b-row>
      <b-col sm="3">
        <b-card
          title="Árvore Pika"
          img-src="https://imagensemoldes.com.br/wp-content/uploads/2018/06/%C3%81rvores-%C3%81rvore-PNG.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Cacetinho está vendendo essa árvorere </b-card-text>

          <b-button href="#" variant="primary">Veja mais</b-button>
        </b-card>
      </b-col>
      <b-col sm="3">
        <b-card
          title="Árvore Pika"
          img-src="https://imagensemoldes.com.br/wp-content/uploads/2018/06/%C3%81rvores-%C3%81rvore-PNG.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Cacetinho está vendendo essa árvorere </b-card-text>

          <b-button href="#" variant="primary">Veja mais</b-button>
        </b-card>
      </b-col>
      <b-col sm="3">
        <b-card
          title="Árvore Pika"
          img-src="https://imagensemoldes.com.br/wp-content/uploads/2018/06/%C3%81rvores-%C3%81rvore-PNG.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Cacetinho está vendendo essa árvorere </b-card-text>

          <b-button href="#" variant="primary">Veja mais</b-button>
        </b-card>
      </b-col>
      <b-col sm="3">
        <b-card
          title="Árvore Meio Pika"
          img-src="https://i.kym-cdn.com/entries/icons/facebook/000/005/340/ratinho.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Cacetinho está vendendo essa árvorere </b-card-text>

          <b-button href="#" variant="primary">Veja mais</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.mb-2 {
  padding: 2px;
  max-width: 19rem !important;
  max-height: 29rem !important;
  margin: 10px;
}
.box {
  margin-bottom: 65px;
}

img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  object-fit: cover !important;
  box-sizing: border-box !important;

  border: solid !important;
  min-width: 300px;
  min-height: 250px;
  max-width: 300px;
  max-height: 250px;
  width: auto;
  height: auto;
}

.img-container:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
