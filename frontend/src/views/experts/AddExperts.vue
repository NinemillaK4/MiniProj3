<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsors"/>
      
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form v-on:submit="addExperts">
            <div class="form-group">
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="nom"
                placeholder="Nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="Formacao"
                type="text"
                min="1"
                max="100"
                class="form-control"
                id="for"
                placeholder="Formação"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="telefone"
                type="number"
                class="form-control"
                id="tel"
                placeholder="Telefone"
                required
              />
            </div>
            
            
            <button
              @click="addExperts"
              type="button"
              class="btn btn-outline-success mr-2"
            ><i class="fas fa-plus-square"></i> ADICIONAR EXPERTS</button>
            <!--<pre>{{ $data }}</pre>-->
            <router-link
              :to="{name: 'listQuizzes'}"
              tag="button"
              class="btn btn-outline-danger"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    data: () => ({
      
    }),

    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
      document.head.appendChild(recaptchaScript);      
    },

    methods: {
      addExperts(e){
        e.preventDefault()
        const name = document.getElementById('nom')
        const formacao = document.getElementById('for')
        const telefone = document.getElementById('tel')
        

         // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Formacao: ' +formacao.value + ' \r\n ' + 
            'Telefone: ' + telefone.value  

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'expertsData.txt';    // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
      },
        
    }
  }
</script>