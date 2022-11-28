<template>
    <div id="app">
        <input id="file-upload" type="file" multiple @change="uploadImage" />
        <div v-for="(image, key) in productImages" :key="key">
            <div class="image-holder">
                <img v-bind:ref="'image'" alt="" src="" />
                <button type="button" @click="removeImage(image, key)">x</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            productImages: [],
        };
    },
    methods: {
        uploadImage(e) {
            let selectedFiles = e.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                this.productImages.push(selectedFiles[i]);
            }
            this.applyImage();
        },

        removeImage(image, index) {
            console.log(this.productImages);
            this.productImages.splice(index, 1);
            this.applyImage();
            //this.$refs.image[index].src = "" // You are hidding the 3rd one that is now in index 1.
        },
        applyImage() {
            for (let i = 0; i < this.productImages.length; i++) {
                let reader = new FileReader();

                reader.onload = (e) => {
                    this.$refs.image[i].src = e.reader.result;
                };
                reader.readAsDataURL(this.productImages[i]);
            }
        },
    },
};
</script>
  
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.image-holder {
    float: left;
}
</style>
  