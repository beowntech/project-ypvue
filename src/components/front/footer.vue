<template>
  <div>
    <footer class="footer noMargin">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 footer-copyright text-center">
                  <p class="mb-0">Copyright 2020 © <a href="/">Yogprerna</a>  </p>
              </div>
            </div>
          </div>
        </footer>
  </div>
</template>

<script>
  import json from '../../data/menu'
export default {
  name: 'footerpage',
  data(){
    return{
      customizer :false,
      data:"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json)),
    }
  }
}
</script>
<style>
    .noMargin{
        margin: 0!important;
    }
</style>
