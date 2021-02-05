<template>
  <b-navbar>
    <template #brand>
      <!-- <b-navbar-item tag="router-link" :to="{ path: '/' }"> -->
      <b-navbar-item>
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }"
        ><b-icon icon="home" size="is-small" class="mx-0"> </b-icon> Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'About' }">
        About
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item tag="router-link" :to="{ name: 'About' }">
          About
        </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
