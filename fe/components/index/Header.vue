<template>
    <header>
      <a-row type="flex" justify="space-between">
        <a-col :xl="18" :lg="12" :sm="11">
          <a-space :size="40">
            <nuxt-link to="/">
              <div class="logo" :style="{backgroundImage: `url('${settings.blogLogo}')`}" />
            </nuxt-link>
            <a-space class="header__menu--pc" :size="40">
              <a-dropdown>
                <nuxt-link to="/">
                  <a-space>
                    Trang chủ
                  </a-space>
                </nuxt-link>
              </a-dropdown>
              <nuxt-link to="/giao-dich-thuat-toan">
                <a-space>
                  Giao dịch thuật toán
                </a-space>
              </nuxt-link>
              <nuxt-link to="/san-pham/">
                <a-space>
                  Sản phẩm
                </a-space>
              </nuxt-link>
              <nuxt-link to="/market-overview/">
                <a-space>
                  Về chúng tôi
                </a-space>
              </nuxt-link>
              <a-dropdown>
                <a class="black" @click.prevent>
                  Kiến thức
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <nuxt-link to="/articles/">
                        <a-space>
                          Tất cả
                        </a-space>
                      </nuxt-link>
                    </a-menu-item>
                    <a-menu-item>
                      <nuxt-link to="/articles/news/">
                        <a-space>
                          Tin tức
                        </a-space>
                      </nuxt-link>
                    </a-menu-item>
                    <a-menu-item>
                      <nuxt-link to="/articles/trading-bots/">
                        <a-space>
                          Các trợ lý giao dịch
                        </a-space>
                      </nuxt-link>
                    </a-menu-item>
                    <a-menu-item>
                      <nuxt-link to="/articles/learn/">
                        <a-space>
                          Học
                        </a-space>
                      </nuxt-link>
                    </a-menu-item>
                    <a-menu-item>
                      <a-space>
                        <nuxt-link to="/articles/algo-trade/">
                          Algo Trade
                        </nuxt-link>
                      </a-space>
                    </a-menu-item>
                    <a-menu-item>
                      <a-space>
                        <nuxt-link to="/articles/pine-script/">
                          Pine Script
                        </nuxt-link>
                      </a-space>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </a-space>
          </a-space>
        </a-col>
        <a-col
          :xl="6"
          :lg="7"
          :sm="12"
          :xs="3"
          style="height: 48px; display: flex; justify-content: end"
        >
          <a-space
            style="height: 100%"
            :size="25"
            :lg="{ align: 'end', size: 20 }"
          >
            <nuxt-link v-if="isLoggedIn" to="/admin/">
              <a-button class="getStarted" style="background-color: #0143cc; color: white">
                Quản lý trang
                <font-awesome-icon
                  style="margin-left: 10px"
                  :icon="['fas', 'arrow-right']"
                />
              </a-button>
            </nuxt-link>
            <template v-else>
              <nuxt-link to="/auth/login" class="signIn">
                <b>Đăng nhập</b>
              </nuxt-link>
              <nuxt-link to="/auth/register">
                <a-button class="getStarted" style="background-color: #0143cc; color: white">
                  Bắt đầu
                  <font-awesome-icon
                    style="margin-left: 10px"
                    :icon="['fas', 'arrow-right']"
                  />
                </a-button>
              </nuxt-link>
            </template>
  
            <a-button class="header__menu__button" @click="showDrawer">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-drawer
        placement="right"
        :closable="false"
        :visible="visible"
        width="320"
        @close="onClose"
      >
        <div class="logo" :style="{backgroundImage: `url('${settings.blogLogo}')`, paddingBottom: '10px'}" />
        <a-space direction="vertical" :size="40">
          <a-collapse :bordered="false">
            <template #expandIcon="props">
              <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
            </template>
            <nuxt-link to="/" style="display: block;padding: 12px 16px;padding-left: 40px;">
              <a-space>
                Trang chủ
              </a-space>
            </nuxt-link>
            <nuxt-link to="/giao-dich-thuat-toan" style="display: block;padding: 12px 16px;padding-left: 40px;">
              <a-space>
                Giao dịch thuật toán
              </a-space>
            </nuxt-link>
            <!-- <a style="display: block;padding: 12px 16px;padding-left: 40px;">Copy-Trading</a>
            <a style="display: block;padding: 12px 16px;padding-left: 40px;">Pricing</a> -->
            <nuxt-link to="/market-overview/" style="display: block;padding: 12px 16px;padding-left: 40px;">
              <a-space>
                Về chúng tôi
              </a-space>
            </nuxt-link>
            <a-collapse-panel key="3" header="Kiến thức">
              <a-menu>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/">
                      Tất cả
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/news/">
                      Tin tức
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/trading-bots/">
                      Các trợ lý giao dịch
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/learn/">
                      Học
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/algo-trade/">
                      Algo Trade
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
                <a-menu-item>
                  <a-space>
                    <nuxt-link to="/articles/pine-script/">
                      Pine Script
                    </nuxt-link>
                  </a-space>
                </a-menu-item>
              </a-menu>
            </a-collapse-panel>
          </a-collapse>
        </a-space>
        <a-space :size="25" style="display: flex; justify-content: center; margin-top: 30px">
          <nuxt-link v-if="isLoggedIn" to="/admin/">
            <a-button class="getStarted" style="background-color: #0143cc; color: white">
              Quản lí trang
              <font-awesome-icon
                style="margin-left: 10px"
                :icon="['fas', 'arrow-right']"
              />
            </a-button>
          </nuxt-link>
          <template v-else>
            <nuxt-link to="/auth/login">
              <b>Đăng nhập</b>
            </nuxt-link>
            <nuxt-link to="/auth/register">
              <a-button style="background-color: #0143cc; color: white">
                Bắt đầu
                <font-awesome-icon
                  style="margin-left: 10px"
                  :icon="['fas', 'arrow-right']"
                />
              </a-button>
            </nuxt-link>
          </template>
        </a-space>
      </a-drawer>
    </header>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Header',
    data () {
      return {
        visible: false,
        settings: this.$store.state.settings,
        isLoggedIn: false
      };
    },
    // mounted () {
    //   this.updateLogin();
    // },
    // methods: {
    //   updateLogin () {
    //     this.isLoggedIn = this.$auth.$state.loggedIn;
    //   },
    //   showDrawer () {
    //     this.visible = true;
    //   },
    //   onClose () {
    //     this.visible = false;
    //   }
    // }
  });
  </script>
  
  <style scoped>
  header {
    padding: 32px 32px 0 28px;
    margin-bottom: 40px;
    text-transform: capitalize;
  }
  a {
    color: black;
  }
  .header__menu__button {
    display: none;
  }
  
  .logo {
    width: 48px;
    height: 48px;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100%;
  }
  
  @media (max-width: 1200px) {
    .header__menu--pc {
      display: none;
    }
    .header__menu__button {
      display: block;
    }
    header {
      padding: 10px;
      border-bottom: 2px solid #f2f2f2;
      position: sticky;
      top: 0px;
      background-color: #fff;
      z-index: 3;
    }
    .ant-collapse-borderless > .ant-collapse-item {
      border: 0px;
    }
    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: 0px;
    }
    .ant-collapse-borderless {
      background-color: #fff
    }
  }
  @media (max-width: 580px) {
    .signIn, .getStarted {
      display: none;
    }
  }
  header:after {
    content: "beta";
    position: fixed;
    z-index: 1070;
    width: 80px;
    height: 25px;
    background: #0143cc;
    top: 7px;
    left: -20px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 27px;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  </style>
  