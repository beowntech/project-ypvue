<template>
    <div>
        <Breadcrumbs title="Pricing"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <px-card title="Become member">
                  <div slot="with-padding">
                    <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="pricingtable">
                        <div class="pricingtable-header">
                          <h3 class="title">Standard</h3>
                        </div>
                        <div class="price-value"><span class="currency">$</span><span class="amount">10</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content">
                          <li>50GB Disk Space</li>
                          <li>50 Email Accounts</li>
                          <li>Maintenance</li>
                          <li>15 Subdomains</li>
                        </ul>
                        <div class="pricingtable-signup"><a class="btn btn-primary btn-lg" href="#">Sign Up</a></div>
                      </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <div class="pricingtable">
                        <div class="pricingtable-header">
                          <h3 class="title">Premium</h3>
                        </div>
                        <div class="price-value"><span class="currency">$</span><span class="amount">20</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content">
                          <li>10% on all product</li>
                          <li>50 Email Accounts</li>
                          <li>Maintenance</li>
                          <li>15 Subdomains</li>
                        </ul>
                        <div class="pricingtable-signup"><a class="btn btn-primary btn-lg" href="#">Sign Up</a></div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="pricingtable">
                        <div class="pricingtable-header">
                          <h3 class="title">Auther pack</h3>
                        </div>
                        <div class="price-value"><span class="currency">$</span><span class="amount">50</span><span class="duration">/mo</span></div>
                        <ul class="pricing-content">
                          <li>Upload 50 product</li>
                          <li>50 Email Accounts</li>
                          <li>Maintenance</li>
                          <li>15 Subdomains</li>
                        </ul>
                        <div class="pricingtable-signup"><a class="btn btn-primary btn-lg" href="#">Sign Up</a></div>
                      </div>
                    </div>
                  </div>
                  </div>
                </px-card>
                <px-card title="Simple Pricing Card">
                  <div slot="with-padding">
                    <div class="row pricing-content">
                    <div class="col-xl-4 col-sm-8 xl-30 box-col-8">
                      <div class="card text-center pricing-simple">
                        <div class="card-body">
                          <h3>Standard</h3>
                          <h1>$15</h1>
                          <h6 class="mb-0">Lorum Ipsum</h6>
                        </div><a class="btn btn-lg btn-primary btn-block" href="#">
                          <h5 class="mb-0">Purchase</h5></a>
                      </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 xl-30 box-col-6">
                      <div class="card text-center pricing-simple">
                        <div class="card-body">
                          <h3>Business</h3>
                          <h3>$25</h3>
                          <h6 class="mb-0">Lorum Ipsum</h6>
                        </div><a class="btn btn-lg btn-primary btn-block" href="#">
                          <h5 class="mb-0">Purchase</h5></a>
                      </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 xl-30 box-col-6">
                      <div class="card text-center pricing-simple">
                        <div class="card-body">
                          <h3>Pre Booking</h3>
                          <h6>OFFER CODE:</h6>
                          <h3>20AAYC</h3>
                          <h6 class="mb-0">20% Off</h6>
                        </div><a class="btn btn-lg btn-primary btn-block" href="#">
                          <h5 class="mb-0">Purchase</h5></a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 xl-40 box-col-6">
                      <div class="card text-center pricing-simple">
                        <div class="card-body">
                          <h3>Extra</h3>
                          <h1>$45</h1>
                          <h6 class="mb-0">Lorum Ipsum</h6>
                        </div><a class="btn btn-lg btn-primary btn-block" href="#">
                          <h5 class="mb-0">Purchase</h5></a>
                      </div>
                    </div>
                  </div>
                  </div>
                </px-card>
              </div>
            </div>
          </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
export default {
}
</script>