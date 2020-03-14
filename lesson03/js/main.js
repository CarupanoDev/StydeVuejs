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
               
                methods : {
                  addToAssets()
                  {
                    this.assets.push(this.newAsset)
                  }
                }
            });