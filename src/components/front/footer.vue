<template>
  <div>
      <section class="py-5 bg-white">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <h2 class="sm-title">
                          <i class="fa fa-map-marker-alt pp"></i>
                          Find Us
                      </h2>
                      <p>Dehradun,Uttarakhand</p>
                  </div>
                  <div class="col-md-4">
                      <h2 class="sm-title">
                          <i class="fa fa-phone pp"></i>
                          Contact Us
                      </h2>
                      <p>+91 8745214587</p>
                  </div>
                  <div class="col-md-4">
                      <h2 class="sm-title">
                          <i class="fa fa-envelope pp"></i>
                          Mail
                      </h2>
                      <p>contact@Yogprerna.com</p>
                  </div>
              </div>
          </div>
      </section>

      <section class="py-4">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <img src="../../assets-front/images/logo.png" width="200px" alt="Yogprerna">
                      <p class="py-3">The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Subscribe to Font Awesome Pro and get instant access to the v6 beta. </p>
                      <h4>
                          Follow Us
                          <a href="#"><i class="fab fa-facebook"></i></a>
                          <a href="#"><i class="fab fa-instagram-square"></i></a>

                      </h4>

                  </div>
                  <div class="col-md-2">
                      <h3 class="sm-title">Useful Links</h3>
                      <ul class="highlight-points-1">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Contact Us</a></li>
                      </ul>
                  </div>
                  <div class="col-md-2">
                      <h3 class="sm-title">About Us</h3>
                      <ul class="highlight-points-1">
                          <li><a href="#">About</a></li>
                          <li><a href="#">Portfolio</a></li>
                          <li><a href="#">Details</a></li>
                          <li><a href="#">Expert Team</a></li>
                          <li><a href="#">Latest News</a></li>
                      </ul>
                  </div>
                  <div class="col-md-3">
                      <h3 class="sm-title">Subscribe</h3>
                      <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                      <form action="">
                          <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Email address</label>
                              <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp">
                              <button type="submit" class="btn site-btn-2">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>

      <section class="">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <p class="small">Copyright &copy; 2021,All Right Reserved</p>
                  </div>
                  <div class="col-md-6">
                      <!-- <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Terms</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Policy</a></li>
                          <li><a href="#">Contact</a></li>
                          </ul> -->
                  </div>
              </div>
          </div>
      </section>


      <!-- Modal -->
      <b-modal id="front-search-modal" size="lg" title="Search Anything" ok-title="Submit" class="theme-modal">
                      <div class="sticky-top bg-light p-0 m-0">
                          <input class="form-control pt-2 mb-1" placeholder="Type to search...">
                          <p class="mb-0 px-2">Search for: <i class="font-weight-bold">Adiyogi</i> </p>
                      </div>
                      <div class="search-result pr-3">
                          <a href="#">
                              <div>
                                  <img src="assets/images/yp-icon.png" width="20px" alt="">
                                  <p class="d-inline-block">Adiyogi yogpeeth</p>
                                  <p class="d-inline-block float-right">Institute</p>
                              </div>
                          </a>
                      </div>
      </b-modal>

<!--      <footer class="footer noMargin">-->
<!--          <div class="container-fluid">-->
<!--            <div class="row">-->
<!--              <div class="col-md-12 footer-copyright text-center">-->
<!--                  <p class="mb-0">Copyright 2020 © <a href="/">Yogprerna</a>  </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </footer>-->
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

<script>
    $(document).ready(function(){

        $('#itemslider').carousel({ interval: 3000 });

        $('.carousel-showmanymoveone .item').each(function(){
            var itemToClone = $(this);

            for (var i=1;i<6;i++) {
                itemToClone = itemToClone.next();

                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }

                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-"+(i))
                    .appendTo($(this));
            }
        });
    });
</script>
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
