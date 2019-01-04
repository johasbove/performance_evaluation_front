<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="(header, index) in headers.slice(0, 6)">
            <v-subheader :key="header.value">{{ header.name }}</v-subheader>
            <v-list-tile :key="header.title" avatar>
              <v-list-tile-avatar>
                <v-icon small color="blue darken-2">
                  {{ header.icon }}
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title :v-html="getUserPropValue(header.value)" v-if="user"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider :key="index"></v-divider>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'user',
  data: () => ({
    headers: [
      {
        text: 'Nombre',
        value: 'name',
        icon: 'face'
      },
      {
        text: 'Familia de metas',
        value: 'family_goal.family_name',
        icon: 'class'
      },
      {
        text: 'Cargo',
        value: 'family_goal.position',
        icon: 'work'
      },
      {
        text: 'Área',
        value: 'family_goal.area',
        icon: 'group'
      }
    ],
    user: {},
    user_id: '',
    error: null
  }),
  created: function () {
    this.getUser()
  },
  methods: {
    getUser: function () {
      let user_id = this.$route.params.id
      this.$http.get('http://localhost:3000/users/' + user_id).then(response => {
        this.user = response.body
      }, response => {
        this.error = response.error
      })
    },
    getUserPropValue: function(propName) {
      return this.user[propName]
    }
  }
}
</script>

<style>
  .table-option {
    padding-left: 24px;
  }
</style>
