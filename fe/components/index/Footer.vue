<template>
    <footer>
      <div class="container footer">
        <a-row type="flex" justify="space-around">
            <a-col :xs="{span: 24}" :md="{span: 6}">
            <h2>Updating</h2>
          </a-col>
          <a-col :xs="{span: 24}" :md="{span: 6}">
            <h2>Updating</h2>
          </a-col>
          <a-col :xs="{span: 24}" :md="{span: 6}">
            <h2>Updating</h2>
          </a-col>
        </a-row>
      </div>
      <p style="text-align: center;">
        @2024 Bản quyền thuộc về cửa hàng hoa Teresa
      </p>
    </footer>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Exchanges',
    data () {
      return {
        settings: this.$store.state.settings
      };
    }
  });
  </script>
  
  <style scoped>
  .footer {
    padding-top: 30px;
    font-size: 16px;
    background: #ffffff;
    bottom: 0;
    width: 100%;
  
  }
  
  footer {
    padding-bottom: 0px;
    padding-top: 30px;
  }
  
  footer .des {
    font-size: 20px;
    margin-bottom: 40px;
  }
  
  footer .title {
    color: #000;
    margin-bottom: 25px;
    font-size: 20px;
    font-family: Inter, sans-serif;
    margin-top: 35px
  }
  
  footer .menu a {
    margin-bottom: 20px;
    color: #000;
    font-size: 14px;
    line-height: 2.2;
  }
  
  .logo {
    width: 48px;
    height: 48px;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100%;
    margin-bottom: 10px
  }
  @media (max-width: 768px) {
    .footer {
      font-size: 14px;
    }
    footer .des {
      font-size: 18px;
    }
    footer .title {
      font-size: 18px;
    }
    footer .menu a {
      font-size: 12px;
    }
  }
  </style>
  