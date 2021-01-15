<template>
  <nav class="navbar-expand-lg">
    <div class="navbar--wrapper">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link :to="{ name: 'loan-form' }" class="nav-link active" aria-current="page">
              <BaseIcon icon="home"/>Home
              </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <BaseIcon icon="payments"/>Payments
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navigation-menu'
}
</script>
<style>
.navbar-expand-lg .navbar-nav {
  flex-direction: column;
}
.navbar-nav {
  width: 100%;
}
.nav-item {
  padding: 25px 0;
}
.nav-link {
  color: #fff;
}
.navbar-nav .icon {
  float: left;
  padding-right: 15px;
}
.nav-link.active, .nav-link:hover {
  color: #01D167;
}
</style>
