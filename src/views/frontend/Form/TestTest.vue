<template>
    <div class="file-upload-section">
      <label id="preview" for="file-upload">
          <img :key="url" v-if="url" :src="url" />
      </label>
      <div class="file-upload">
        <label class="file-upload-button" for="file-upload">Upload Image</label>
        <input multiple type="file" id="file-upload" @change="onFileChange"/>
      </div>
      <div v-if="url">
        <button @click="removeImage()">Remove image</button>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data: function () {
        return {
          url: null
        }
      },
      methods: {
        onFileChange (e) {
          let file = e.target.files[0]
          this.url = URL.createObjectURL(file)
        },
        removeImage: function () {
          this.url = null
        }
      }
    }
  </script>