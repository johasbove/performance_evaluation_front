<template>
  <v-card>
    <v-card-title>
      Usuarios
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
      </v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="users" :search="search" class="elevation-1">
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          No se encontraron usuarios
        </v-alert>
      </template>
      <template slot="items" slot-scope="user">
        <td class="text-xs-left">{{ user.item.name }}</td>
        <td class="text-xs-left">{{ user.item.family_goal.family_name }}</td>
        <td class="layout px-0">
          <v-icon class="table-option" small color="blue darken-2" @click="showUser(user.item.id)">
            arrow_forward
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

export default {
  name: 'users',
  data: () => ({
    search: '',
    headers: [
      { text: 'Nombre', value: 'name' },
      { text: 'Familia de metas', value: 'family_goal.family_name' },
      { text: 'Herramientas', value: 'name', sortable: false, width: '150px', align: 'left'}
    ],
    users: [],
    error: null
  }),
  created: function () {
    this.getUsers()
  },
  methods: {
    getUsers: function () {
      this.$http.get('http://localhost:3000/users').then(response => {
        this.users = response.body
      }, response => {
        this.error = response.error
      })
    },
    showUser: function (user_id) {
      this.$router.push('/user/' + user_id)
    }
  }
}
</script>

<style>
  .table-option {
    padding-left: 24px;
  }
</style>
