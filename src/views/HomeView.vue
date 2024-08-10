<script setup lang="ts">
</script>

<template>
  <main>
	<!--Modal-->
  <div class="modal fade template-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <!--Modal header-->
        <div class="modal-header">

          <!--Modal title-->
          <h5 class="modal-title">This is the modal title.</h5>

          <!--Modal close-->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div><!--end modal header-->

        <!--Modal body-->
        <div class="modal-body">
          <h6>Brutalist Websites.</h6>
          <p>In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design.</p>
        </div><!--End modal body-->

        <!--Modal footer-->
        <div class="modal-footer text-center">
          <p>This is the modal footer.</p>
        </div><!--end modal footer-->

      </div><!--end modal content-->
    </div>
  </div><!--end modal-->


  <!--preloader-->
  <div class="preloader preloader-xl">
    <div>
      <p class="loading-text">
        <span>B</span>
        <span>r</span>
        <span>u</span>
        <span>t</span>
        <span>a</span>
        <span>l</span>
      </p>
      <p>is loading</p>
    </div>
  </div>


  <!--nav-->
  <nav class="container-fluid">
    <div class="row elem-border">
      <div class="col-sm-8 anchor brand">
        <h1 class="stretch-text"><a href="/">
          <span class="stretch_it">BRUTAL</span>
        </a></h1>
      </div>
      <div class="col-sm-2 navigation">
        <ul class="navlist">
          <li class="anchor"><a href="#features">Features</a></li><!--
          --><li class="anchor"><a href="#services">Services</a></li><!--
          --><li class="anchor"><a href="#prices">Prices</a></li>
        </ul>
      </div>
      <div class="col-sm-2 anchor">
        <a class="contact" href="#contact">Contact</a>
      </div>
    </div>
  </nav><!--end nav-->


  <!--main-->
  <div class="container-fluid">


    <!--tagline-->
    <div id="hero" class="row elem-border">
      <div class="col-xl-4 col-lg-5 col-md-7">
        <h2 class="stretch-text"><span>A Brutalist</span></h2>
        <h3 class="stretch-text"><span>HTML 5 Template</span></h3>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-5 text-center">
        <a class="cta" target="_blank" href="https://themeforest.net/item/brutal-a-brutalist-bootstrap-v4-one-page-html-template/21291031">
          <span>Get it on ThemeForest</span>
        </a>
      </div>
    </div><!--endtagline-->


    <!--features-->
    <div id="features" class="row">
      <div class="col-lg-6 col-md-12 features-left order-2 order-sm-2">
        <div class="row elem-border">
          <div class="col-xl-12 col-lg-12 col-md-6">
            <div class="row">
              <div class="col-lg-6">
                <h4>Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-lg-6 text-right">
                <div class="btn-style-main">
                    <a href="#" data-toggle="modal" data-target=".template-modal">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-6">
            <div class="row">
              <div class="col-lg-6">
                <h4>Bootstrap v4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-lg-6 text-right">
                <div class="btn-style-main">
                    <a href="#" data-toggle="modal" data-target=".template-modal">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 order-1 order-lg-2 order-sm-1">

        <div class="row elem-border features-title">
          <div class="col-12">
            <h3>There are features</h3>
          </div>
        </div>

        <div class="row elem-border features-right">
          <div class="col-lg-6 col-md-6">
            <div class="row">
              <div class="col-12">
                <h4>HTML5</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col-12 text-right">
                <div class="btn-style-main">
                    <a href="#" data-toggle="modal" data-target=".template-modal">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="row">
              <div class="col-12">
                <h4>CSS3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-right">
                <div class="btn-style-main">
                    <a href="#" data-toggle="modal" data-target=".template-modal">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div><!--end features-->


    <!--products-->
    <div id="products" class="row elem-border">

      <div class="col-lg-4 col-md-12 order-2 order-lg-1 order-md-2 order-sm-2 products-left-outer">
        <div class="row products-left">
          <div class="col-6">
            <div class="product-wrap" data-product-id="1">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
          <div class="col-6">
            <div class="product-wrap" data-product-id="2">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
        </div>
        <div class="row products-left">
          <div class="col-6">
            <div class="product-wrap" data-product-id="3">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
          <div class="col-6">
            <div class="product-wrap" data-product-id="4">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 order-1 order-lg-2 order-md-1 order-sm-1 text-center products-center">

          <div class="products-title-mobile">
              <h3>There are<br/> products</h3>
          </div>

          <div class="products-carousel owl-carousel owl-theme">

              <div class="products-title-carousel">
                  <h3>There are<br/> products</h3>
              </div>

              <div id="product-1" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #1</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-2" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #2</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-3" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #3</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-4" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #4</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-5" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #5</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-6" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #6</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-7" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #7</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

              <div id="product-8" class="product-carousel-item" style="background-image: url(/Brutal/img/placeholder.png);">
                  <div class="product-description">
                      <h5>Product #8</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                      <a href="#" class="product-link">
                          &rarr;
                      </a>
                  </div>
              </div>

          </div>
      </div>

      <div class="col-lg-4 col-md-12 order-3 products-right-outer">
        <div class="row products-right">
          <div class="col-6">
            <div class="product-wrap" data-product-id="5">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
          <div class="col-6">
            <div class="product-wrap" data-product-id="6">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
        </div>
        <div class="row products-right">
          <div class="col-6">
            <div class="product-wrap" data-product-id="7">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
          <div class="col-6">
            <div class="product-wrap" data-product-id="8">
              <img src="/Brutal/img/placeholder.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div><!--end products-->


    <!--prices-->
    <div id="prices" class="row elem-border">
      <div class="col-lg-2 prices-left">
        <h3>There<br/> are<br/> prices</h3>
      </div>
      <div class="col-lg-10">
        <div class="row prices-right">
          <div class="col-sm-4 col-12">
            <div class="prices-wrap">
              <h4>&dollar;10</h4>
              <p>Really very basic</p>
              <span>&larr;</span>
            </div>
            <div class="prices-details">
              <h5>The Basic Package</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <ul>
                <li>- Single License</li>
                <li>- One User</li>
                <li><del>- Free Support</del></li>
                <li><del>- Customization</del></li>
              </ul>
              <span>&larr;</span>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            <div class="prices-wrap">
              <h4>&dollar;15</h4>
              <p>Mildly less basic</p>
              <span>&larr;</span>
            </div>
            <div class="prices-details">
              <h5>The Standard Package</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <ul>
                <li>- Single License</li>
                <li>- Three Users</li>
                <li>- Free Support</li>
                <li><del>- Customization</del></li>
              </ul>
              <span>&larr;</span>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            <div class="prices-wrap reveal-left">
              <h4>&dollar;20</h4>
              <p>Slighty less basic</p>
              <span>&rarr;</span>
            </div>
            <div class="prices-details">
              <h5>The Premium Package</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <ul>
                <li>- Single License</li>
                <li>- Unlimited Users</li>
                <li>- Free Support</li>
                <li>- Customization</li>
              </ul>
              <span>&larr;</span>
            </div>
          </div>
        </div>
      </div>
    </div><!--end prices-->


    <!--Video-->
    <div id="video" class="row elem-border">
      <div class="col-lg-4 video-left">
        <h3>There<br/> is a<br/> video</h3>
      </div>
        <div id="video-wrap" class="col-lg-8">
        <p>play</p>
        <img class="placeholder-image" src="/Brutal/img/placeholder-large.png" alt="">
        <div class="owl-carousel owl-theme">
          <div class="item-wrap">
            <div class="item-video">
              <a class="owl-video" href="https://www.youtube.com/watch?v=VGwVAxRHxgM"></a>
            </div>
          </div>
        </div>
      </div>
    </div><!--end video-->


    <!--Gallery-->
    <div id="gallery" class="row elem-border">
      <div class="col-lg-8 order-2 order-lg-1 carousel-wrap">
        <div id="gallery-carousel" class="owl-carousel owl-theme">
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
            <div class="img-wrap"><img src="/Brutal/img/placeholder-large.png" alt=""/></div>
        </div>
      </div>
      <div class="col-lg-4 order-1 order-lg-2 gallery-right">
        <h3>There<br/> is a<br/> gallery</h3>
      </div>
    </div><!--end gallery-->


    <!--services-->
    <div id="services" class="row">
      <div class="col-lg-4 col-md-12 order-2 order-lg-1 order-md-2 order-sm-2">
        <div class="row elem-border services-left">
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a>
          </div>
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Sell</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 order-1 order-lg-2 order-md-1 order-sm-1 text-center services-center">
        <h3>We Do<br/> Things</h3>
      </div>
      <div class="col-lg-4 col-md-12 order-3">
        <div class="row elem-border services-right">
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Develop</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a>
          </div>
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Promote</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a>
          </div>
        </div>
      </div>
    </div><!--end services-->


    <!--team-->
    <div id="team" class="row elem-border">
      <div class="col-lg-3 col-md-12 team-left">
        <h3>There<br/> is a<br/> Team</h3>
      </div>
      <div class="team-carousel-wrap col-lg-9 col-md-12">
        <div class="team-carousel owl-carousel owl-theme">

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Developer</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Amy Unthank</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Designer</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Rose Underwood</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Marketing</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Samantha Fox</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Developer</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Amy Unthank</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Designer</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Rose Underwood</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>Marketing</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Samantha Fox</a>
            </span>
            </div>
          </div>

        </div>
        <div class="team-carousel-nav"></div>
      </div>
    </div><!--end team-->


    <!--Contact-->
    <div id="contact" class="row elem-border">
      <div class="col-lg-2 col-md-12 order-2 order-lg-1 order-md-2 contact-left">
        <ul id="social">
          <li>Facebook</li><!--
          --><li>Twitter</li><!--
          --><li>YouTube</li>
        </ul>
      </div>
      <div class="col-lg-10 col-md-12 order-1 order-lg-2 order-md-1 contact-right">
        <div class="row">
          <div class="col-md-3 col-sm-12 contact-title">
            <h3>There<br/> is a<br/> Form</h3>
          </div>
          <div class="col-md-9 col-sm-12">
            <form class="contact-form" method="post" action="./php/contact.php">
              <span class="sending">We're Sending Your Message</span>
              <span class="sent">Message received, we'll be in touch.</span>
              <div class="form-group">
                <label for="contact-name">Name</label>
                <input type="text" class="form-control" id="contact-name" name="contact-name" placeholder="Name" required><!--
                --><input type="email" class="form-control" id="contact-email" name="contact-email" placeholder="Email" required>
                <label for="contact-email">Email</label>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" id="message" placeholder="Message"></textarea>
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>    <!--end contact-->


  </div><!--end main-->


  <!--Footer-->
  <footer class="container-fluid">
    <div class="row elem-border">
      <div class="col-12 text-right">
        <p><a href="https://www.michaelpalmerwebdesign.com">&copy;2018 MP Web</a></p>
      </div>
    </div>
  </footer><!--end footer-->
  </main>
</template>
