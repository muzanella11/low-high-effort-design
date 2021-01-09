<template>
  <div class="l-low-effort">
    <!-- Begin Hero -->
    <section class="section section--hero">
      <div class="hero__container container">
        <div class="hero__wrapper">
          <h1>
            Low Effort Page
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Begin Main -->
    <section class="section section--main pt-5">
      <div class="main__container container">
        <div class="main__filters mb-4">
          <div class="row">
            <div
              class="col-lg-3 col-12 mb-4"
            >
              <el-date-picker
                v-model="entry.keyword"
                class="w-100"
                placeholder="Pick a day"
              />
            </div>

            <div class="col-lg-3 col-12 mb-4">
              <el-select v-model="entry.select" placeholder="Select" class="w-100">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </div>

        <div class="main__entries">
          <div class="row">
            <div
              v-for="(item, index) in 4"
              :key="index"
              class="col-lg-3 col-md-6 mb-4"
            >
              <div class="card">
                <img src="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_Nas-1059x720-FIT_AND_TRIM-b8f8e1ba5da08927a6aa082ded6a487f.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit" class="card-img-top" alt="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_Nas-1059x720-FIT_AND_TRIM-b8f8e1ba5da08927a6aa082ded6a487f.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit">
                <div class="card-body">
                  <h5 class="card-title">
                    Card title
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main -->
  </div>
</template>

<script src="./low-effort.js"></script>
