<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import { momentsOf39, fetchRandomMomentsOf8 } from '@/services/conlliu-service';
import ScarabaModal from '@/components/ScarabaModal.vue';

// Vue Routerのインスタンスを取得
const router = useRouter();

const randomMomentsOf8 = fetchRandomMomentsOf8();

function navigateHome(event: MouseEvent) {
  event.preventDefault();
  router.push('/');
}
</script>

<template>
  <main>
  <!--preloader-->
  <div class="preloader preloader-xl">
    <div>
      <p class="loading-text">
        <span><img id="scaraba-logo" src="/Brutal/img/scaraba/SCARABA_logo.svg" alt="logo"></span>
        <span><img class="scaraba-typography" src="/Brutal/img/scaraba/typography-1-su.svg" alt="S" /></span>
        <span><img class="scaraba-typography" src="/Brutal/img/scaraba/typography-2-ka.svg" alt="CA" /></span>
        <span><img class="scaraba-typography" src="/Brutal/img/scaraba/typography-3-ra.svg" alt="RA" /></span>
        <span><img class="scaraba-typography" src="/Brutal/img/scaraba/typography-4-ba.svg" alt="BA" /></span>
      </p>
      <p>is loading</p>
    </div>
  </div>

  <!--nav-->
  <nav class="container-fluid">
    <div class="row elem-border">
      <div class="col-sm-8 anchor brand" @click="navigateHome">
        <div id="scaraba-brand" class="d-flex justify-content-between align-items-center h-100">
          <img id="scaraba-logo" src="/Brutal/img/scaraba/SCARABA_logo.svg" alt="logo">
          <span class="d-flex justify-content-around align-items-center h-100 w-100">
            <img class="scaraba-typography" src="/Brutal/img/scaraba/typography-1-su.svg" alt="S">
            <img class="scaraba-typography" src="/Brutal/img/scaraba/typography-2-ka.svg" alt="CA">
            <img class="scaraba-typography" src="/Brutal/img/scaraba/typography-3-ra.svg" alt="RA">
            <img class="scaraba-typography" src="/Brutal/img/scaraba/typography-4-ba.svg" alt="BA">
          </span>
        </div>
      </div>
      <div class="col-sm-2 navigation">
        <ul class="navlist">
          <li class="anchor text-truncate"><RouterLink to="#featured-exhibition">Featured Exhibition</RouterLink></li>
          <li class="anchor text-truncate"><RouterLink to="#about">We</RouterLink></li>
          <li class="anchor text-truncate"><RouterLink to="#artists">Artists</RouterLink></li>
        </ul>
      </div>
      <!-- TODO: localization -->
      <!-- <div class="col-sm-2 anchor">
        <a class="contact" href="#contact">Contact</a>
      </div> -->
    </div>
  </nav>
  <!--end nav-->


  <!--main-->
  <div class="container-fluid">
    <!--tagline-->
    <div id="hero" class="row elem-border">
      <div class="col-xl-4 col-lg-5 col-md-7">
        <h2 class="stretch-text"><span>SCARABA</span></h2>
        <h3 class="stretch-text text-transform-none"><span>Art Gallery</span></h3>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-5 text-center d-flex justify-content-center align-items-center">
        <p class="p-5 bg-black color-white fs-xl">We curate uncopyable art, discovering new meanings for entities onchain.<br />—SCARABA: where the unseen is manifested.</p>
      </div>
    </div><!--endtagline-->


    <!--featured exhibition-->
    <div id="featured-exhibition" class="row">
      <div class="col-lg-6 col-md-12 features-left order-2 order-sm-2">
        <div class="row elem-border">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-12">
                <img src="/Brutal/img/conlliu/conlliu.png" alt="Conlliū" class="object-fit-cover" width="100%">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 order-1 order-lg-2 order-sm-1">
        <div class="row elem-border features-title">
          <div class="col-12">
            <h3>Featured Exhibition</h3>
          </div>
        </div>

        <div class="row elem-border features-right">
          <div class="col-12 d-flex flex-column justify-content-end">
            <div class="row">
              <div class="col-12 d-flex align-items-end flex-wrap">
                <h2 class="text-transform-none">Conlliū</h2>
                <div class="d-flex align-items-center ml-3 mb-3">
                  <img src="/Brutal/img/pfp-icons/le-semeur.jpg" alt="Shinya SUZUKI" width="24" height="24" class="rounded-circle mr-2 object-fit-cover">
                  <span>Shinya SUZUKI</span>
                </div>
              </div>
              <div class="col-12">
                <h4 class="text-transform-none">—A new digital mythology, forged at the frontier of NFTs.</h4>
                <p>Conlliū transcends mere art creation; it infuses irreversible and uncopyable historical moments with the divine, intertwining them with unseen forces that culminated in the mythical erection of the Dragon God's sanctuary.</p>
              </div>
              <div class="col-12 text-right">
                <div class="btn-style-main">
                    <a href="#" data-toggle="modal" data-target="#about-conlliu">
                    <span>Read more</span>
                  </a>
                </div>
                <ScarabaModal modal-id="about-conlliu">
                  <template #modal-title>
                    <span class="text-transform-none">Conlliū</span>: A Ritualistic Convergence of Art and the Divine
                  </template>

                  <template #modal-body>
                    <section>
                      <p>Through this ritualistic journey, each artwork in Conlliū becomes a nexus of physical finality and digital perpetuity, offering a window into the mystical interplay of forces that shape our perception of the sacred. More than mere artifacts, these pieces are portals to an era where the divine and mortal realms merge seamlessly.</p>
                    </section>
                    <section>
                      <h5>The Creation Process</h5>
                      <p>The process begins with the physical act of creation, where Shinya Suzuki’s masterpieces are set aflame, marking the end of their physical form. In these fleeting moments of destruction, a spectacle unfolds, meticulously captured and reborn as digital artifacts on the blockchain. Each transformation is unique, preserving the final flash of existence as an uncopyable NFT.</p>
                    </section>
                    <section>
                      <h5>Beyond Art: Witnesses to Transformation</h5>
                      <p>These digital renditions transcend art; they are testimonies to time and transformation, eternal witnesses to the power and transience of creation. They reflect the cyclical nature of destruction and rebirth, offering a profound commentary on existence itself—challenging us to reconsider the boundaries between the ephemeral and the eternal.</p>
                    </section>
                    <section>
                      <h5>Join the Journey</h5>
                      <p>Join us in witnessing the convergence of art, technology, and spirituality in Conlliū—where every ember tells a story, and every story illuminates the path to the divine.</p>
                    </section>
                  </template>
                </ScarabaModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!--end featured exhibition-->


    <!--39 moments-->
    <div id="products" class="row elem-border">

      <div class="col-lg-4 col-md-12 order-2 order-lg-1 order-md-2 order-sm-2 products-left-outer">
        <div class="row products-left">
          <div
            v-for="moment in randomMomentsOf8.slice(0, 4)"
            :key="`rand-moment-${moment.id}`"
            class="col-6"
          >
            <div class="product-wrap" :data-product-id="moment.id">
              <img :src="moment.image" alt="" class="vertical-video-ratio object-fit-cover">
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 order-1 order-lg-2 order-md-1 order-sm-1 text-center products-center">

          <div class="products-title-mobile">
            <h3>39 Divine Moments <br/>of Erecting the Ryūjin's Hokora</h3>
          </div>

          <div class="products-carousel owl-carousel owl-theme">

              <div class="products-title-carousel d-flex justify-content-center align-items-center vertical-video-ratio object-fit-cover">
                <h3>39 Divine Moments <br/>of Erecting the Ryūjin's Hokora</h3>
              </div>

            <div
              v-for="moment in momentsOf39"
              :key="`moment-${moment.id}`"
              :id="`product-${moment.id}`"
              class="product-carousel-item vertical-video-ratio object-fit-cover"
              :style="`background-image: url(${moment.image});`"
            >
                <div class="product-description">
                    <h5>Moment #{{ moment.id }}</h5>
                    <a href="#" class="product-link">
                        &rarr;
                    </a>
                </div>
            </div>

          </div>
      </div>

      <div class="col-lg-4 col-md-12 order-3 products-right-outer">
        <div class="row products-right">
          <div
            v-for="moment in randomMomentsOf8.slice(4, 8)"
            :key="`rand-moment-${moment.id}`"
            class="col-6"
          >
            <div class="product-wrap" :data-product-id="moment.id">
              <img :src="moment.image" alt="" class="vertical-video-ratio object-fit-cover">
            </div>
          </div>
        </div>
      </div>
    </div><!--end 39 moments-->


    <!--Roadmap-->
    <div id="prices" class="row elem-border">
      <div class="col-lg-2 prices-left">
        <h3>Roadmap</h3>
      </div>
      <div class="col-lg-10">
        <div class="row prices-right">
          <div class="col-sm-4 col-12">
            <div class="prices-wrap">
              <h4>39<sup>&ast;</sup></h4>
              <p>Daily Unveiling</p>
              <span>&larr;</span>
            </div>
            <div class="prices-details">
              <h5>Capturing Ephemera:</h5>
              <p>Each day, a unique moment of Conlliū is revealed in a preview of downscaled quality. Note: The actual NFTs are available in in high-resolution, capturing every detail of the mystical past, immortalized in digital form.</p>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            <div class="prices-wrap">
              <h4>1<sup>&dagger;</sup></h4>
              <p>Final Reward</p>
              <span>&larr;</span>
            </div>
            <div class="prices-details">
              <h5>The Complete Chronicle:</h5>
              <p>Upon collecting all 39 moments, the sole collector is granted ownership of the full video NFT, presented in stunning 4K resolution. This unique testimony of the sacred ritual captures every detail with unparalleled clarity.</p>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            <div class="prices-wrap reveal-left">
              <h4>8<sup>&sect;</sup></h4>
              <p>Diviner's Privilege</p>
              <span>&rarr;</span>
            </div>
            <div class="prices-details">
              <h5>Early Access Elite:</h5>
              <p>Eight select 'Diviners' receive early access, securing their part in this digital mythology before public release. Stay tuned for further updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div><!--end roadmap-->


    <!--Video-->
    <!-- <div id="video" class="row elem-border">
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
    </div> -->
    <!--end video-->


    <!--Mysteries of Conlliu-->
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
        <h3>Mysteries<br/> <span class="text-transform-none">of</span><br/> <span class="text-transform-none">Conlliū</span></h3>
      </div>
    </div><!--end Mysteries of Conlliu-->

    <!--about-->
    <div id="about" class="row">
      <div class="col-lg-4 col-md-12 order-2 order-lg-1 order-md-2 order-sm-2">
        <div class="row elem-border services-left">
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Curate</h4>
            <p>We summon art that eludes replication, timeless yet transient.</p>
            <!-- <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a> -->
          </div>
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Discover</h4>
            <p>We trace the unseen depths of NFTs, reshaping perceptions.</p>
            <!-- <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a> -->
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 order-1 order-lg-2 order-md-1 order-sm-1 text-center services-center">
        <h3>We</h3>
      </div>
      <div class="col-lg-4 col-md-12 order-3">
        <div class="row elem-border services-right">
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Manifest</h4>
            <p>We unveil hidden symmetries, illuminating the obscured.</p>
            <!-- <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a> -->
          </div>
          <div class="col-lg-12 col-sm-6 col-6">
            <h4>We<br/> Empower</h4>
            <p>We elevate spirits, guiding souls to ethereal realms.</p>
            <!-- <a href="#" data-toggle="modal" data-target=".template-modal">Read more</a> -->
          </div>
        </div>
      </div>
    </div><!--end about-->


    <!--artists-->
    <div id="artists" class="row elem-border">
      <div class="col-lg-3 col-md-12 team-left">
        <h3>Artists</h3>
      </div>
      <div class="team-carousel-wrap col-lg-9 col-md-12">
        <div class="team-carousel owl-carousel owl-theme">

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#1</span></p>
              <div>
                <img src="/Brutal/img/pfp-icons/le-semeur.jpg" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="https://www.instagram.com/aon_polo" target="_blank" rel="noopener noreferrer">Shinya SUZUKI</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#2</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Awaiting</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#3</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Awaiting</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#4</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Awaiting</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#5</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Awaiting</a>
            </span>
            </div>
          </div>

          <div class="team-member">
            <div class="team-wrap">
              <p><span>#6</span></p>
              <div>
                <img src="/Brutal/img/placeholder.png" alt="">
              </div>
              <span class="team-member-name">
              <a class="btl-anchor" href="#">Awaiting</a>
            </span>
            </div>
          </div>

        </div>
        <div class="team-carousel-nav"></div>
      </div>
    </div><!--end artists-->


    <!--Contact-->
    <!-- <div id="contact" class="row elem-border">
      <div class="col-lg-2 col-md-12 order-2 order-lg-1 order-md-2 contact-left">
        <ul id="social">
          <li class="anchor"><a href="https://www.instagram.com/scaraba_art_gallery/" target="_blank" rel="noopener noreferrer" class="d-inline-block h-100 w-100">Instagram</a></li>
          <li class="anchor">...</li>
          <li class="anchor">...</li>
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
                <input type="text" class="form-control" id="contact-name" name="contact-name" placeholder="Name" required>
                <input type="email" class="form-control" id="contact-email" name="contact-email" placeholder="Email" required>
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
    </div> -->
    <!--end contact-->

  </div><!--end main-->
  </main>
</template>

<style scoped>
#scaraba-brand:hover img {
  filter: invert(1);
}
#scaraba-logo {
  width: 16%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}
.scaraba-typography {
  width: 12%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.text-transform-none {
  text-transform: none !important;
}
.bg-black {
  background-color: #000 !important;
}
.color-white {
  color: #fff !important;
}
.fs-xl {
  font-size: 1.414em
}
.object-fit-cover {
  object-fit: cover;
}
.vertical-video-ratio {
  aspect-ratio: 9 / 16;
}
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>