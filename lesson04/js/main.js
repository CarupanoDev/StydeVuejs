var vm = new Vue({
                el: "#app",
                data: {
                    assets:["Motivation", "Basic experience"],
                    newAsset: '',
                     vue:{
                    exp : null,
                    years : 0,
                    description : ''
                   }
                },

                computed: {
                    descriptionError: function (){
                      var val = this.vue.description.trim();

                      if(val == ''){
                        return 'This field is required.';
                      }

                      if(val.length < 5){
                        return 'Please write a description greater than 5 characters.';
                      }

                      if(val.length > 1000){
                        return 'Please write a description shorter than 1000 characters.'
                      }
                    },

                    descriptionStyles: function(){
                      if(this.descriptionError){
                        return {color: '#a94442'};
                      }

                      return {};
                    }
                },
               
                methods : {
                  addToAssets()
                  {
                    this.assets.push(this.newAsset)
                  }
                }
            });