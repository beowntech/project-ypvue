<template>
    <div>
        <Breadcrumbs main="Info" title="Basic Info"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header property-featured"
                             :style="'background: url('+getPropertyPath('/featured/'+featuredImage)+');background-position: center;background-size: cover;'">
                        </div>
                        <div class="card-body parab-0">
                            <div class="row">
                                <div class="col-11 px-2">
                                    <h5>{{properties.name}} </h5>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-name></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i
                                        class="fa fa-location-arrow pcolor edit-pencil"></i></div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Address</p>
                                    <p v-if="properties.location != null">
                                        {{properties.location.address}},{{properties.location.cities.name}},{{properties.location.states.name}}</p>
                                    <p v-else>Add Or Edit Address</p>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-address></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-phone pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Contact</p>
                                    <div v-if="properties.contact != null">
                                        <p v-for="(data,index) in JSON.parse(properties.contact)" :key="index">{{ data
                                            }}</p>
                                    </div>
                                    <div v-else>
                                        Add or Edit Contact
                                    </div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-contact></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-envelope-o pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Email</p>
                                    <p v-if="properties.email != null">{{properties.email}}</p>
                                    <p v-else>{{properties.email}}</p>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-email></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-desktop pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Website</p>
                                    <p v-if="properties.website != null">{{properties.website}}</p>
                                    <p v-else>Add Or Edit Website</p>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-website></i></div>
                            </div>
                            <hr>

                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-chain pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Property Link</p>
                                    <p>www.yogprerna.com/adiyogiyogpeeth</p>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-share-alt pcolor edit-pencil"></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1 text-center"><i class="fa fa-chain pcolor edit-pencil"></i></div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Social link</p>
                                    <div class="mb-0" v-if="properties.social != null">
                                        <div class="mb-0">
                                            <tr role="row" class="row"
                                                v-for="(data,i) in JSON.parse(properties.social.links)" :key="i">
                                                <td role="cell" class="col-3">{{data.social}}</td>
                                                <td role="cell" class="col-6"><a class="pcolor" :href="data.link"
                                                                                 target="_blank">{{data.link |
                                                    truncate(20,'')}}</a></td>
                                            </tr>
                                        </div>
                                    </div>
                                    <div class="mb-0" v-else>Add or Edit Social Links</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-social></i></div>
                            </div>

                            <hr>
                            <div class="row">
                                <div class="col-1 px-1 text-center"><i class="fa fa-clock-o pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Office Time</p>
                                    <div class="mb-0" v-if="properties.timing != null && properties.timing.length != 0">
                                        <div class="mb-0">
                                            <tr role="row" class="row" v-for="(data,i) in JSON.parse(properties.timing)"
                                                :key="i">
                                                <td role="cell" class="col-3" v-if="data.opened">{{data.name}}</td>
                                                <td role="cell" class="col-5" v-if="data.opened">{{[data.timing[0].from,
                                                    "HH:mm"] | moment('h:mm a') }} - {{[data.timing[0].to, "HH:mm"] |
                                                    moment('h:mm a') }}
                                                </td>
                                            </tr>
                                        </div>
                                    </div>
                                    <div class="mb-0" v-else> Add or Edit Timings</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-timing></i></div>
                            </div>

                            <hr>
                            <div class="row">
                                <div class="col-1 px-1 text-center"><i class="fa fa-clock-o pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Call Time</p>
                                    <div class="mb-0" v-if="properties.call_timings != null">
                                        <div class="mb-0">
                                            <tr role="row" class="row"
                                                v-for="(data,i) in JSON.parse(properties.call_timings)" :key="i">
                                                <td role="cell" class="col-3" v-if="data.opened">{{data.name}}</td>
                                                <td role="cell" class="col-5" v-if="data.opened">{{[data.timing[0].from,
                                                    "HH:mm"] | moment('h:mm a') }} - {{[data.timing[0].to, "HH:mm"] |
                                                    moment('h:mm a') }}
                                                </td>
                                            </tr>
                                        </div>
                                    </div>
                                    <div class="mb-0" v-else> Add or Edit Timings</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-call-timing></i></div>
                            </div>


                        </div>

                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card">

                        <div class="card-body parab-0">
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-certificate pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Certificates</p>
                                    <div class="row" v-if="selectedCertificates.length != 0">
                                        <div class="col-md-2 p-1 mb-1 text-center" v-for="(img,i) in selectedCertificates" :key="i">
                                            <img :src="getCertificatePath(img.img)" width="80%">
                                        </div>
                                    </div>
                                    <div v-else>
                                        <p>Add or edit Certificates</p>
                                    </div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.select-certificate></i></div>
                            </div>
                            <hr>

                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-cutlery pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Meal</p>
                                    <div class="mb-0" v-if="properties.meal != null && properties.meal.length != 0">
                                        <tr role="row" class="row" v-for="(data,i) in JSON.parse(properties.meal)"
                                            :key="i">
                                            <td role="cell" class="col-4" v-if="data.provided">{{data.name}}</td>
                                            <td role="cell" class="col-7" v-if="data.provided">{{[data.timing[0].from,
                                                "HH:mm"] | moment('h:mm a') }} - {{[data.timing[0].to, "HH:mm"] |
                                                moment('h:mm a') }}
                                            </td>
                                        </tr>
                                    </div>
                                    <div class="mb-0" v-else>Add or Edit Meal</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-meal></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i class="fa fa-cubes pcolor edit-pencil"></i>
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Daily Schedule</p>
                                    <div class="mb-0"
                                         v-if="properties.daily_schedule != null && properties.daily_schedule.length != 0">
                                        <tr role="row" class="row"
                                            v-for="(data,i) in JSON.parse(properties.daily_schedule)" :key="i">
                                            <td role="cell" class="col-4">{{data.name}}</td>
                                            <td role="cell" class="col-7">{{[data.timing[0].from, "HH:mm"] |
                                                moment('h:mm a') }} - {{[data.timing[0].to, "HH:mm"] | moment('h:mm a')
                                                }}
                                            </td>
                                        </tr>
                                    </div>
                                    <div class="mb-0" v-else>Add Or Edit Daily Schedule</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-schedule></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i
                                        class="fa fa-check-circle pcolor edit-pencil"></i></div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Services</p>
                                    <div v-if="properties.service != null && properties.service != '[]'">
                                        <span class="badge badge-light badge-pill"
                                              v-for="(data,index) in properties.service"
                                              :key="index">{{data.name}}</span>
                                    </div>
                                    <div v-else>Add or Edit Services</div>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-services></i></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-1 px-1  text-center"><i
                                        class="fa fa-file-code-o pcolor edit-pencil"></i></div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">Bio</p>
                                    <p>{{properties.bio | stripHTML | truncate(280, '......')}}</p>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-pencil pcolor edit-pencil"
                                                           v-b-modal.modal-bio></i></div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- Name Update -->
        <b-modal id="modal-name" centered title="Property Name" ok-title="Update" @ok="updateName" class="theme-modal">
            <form>
                <label class="col-form-label">Name:</label>
                <b-form-input v-model="propertyName" placeholder="Property Name"></b-form-input>
            </form>
        </b-modal>

        <!-- Contact Update -->
        <b-modal id="modal-contact" centered title="Contact Number" ok-title="Update" @ok="updateContact"
                 class="theme-modal">
            <tr role="row" class="row mb-4" v-for="(data,i) in contacts" :key="i">
                <td role="cell" class="col-8">
                    <b-form-input v-model="data.contact" placeholder="Contact Number"></b-form-input>
                </td>
                <td role="cell" class="col-2">
                    <b-button style="" v-if="i > 0" @click.stop="removeContactRow(i)" variant="outline-danger" size="sm"
                              class="btn-air-danger addSocialButton btn-outline-danger"><i
                            class="fa fa-minus pcolor edit-pencil"></i></b-button>
                    <b-button @click.stop="addContactRow"
                              v-else
                              variant="outline-primary" size="sm"
                              class="btn-air-primary addSocialButton btn-outline-primary"><i
                            class="fa fa-plus pcolor edit-pencil"></i></b-button>
                </td>
            </tr>
        </b-modal>

        <!-- Email Update -->
        <b-modal id="modal-email" centered title="Email" ok-title="Update" @ok="updateEmail" class="theme-modal">
            <form>
                <label class="col-form-label">Email:</label>
                <b-form-input v-model="propertyEmail" placeholder="Email"></b-form-input>
            </form>
        </b-modal>

        <!-- Website Update -->
        <b-modal id="modal-website" centered title="Website" ok-title="Update" @ok="updateWebsite" class="theme-modal">
            <form>
                <label class="col-form-label">Website:</label>
                <b-form-input v-model="propertyWebsite" type="text" :state="propertyWebsite"
                              placeholder="Website Eg: http://domain.com"></b-form-input>
                <b-form-valid-feedback :state="propertyWebsite != null">Lock Good</b-form-valid-feedback>
            </form>
        </b-modal>

        <!-- Services Update -->
        <b-modal id="modal-services" centered title="Services" ok-title="Update" @ok="updateService"
                 class="theme-modal">
            <form>
                <h6 v-for="(data,i) in services" :key="i">
                    <b-badge style="cursor: pointer;font-size: 14px;" pill :variant="checkExist(data.id)"
                             @click="selectService(data.id,i)">{{data.name}}
                    </b-badge>
                </h6>
            </form>
        </b-modal>

        <!-- Address Update -->
        <b-modal id="modal-address" centered title="Address" ok-title="Update" @ok="updateAddress" class="theme-modal">
            <form>
                <div class="row">
                    <div class="col-md-12">
                        <label class="col-form-label">Address:</label>
                        <b-form-textarea
                                id="textarea"
                                v-model="propertyAddress"
                                rows="3"
                        ></b-form-textarea>
                    </div>
                    <div class="col-md-6">
                        <label class="col-form-label">Street Name:</label>
                        <b-form-input v-model="streetName" type="text" placeholder="Street Name"></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <label class="col-form-label">PinCode:</label>
                        <b-form-input v-model="pinCode" type="text" placeholder="Enter PinCode"></b-form-input>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label class="col-form-label">Country:</label>
                        <multiselect v-model="selectedCountry" placeholder="Select Country"
                                     label="name" track-by="code" :options="countries" :multiple="false"
                                     :taggable="false"></multiselect>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label class="col-form-label" v-if="selectedCountry">State:</label>
                        <multiselect v-if="selectedCountry" v-model="selectedState" placeholder="Select State"
                                     label="name" track-by="code" :options="states" :multiple="false"
                                     :taggable="false"></multiselect>
                    </div>
                    <div class="col-md-12 mt-2">
                        <label class="col-form-label" v-if="selectedState">City:</label>
                        <multiselect v-if="selectedState" v-model="selectedCity" placeholder="Select City"
                                     label="name" track-by="code" :options="cities" :multiple="false"
                                     :taggable="false"></multiselect>
                    </div>
                </div>
            </form>
        </b-modal>

        <!-- Bio Update -->
        <b-modal id="modal-bio" size="lg" centered title="Bio" ok-title="Update" @ok="updateBio" class="theme-modal">
            <form>
                <label class="col-form-label">Bio:</label>
                <ckeditor :editor="editor" style="max-height: 350px;" v-model="bioText"></ckeditor>
            </form>
        </b-modal>

        <!-- Social Update -->
        <b-modal id="modal-social" size="lg" centered title="Social Links" @ok="updateSocial" ok-title="Update"
                 class="theme-modal">
            <div class="row" v-for="(data,i) in socialItems" :key="i">
                <div class="col-xl-3 col-md-4 col-sm-4 col-xs-4">
                    <div class="form-group mt-2">
                        <label>Social Platform:</label>
                        <b-form-select v-model="data.social" :options="socialTypes"></b-form-select>
                    </div>
                </div>
                <div class="col-xl-7 col-md-8 col-sm-7 col-xs-8">
                    <label class="col-form-label">Link:</label>
                    <b-form-input v-model="data.link" type="text"
                                  placeholder="Social Link Eg: http://facebook.com"></b-form-input>
                </div>
                <div class="col-xl-2 col-md-3 col-sm-2 col-xs-3">
                    <b-button style="margin-top: 35px !important;" v-if="data.removable"
                              @click.stop="removeSocialRow(i)" variant="outline-danger" size="sm"
                              class="btn-air-danger addSocialButton btn-outline-danger"><i
                            class="fa fa-minus pcolor edit-pencil"></i></b-button>
                    <b-button style="margin-top: 35px !important;" v-else @click.stop="addSocialRow"
                              variant="outline-primary" size="sm"
                              class="btn-air-primary addSocialButton btn-outline-primary"><i
                            class="fa fa-plus pcolor edit-pencil"></i></b-button>
                </div>
            </div>
        </b-modal>

        <!-- Timing Update -->
        <b-modal id="modal-timing" size="lg" centered title="Office Timings" @ok="updateTiming" ok-title="Update"
                 class="theme-modal">
            <tr role="row" class="row" v-for="(data,i) in timings" :key="i">
                <td role="cell" class="col-3"><h5>{{data.name}}</h5></td>
                <td role="cell" class="col-2">
                    <div class="row">
                        <div class="col-6">
                            <p>{{data.opened ? 'Open' : 'Closed'}}</p>
                        </div>
                        <div class="col-6">
                            <label class="switch">
                                <input type="checkbox" :checked="data.opened" v-model="data.opened"><span
                                    class="switch-state"></span>
                            </label>
                        </div>
                    </div>
                </td>
                <td role="cell" class="col-6 ml-3" v-if="data.opened">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input type="time" value="09:00:00" v-model="data.timing[0].from"></b-form-input>
                        </div>
                        <div class="col-6">
                            <b-form-input type="time" value="18:00:00" v-model="data.timing[0].to"></b-form-input>
                        </div>
                    </div>
                </td>
            </tr>
        </b-modal>

        <!-- Call Timing Update -->
        <b-modal id="modal-call-timing" size="lg" centered title="Office Call Timings" @ok="updateCallTiming"
                 ok-title="Update" class="theme-modal">
            <tr role="row" class="row" v-for="(data,i) in callTimings" :key="i">
                <td role="cell" class="col-3"><h5>{{data.name}}</h5></td>
                <td role="cell" class="col-2">
                    <div class="row">
                        <div class="col-6">
                            <p>{{data.checked ? 'Open' : 'Closed'}}</p>
                        </div>
                        <div class="col-6">
                            <label class="switch">
                                <input type="checkbox" :checked="data.opened" v-model="data.opened"><span
                                    class="switch-state"></span>
                            </label>
                        </div>
                    </div>
                </td>
                <td role="cell" class="col-6 ml-3" v-if="data.opened">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input type="time" value="09:00:00" v-model="data.timing[0].from"></b-form-input>
                        </div>
                        <div class="col-6">
                            <b-form-input type="time" value="18:00:00" v-model="data.timing[0].to"></b-form-input>
                        </div>
                    </div>
                </td>
            </tr>
        </b-modal>

        <!-- Meal Update -->
        <b-modal id="modal-meal" size="lg" centered title="Meal" @ok="updateMeal" ok-title="Update" class="theme-modal">
            <tr role="row" class="row mb-2" v-for="(data,i) in meals" :key="i">
                <td role="cell" class="col-2"><p class="font-weight-bold">{{data.name}}</p></td>
                <td role="cell" class="col-4">
                    <div class="row">
                        <div class="col-6">
                            <p>{{data.provided ? 'Provided' : 'Not Provided'}}</p>
                        </div>
                        <div class="col-5">
                            <div class="media-body text-right switch-sm">
                                <label class="switch">
                                    <input type="checkbox" :checked="data.provided" v-model="data.provided"><span
                                        class="switch-state"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </td>
                <td role="cell" class="col-5 ml-3" v-if="data.provided">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input type="time" value="09:00:00" v-model="data.timing[0].from"></b-form-input>
                        </div>
                        <div class="col-6">
                            <b-form-input type="time" value="18:00:00" v-model="data.timing[0].to"></b-form-input>
                        </div>
                    </div>
                </td>
            </tr>
        </b-modal>

        <!-- Daily Schedule Update -->
        <b-modal id="modal-schedule" size="lg" centered @ok="updateSchedule" title="Daily Schedule" ok-title="Update"
                 class="theme-modal">
            <tr role="row" class="row mb-2" v-for="(data,i) in dailySchedule" :key="i">
                <td role="cell" class="col-4">
                    <b-form-input v-model="data.name" type="text" placeholder="Name"></b-form-input>
                </td>
                <td role="cell" class="col-5">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input type="time" value="09:00:00" v-model="data.timing[0].from"></b-form-input>
                        </div>
                        <div class="col-6">
                            <b-form-input type="time" value="18:00:00" v-model="data.timing[0].to"></b-form-input>
                        </div>
                    </div>
                </td>
                <td role="cell" class="col-3">
                    <b-button-group>
                        <b-button @click.stop="addScheduleRow"
                                  variant="outline-primary" size="sm"
                                  class="btn-air-primary addSocialButton btn-outline-primary"><i
                                class="fa fa-plus pcolor edit-pencil"></i></b-button>
                        <b-button style="" v-if="i > 0" @click.stop="removeScheduleRow(i)" variant="outline-danger"
                                  size="sm"
                                  class="btn-air-danger addSocialButton btn-outline-danger"><i
                                class="fa fa-minus pcolor edit-pencil"></i></b-button>
                    </b-button-group>
                </td>
            </tr>
        </b-modal>

        <b-modal id="select-certificate" size="lg" centered
                 @ok="addCertificate"
                 @cancel="selectCertificate = []"
                 @close="selectCertificate = []"
                 title="Certificates" ok-title="Update"
                 class="theme-modal">
           <div class="row">
               <div class="col-md-12">
                   <multiselect v-model="selectCertificate" placeholder="Select Certificate" label="title" track-by="title" :options="certificateOptions" :option-height="104" :show-labels="false">
                       <template slot="singleLabel" slot-scope="props">
                           <div class="row">
                               <div class="col-md-2">
                                   <img class="img-fluid img-100" :src="getCertificatePath(props.option.img)" alt="#">

                               </div>
                               <div class="col-md-10">
                                   <span class="option__desc"><span class="ml-2">{{ props.option.title }}</span></span>
                               </div>
                           </div>
                       </template>
                       <template slot="option" slot-scope="props">
                           <div class="row">
                               <div class="col-md-2">
                                   <img class="img-fluid img-100" :src="getCertificatePath(props.option.img)" alt="#">

                               </div>
                               <div class="col-md-10">
                                   <span class="option__desc"><span class="ml-2">{{ props.option.title }}</span></span>
                               </div>
                           </div>
                       </template>
                   </multiselect>
               </div>
               <div class="col-md-12 mt-3" v-if="selectedCertificates.length != 0">
                   <h5>Selected Certificates</h5>
                   <div class="row">
                       <div class="col-md-2" v-for="(img,i) in selectedCertificates" :key="i">
                           <div @click="deleteCertificate(i)"
                                   style="right: 0;
    position: absolute;
    padding: 3px 6px;
        cursor: pointer;
    background: whitesmoke;"><i class="fa fa-close"></i></div>
                               <img :src="getCertificatePath(img.img)" style="width: 100%;padding: 10px;">
                       </div>
                   </div>
               </div>
           </div>
        </b-modal>
    </div>
