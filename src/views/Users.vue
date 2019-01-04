<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    >
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          No hay usuarios
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'users',
  data: () => ({
    headers: ['Nombre', 'Familia de metas'],
    users: [],
    error: null
  }),
  created: function () {
    this.get_users()
  },
  methods: {
    get_users: function () {
      this.$http.get('http://localhost:3000/users').then(response => {
        this.users = response.body
      }, response => {
        this.error = response.error
      })
    }
  }
}
</script>
