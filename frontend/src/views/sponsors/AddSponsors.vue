<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsors"/>
      
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form v-on:submit="addSponsors">
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
                v-model="nacionalidade"
                type="text"
                class="form-control"
                id="nac"
                placeholder="Nacionalidade"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="empresa"
                type="text"
                class="form-control"
                id="emp"
                placeholder="Empresa"
                required
              />
            </div>
            
            
            <button
              @click="addSponsors"
              type="button"
              class="btn btn-outline-success mr-2"
            ><i class="fas fa-plus-square"></i> ADICIONAR SPONSORS</button>
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
      addSponsors(e){
        e.preventDefault()
        const name = document.getElementById('nom')
        const nacionalidade = document.getElementById('nac')
        const empresa = document.getElementById('emp')
        

         // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Nacionalidade: ' +nacionalidade.value + ' \r\n ' + 
            'Empresa: ' + empresa.value  

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'sponsorsData.txt';    // The file to save the data.

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