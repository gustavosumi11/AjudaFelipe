<template>
  <div>
    <b-container id="cad">
      <div class="login">
        <h1>Cadastro de usuário de maconha</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Informe seu nome"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="ex: Gabriel Parisi"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Informe seu email"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="ex: aluno@123.com"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Senha"> </b-form-group>

          <b-form @submit.stop.prevent>
            <b-form-input
              type="password"
              placeholder="Insira uma senha"
              id="text-password"
              aria-describedby="password-help-block"
            ></b-form-input>
            <b-form-text id="password-help-block"> </b-form-text>
          </b-form>

          <b-row class="buttons">
            <b-col class="cancelar">
              <b-button type="reset" variant="danger">Cancelar</b-button>
            </b-col>

            <b-col class="entrar">
              <b-button type="submit" variant="primary">Cadastrar</b-button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
