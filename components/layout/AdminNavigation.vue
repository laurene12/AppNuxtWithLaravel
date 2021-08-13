<template>
  <div>
    <v-navigation-drawer permanent class="main-navigation">
      <v-list-item class="header-item">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MAIN
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in mainsItems"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <!-- Manage Listing -->
      <v-list-item class="header-item">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MANAGE LISTING
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
      <!-- Manage Account -->
      <v-list-item class="header-item">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            MANAGE ACCOUNT
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in itemsAccount"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'User', icon: 'mdi-account' },
        { title: 'Custom', icon: 'mdi-face-agent' },
        { title: 'Reports', icon: 'mdi-chart-bar ' }

      ],
      itemsAccount: [
        { title: 'My Package ', icon: 'mdi-gift ' },
        { title: 'My Profile', icon: 'mdi-account' },
        { title: 'Log Out', icon: 'mdi-power ' }

      ],
      mainsItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' }

      ],
      right: null
    }
  }
}
</script>
<style lang="scss" scoped>
.main-navigation{
  height: 100vh !important;
  .header-item{
    padding: 10px;
    .text-h6{
      font-size: 1rem !important;
    }
  }
  i{
    color: #1784a4 !important;
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #1784a4;
  }
   /* lien active*/
      .v-list .v-list-item--active {
          color:blue ;
          .menu-link-icon i{
            color:blue;
            background-color:red ;
          }
      }
      .v-list-item--link:before {
        background-color: blue;
        font-weight: bold;
        font-size: 23px;
      }
}
</style>