</template>
<script>
    import axios from 'axios';
    import api from '../../../_helpers/apiUrls'

    import config from '../../../config.json'
    import Multiselect from 'vue-multiselect'
    import apiUrls from "../../../_helpers/apiUrls";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import CKEditor from "@ckeditor/ckeditor5-vue";

    export default {
        name: "info",
        data() {
            return {
                editor: ClassicEditor,
                properties: {},
                propertyName: "",
                propertyAddress: "",
                streetName: "",
                pinCode: "",
                countries: [],
                states: {},
                cities: {},
                selectedCity: "",
                selectedCertificates:[],
                selectCertificate: [],
                selectedState: "",
                selectedCountry: "",
                propertyEmail: "",
                propertyWebsite: "",
                services: [],
                selectedService: [],
                certificateOptions: [],
                bioText: "",
                callChecked: false,
                featuredImage: this.$store.getters.getProperty[0].featured + '-xl.webp',
                socialItems: [{
                    social: '',
                    link: ''
                }],
                callTimings: [
                    {
                        'name': 'Sunday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Monday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Tuesday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Wednesday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Thursday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Friday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Staturday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    }
                ],
                timings: [
                    {
                        'name': 'Sunday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Monday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Tuesday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Wednesday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Thursday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Friday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Staturday',
                        'opened': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    }
                ],
                meals: [
                    {
                        'name': 'Breakfast',
                        'provided': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Lunch',
                        'provided': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Tea',
                        'provided': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                    {
                        'name': 'Dinner',
                        'provided': false,
                        'timing': [{
                            'from': '',
                            'to': ''
                        }]
                    },
                ],
                contacts: [],
                certificates: [],
                dailySchedule: [{
                    name: '',
                    timing: [{
                        from: '',
                        to: ''
                    }]
                }],
                socialTypes: [],
                socialTypesSelected: []
            }
        },
        watch: {
            selectCertificate: function(val){
                console.log(val)
                if(val.length != 0) {
                    if (!this.selectedCertificates.some(item => item['id'] === val.id)) {
                        this.selectedCertificates.push({img: val.img, id: val.id})
                    }
                }
            },
            selectedCountry: function () {
                this.selectedState = ""
                this.selectedCity = ""
                if (this.selectedCountry.length != 0) {
                    this.stateList()
                }
            },
            selectedState: function () {
                this.selectedCity = ""
                if (this.selectedState.length != 0) {
                    this.cityList()
                }
            }
        },
        components: {
            Multiselect,
            ckeditor: CKEditor.component
        },
        methods: {
            deleteCertificate(index){
              this.selectedCertificates.splice(index,1)
            },
            addContactRow() {
                this.contacts.push({'contact': ''})
            },
            removeContactRow(val) {
                this.contacts.splice(val, 1)
            },
            addScheduleRow() {
                this.dailySchedule.push({'name': '', 'timing': [{'from': '', 'to': ''}]})
            },
            removeScheduleRow(val) {
                this.dailySchedule.splice(val, 1)
            },
            selectService(val, index) {
                if (this.selectedService.includes(val)) {
                    this.selectedService.splice(index, 1)
                } else {
                    this.selectedService.push(val)
                }
            },
            countryList() {
                axios.get(api.countryList)
                    .then((res) => {
                        for (var i = 0; i < res.data.length; i++) {
                            this.countries.push({name: res.data[i].name, code: res.data[i].id})
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
            stateList() {
                this.states = []
                axios.get(api.stateList + '?id=' + this.selectedCountry.code)
                    .then((res) => {
                        for (var i = 0; i < res.data.length; i++) {
                            this.states.push({name: res.data[i].name, code: res.data[i].id})
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
            cityList() {
                this.cities = []
                axios.get(api.cityList + '?id=' + this.selectedState.code)
                    .then((res) => {
                        for (var i = 0; i < res.data.length; i++) {
                            this.cities.push({name: res.data[i].name, code: res.data[i].id})
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
            addSocialRow() {
                this.socialItems.push({
                    social: '',
                    link: '',
                    removable: true
                });
            },
            removeSocialRow(val) {
                this.socialItems.splice(val, 1);

            },
            checkExist(val) {
                if (this.selectedService.includes(val)) {
                    return 'primary'
                } else {
                    return 'light'
                }
            },
            getProperties(val) {
                if(this.$store.getters.getProperty[0].id == null){
                    this.$router.push({path: 'dashboard/properties'})
                }
                axios.post(api.getProperty, {
                    prop_id: this.$store.getters.getProperty[0].id
                }).then((res) => {
                    this.properties = res.data[0];
                    this.propertyName = res.data[0].name
                    if (res.data[0].location != null) {
                        this.propertyAddress = res.data[0].location.address
                        this.streetName = res.data[0].location.street_name
                        this.pinCode = res.data[0].location.pin
                    }
                    this.propertyEmail = res.data[0].email
                    this.contacts = []
                    if (res.data[0].contact != null) {
                        for (var i = 0; i < JSON.parse(res.data[0].contact).length; i++) {
                            this.contacts.push({'contact': JSON.parse(res.data[0].contact)[i]})
                        }
                    }
                    this.propertyWebsite = res.data[0].website
                    this.bioText = res.data[0].bio
                    if (res.data[0].social != null) {
                        this.socialItems = JSON.parse(res.data[0].social.links)
                    }
                    if (res.data[0].services != null) {
                        this.selectedService = JSON.parse(res.data[0].services)
                    }
                    if (res.data[0].call_timings != null) {
                        this.callTimings = JSON.parse(res.data[0].call_timings)
                    }
                    if (res.data[0].daily_schedule != null) {
                        this.dailySchedule = JSON.parse(res.data[0].daily_schedule)
                    }
                    if (res.data[0].timing != null) {
                        this.timings = JSON.parse(res.data[0].timing)
                    }
                    if (res.data[0].meal != null) {
                        this.meals = JSON.parse(res.data[0].meal)
                    }
                    if(res.data[0].certificates != null){
                        for(var j=0; j < res.data[0].certificates.length; j++){
                            this.selectedCertificates.push({img:res.data[0].certificates[j].images,id:res.data[0].certificates[j].id})
                        }
                    }
                    if (val) {
                        this.$store.commit('setProperty', res.data[0])
                    }
                    this.$store.commit('setLoading', false)
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateName() {
                let Name = ""
                if (this.propertyName !== this.properties.name) {
                    Name = this.propertyName
                    axios.post(api.updateProperty, {
                        id: this.$store.getters.getProperty[0].id,
                        name: Name
                    }).then((res) => {

                        this.getProperties(true)
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            },
            updateBio() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    bio: this.bioText
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Bio Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateAddress() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    address: this.propertyAddress,
                    street: this.streetName,
                    country: this.selectedCountry.code,
                    state: this.selectedState.code,
                    city: this.selectedCity.code,
                    pin: this.pinCode
                }).then((res) => {

                    this.alert("Address Updated Successfully", 'success', '', 'top-center')
                    this.getProperties(true)
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateContact() {
                let contact = [];
                for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].contact !== '') {
                        contact.push(this.contacts[i].contact)
                    }
                }
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    contact: contact
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Contact Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateEmail() {
                let Email = ""
                if (this.propertyEmail !== this.properties.email) {
                    Email = this.propertyEmail
                    axios.post(api.updateProperty, {
                        id: this.$store.getters.getProperty[0].id,
                        email: Email
                    }).then((res) => {
                        if (res.data == 1) {
                            this.alert("Email Updated Successfully", 'success', '', 'top-center')
                            this.getProperties()
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            },
            updateWebsite() {
                let Website = ""
                if (this.propertyWebsite !== this.properties.website) {
                    Website = this.propertyWebsite
                    axios.post(api.updateProperty, {
                        id: this.$store.getters.getProperty[0].id,
                        website: Website
                    }).then((res) => {
                        if (res.data == 1) {
                            this.alert("Website Updated Successfully", 'success', '', 'top-center')
                            this.getProperties()
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            },
            updateTiming() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    officeTimings: this.timings
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Timings Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateCallTiming() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    callTimings: this.callTimings
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Call Timings Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateMeal() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    meals: this.meals
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Meals Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateService() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    service: this.selectedService
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Services Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateSocial() {
                console.log(this.socialItems)
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    social: JSON.stringify(this.socialItems)
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Social Links Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateSchedule() {
                axios.post(api.updateProperty, {
                    id: this.$store.getters.getProperty[0].id,
                    schedule: this.dailySchedule
                }).then((res) => {
                    if (res.data == 1) {
                        this.alert("Schedule Updated Successfully", 'success', '', 'top-center')
                        this.getProperties()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            getSocialPlatforms() {
                axios.post(api.socialPlatforms)
                    .then((res) => {
                        this.socialTypes = res.data

                    }).catch((err) => {
                    console.log(err)
                })
            },
            getServices() {
                axios.post(api.services)
                    .then((res) => {
                        this.services = res.data

                    }).catch((err) => {
                    console.log(err)
                })
            },
            getPropertyPath(data) {
                return config.apiUrl.propertyImage + this.$store.getters.getProperty[0].id + data
            },
            getCertificatePath(data) {
                return config.apiUrl.certificateImage + data +'-sm.webp'
            },
            selectProperty(data) {
                this.$store.commit('setProperty', data)
                this.$router.replace('/dashboard/dashboard')
            },
            addCertificate(){
                let certificate = [];
                for(var i=0; i < this.selectedCertificates.length; i++){
                  certificate.push(this.selectedCertificates[i].id)
                }
                axios.post(apiUrls.updateProperty,{
                    certificate: certificate,
                    id: this.$store.getters.getProperty[0].id
                })
                    .then((res)=>{
                        this.selectCertificate = []
                      console.log(res.data)
                    }).catch(()=>{

                })
            },
            getCertificates(){
              axios.post(apiUrls.getCertificate)
                  .then((res)=>{
                      for(var i=0; i< res.data.length; i++) {
                          this.certificateOptions.push({title: res.data[i].name,img:res.data[i].images,id:res.data[i].id})
                      }
              })  .catch(()=>{

              })
            },
            alert(message, color, icon, position) {
                this.$toasted.show(message, {
                    theme: 'outline',
                    position: position,
                    type: color,
                    icon: 'success',
                    duration: 2000
                });
            },
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getProperties()
            this.countryList()
            this.getCertificates()
            this.getServices()
            this.getSocialPlatforms()
        },
    }
</script>
<style>
    @media only screen and (max-width: 600px) {
        .addSocialButton {
            float: right;
        }
    }
    .ck.ck-editor__main>.ck-editor__editable{
        max-height: 350px!important;
    }
</style>
