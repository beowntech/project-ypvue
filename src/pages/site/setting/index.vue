<template>
    <div>
        <Breadcrumbs main="Setting" title="all settings"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">      
                <div class="col-sm-12 col-xl-6 xl-100">
					<div class="card">
						<div class="card-header">
							<h5>Solid Border Style</h5><span>By adding .border-style class to .mega-inline You can archive this style</span>
						</div>
						<div class="card-body megaoptions-border-space-sm">
							<form class="mega-inline border-style">
								<div class="row">
                                    <div class="col-sm-6">
                                        <div class="card">
                                        <div class="card-header">
                                            <h5>Switch Color</h5>
                                        </div>
                                        <div class="card-body row switch-showcase height-equal">
                                            <div class="col-sm-12">
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Primary Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-primary"></span>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Secondary Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-secondary"></span>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Success Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-success"></span>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Info Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-info"></span>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Warning Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-warning"></span>
                                                </label>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <label class="col-form-label m-r-10">Danger Color</label>
                                                <div class="media-body text-right icon-state">
                                                <label class="switch">
                                                    <input type="checkbox" checked=""><span class="switch-state bg-danger"></span>
                                                </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
									
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio3" v-model="solidborder" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
                                        <div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio3" v-model="solidborder" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>

                                        <b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							            <b-button type="reset" variant="light">Cancel</b-button>
									</div>
								</div>
							</form>
						</div>
						
					</div>
				</div>
            </div>
            
		</div>
    </div> 
</template>