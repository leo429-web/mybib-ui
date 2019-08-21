<template>
  <transition name='fade-forward'>
    <div class="paper">
      <div class="page-content">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->               
			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">Modal title</h4>
						</div>
						<div class="modal-body">
							Widget settings form goes here
						</div>
						<div class="modal-footer">
							<button type="button" class="btn blue">Save changes</button>
							<button type="button" class="btn default" data-dismiss="modal">Close</button>
						</div>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- /.modal -->
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->           
			<!-- BEGIN PAGE HEADER-->
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN PAGE TITLE & BREADCRUMB-->
					<h3 class="page-title">
						User Profile <small>user profile data</small>
					</h3>
					<ul class="page-breadcrumb breadcrumb">
						<li>
							<i class="fa fa-home"></i>
							<a href="#">Home</a> 
							<i class="fa fa-angle-right"></i>
						</li>
						<li><a href="#">User Profile</a></li>
						<!-- <li class="btn-group pull-right">
							<button type="button" class="btn blue dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
								<span>Actions</span> <i class="fa fa-angle-down"></i>
							</button>
							<ul class="dropdown-menu pull-right" role="menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li class="divider"></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</li> -->
					</ul>
					<!-- END PAGE TITLE & BREADCRUMB-->
				</div>
			</div>
			<!-- END PAGE HEADER-->
			<!-- BEGIN PAGE CONTENT-->
			<div class="row profile">
				<div class="col-md-12">
					<!--BEGIN TABS-->
					<div class="tabbable tabbable-custom tabbable-full-width">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#tab_1_1" data-toggle="tab">Overview</a></li>
							<li><a href="#tab_1_3" data-toggle="tab">Account</a></li>
							<li><a href="#tab_1_4" data-toggle="tab">Courses</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="tab_1_1">
								<div class="row">
									<div class="col-md-3">
										<ul class="list-unstyled profile-nav">
											<li><img src="static/img/avatar.jpg" class="img-responsive" alt="" /> 
												<a href="#" class="profile-edit">edit</a>
											</li>
											<li><a href="#">Courses</a></li>
											<li><a href="#">Messages <span>3</span></a></li>
											<li><a href="#">Payment</a></li>
											<li><a href="#">Settings</a></li>
										</ul>
									</div>
									<div class="col-md-9">
										<div class="row">
											<div class="col-md-8 profile-info">
												<h1>John Doe</h1>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet dolore magna aliquam tincidunt erat volutpat.</p>
												<p><a href="#">www.mywebsite.com</a></p>
												<p><strong>Student ID</strong>  123456</p>
												<ul class="list-inline">
													<li><i class="fa fa-map-marker"></i> Kenya</li>
													<li><i class="fa fa-calendar"></i> 18 Jan 1982</li>
													<li><i class="fa fa-star"></i> Top Customer</li>
												</ul>
											</div>
											<!--end col-md-8-->
											<div class="col-md-4">
				
											</div>
											<!--end col-md-4-->
										</div>
										<!--end row-->
										<div class="tabbable tabbable-custom tabbable-custom-profile">
											<ul class="nav nav-tabs">
												<li class="active"><a href="#tab_1_11" data-toggle="tab">Latest Customers</a></li>
												<li ><a href="#tab_1_22" data-toggle="tab">Feeds</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane active" id="tab_1_11">
													<div class="portlet-body">
														<table class="table table-striped table-bordered table-advance table-hover">
															<thead>
																<tr>
																	<th><i class="fa fa-briefcase"></i> Company</th>
																	<th class="hidden-xs"><i class="fa fa-question"></i> Descrition</th>
																	<th><i class="fa fa-bookmark"></i> Amount</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td><a href="#">Pixel Ltd</a></td>
																	<td class="hidden-xs">Server hardware purchase</td>
																	<td>52560.10$ <span class="label label-success label-sm">Paid</span></td>
																	<td><a class="btn default btn-xs green-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td>
																		<a href="#">
																		Smart House
																		</a>  
																	</td>
																	<td class="hidden-xs">Office furniture purchase</td>
																	<td>5760.00$ <span class="label label-warning label-sm">Pending</span></td>
																	<td><a class="btn default btn-xs blue-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td>
																		<a href="#">
																		FoodMaster Ltd
																		</a>
																	</td>
																	<td class="hidden-xs">Company Anual Dinner Catering</td>
																	<td>12400.00$ <span class="label label-success label-sm">Paid</span></td>
																	<td><a class="btn default btn-xs blue-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td>
																		<a href="#">
																		WaterPure Ltd
																		</a>
																	</td>
																	<td class="hidden-xs">Payment for Jan 2013</td>
																	<td>610.50$ <span class="label label-danger label-sm">Overdue</span></td>
																	<td><a class="btn default btn-xs red-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td><a href="#">Pixel Ltd</a></td>
																	<td class="hidden-xs">Server hardware purchase</td>
																	<td>52560.10$ <span class="label label-success label-sm">Paid</span></td>
																	<td><a class="btn default btn-xs green-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td>
																		<a href="#">
																		Smart House
																		</a>  
																	</td>
																	<td class="hidden-xs">Office furniture purchase</td>
																	<td>5760.00$ <span class="label label-warning label-sm">Pending</span></td>
																	<td><a class="btn default btn-xs blue-stripe" href="#">View</a></td>
																</tr>
																<tr>
																	<td>
																		<a href="#">
																		FoodMaster Ltd
																		</a>
																	</td>
																	<td class="hidden-xs">Company Anual Dinner Catering</td>
																	<td>12400.00$ <span class="label label-success label-sm">Paid</span></td>
																	<td><a class="btn default btn-xs blue-stripe" href="#">View</a></td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<!--tab-pane-->
												<div class="tab-pane" id="tab_1_22">
													<div class="tab-pane active" id="tab_1_1_1">
														<div class="scroller" data-height="290px" data-always-visible="1" data-rail-visible1="1">
															<ul class="feeds">
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-success">                        
																					<i class="fa fa-bell-o"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					You have 4 pending tasks.
																					<span class="label label-danger label-sm">
																					Take action 
																					<i class="fa fa-share"></i>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			Just now
																		</div>
																	</div>
																</li>
																<li>
																	<a href="#">
																		<div class="col1">
																			<div class="cont">
																				<div class="cont-col1">
																					<div class="label label-success">                        
																						<i class="fa fa-bell-o"></i>
																					</div>
																				</div>
																				<div class="cont-col2">
																					<div class="desc">
																						New version v1.4 just lunched!   
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="col2">
																			<div class="date">
																				20 mins
																			</div>
																		</div>
																	</a>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-danger">                      
																					<i class="fa fa-bolt"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					Database server #12 overloaded. Please fix the issue.                      
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			24 mins
																		</div>
																	</div>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-info">                        
																					<i class="fa fa-bullhorn"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					New order received. Please take care of it.                 
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			30 mins
																		</div>
																	</div>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-success">                        
																					<i class="fa fa-bullhorn"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					New order received. Please take care of it.                 
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			40 mins
																		</div>
																	</div>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-warning">                        
																					<i class="fa fa-plus"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					New user registered.                
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			1.5 hours
																		</div>
																	</div>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-success">                        
																					<i class="fa fa-bell-o"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					Web server hardware needs to be upgraded. 
																					<span class="label label-inverse label-sm">Overdue</span>             
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			2 hours
																		</div>
																	</div>
																</li>
																<li>
																	<div class="col1">
																		<div class="cont">
																			<div class="cont-col1">
																				<div class="label label-default">                       
																					<i class="fa fa-bullhorn"></i>
																				</div>
																			</div>
																			<div class="cont-col2">
																				<div class="desc">
																					New order received. Please take care of it.                 
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col2">
																		<div class="date">
																			3 hours
																		</div>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<!--tab-pane-->
											</div>
										</div>
									</div>
								</div>
							</div>
							<!--tab_1_2-->
							<div class="tab-pane" id="tab_1_3">
								<div class="row profile-account">
									<div class="col-md-3">
										<ul class="ver-inline-menu tabbable margin-bottom-10">
											<li class="active">
												<a data-toggle="tab" href="#tab_1-1">
												<i class="fa fa-cog"></i> 
												Personal info
												</a> 
												<span class="after"></span>                                    
											</li>
											<li ><a data-toggle="tab" href="#tab_2-2"><i class="fa fa-picture"></i> Change Avatar</a></li>
											<li ><a data-toggle="tab" href="#tab_3-3"><i class="fa fa-lock"></i> Change Password</a></li>
										</ul>
									</div>
									<div class="col-md-9">
										<div class="tab-content">
											<div id="tab_1-1" class="tab-pane active">
												<form role="form" action="#">
													<div class="form-group">
														<label class="control-label">First Name</label>
														<input type="text" placeholder="John" class="form-control" />
													</div>
													<div class="form-group">
														<label class="control-label">Last Name</label>
														<input type="text" placeholder="Doe" class="form-control" />
													</div>
													<div class="form-group">
														<label class="control-label">Student ID</label>
														<input type="text" placeholder="87363980" class="form-control" />
													</div>
													<div class="form-group">
														<label class="control-label">Website Url</label>
														<input type="text" placeholder="http://www.mywebsite.com" class="form-control" />
													</div>
													<div class="margin-top-10">
														<button class="btn green" style="float:left;margin-right:10px;">Save Changes</button>
														<button class="btn default" style="float:left;">Cancel</button>
														<div class="clearfix"></div>
													</div>
												</form>
											</div>
											<div id="tab_2-2" class="tab-pane">
												<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
												<form action="#" role="form">
													<div class="form-group">
														<div class="thumbnail" style="width: 310px;">
															<img src="http://www.placehold.it/310x170/EFEFEF/AAAAAA&amp;text=no+image" alt="">
														</div>
														<div class="margin-top-10 fileupload fileupload-new" data-provides="fileupload">
															<div class="input-group input-group-fixed">
																<span class="input-group-btn">
																	<span class="uneditable-input">
																		<i class="fa fa-file fileupload-exists"></i> 
																		<span class="fileupload-preview"></span>
																	</span>
																</span>
																<span class="btn blue btn-file" style="width:12opx;float:left;">
																	<span class="fileupload-new"><i class="fa fa-paper-clip"></i> Select file</span>
																	<span class="fileupload-exists"><i class="fa fa-undo"></i> Change</span>
																	<input type="file" class="default" />
																</span>
																<a href="#" class="btn red fileupload-exists" style="width:12opx;float:left;" data-dismiss="fileupload"><i class="fa fa-trash-o"></i> Remove</a>
															</div>
														</div>
														
													</div>
													<div class="margin-top-10">
														<a class="btn green"  style="float:left;margin-right:10px;">Submit</a>
														<a class="btn red"  style="float:left;">Cancel</a>
														<div class="clearfix"></div>
													</div>
												</form>
											</div>
											<div id="tab_3-3" class="tab-pane">
												<form action="#">
													<div class="form-group">
														<label class="control-label">Current Password</label>
														<input type="password" class="form-control" />
													</div>
													<div class="form-group">
														<label class="control-label">New Password</label>
														<input type="password" class="form-control" />
													</div>
													<div class="form-group">
														<label class="control-label">Re-type New Password</label>
														<input type="password" class="form-control" />
													</div>
													<div class="margin-top-10">
														<a href="#" class="btn green" style="float:left;margin-right:10px;">Change Password</a>
														<a href="#" class="btn red" style="float:left;">Cancel</a>
														<div class="clearfix"></div>
													</div>
												</form>
											</div>
								
										</div>
									</div>
									<!--end col-md-9-->                                   
								</div>
							</div>
							<!--end tab-pane-->
							<div class="tab-pane" id="tab_1_4">
								<h3>Here can be described on courses or something else...</h3>
							</div>
						</div>
					</div>
					<!--END TABS-->
				</div>
			</div>
			<!-- END PAGE CONTENT-->
		</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      email: '',
      isSaving: false
    }
  },
  computed: {},
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="css">
	/***
	Vertical inline menu
	***/
	.ver-inline-menu {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.ver-inline-menu li {
		position:relative;
		margin-bottom:1px;
	}

	.ver-inline-menu li i {
		width: 37px;
		height: 37px;
		display: inline-block;
		color:#b9cbd5;
		font-size:15px;
		padding:12px 10px 10px 8px;
		margin:0 8px 0 0;
		text-align: center;
		background:#e0eaf0 !important;
	}

	.ver-inline-menu li a {
		font-size: 13px;
		color:#557386;
		display:block;
		background:#f0f6fa;
		border-left:solid 2px #c4d5df;
		padding: 9px;
	}

	.ver-inline-menu li:hover a,
	.ver-inline-menu li:hover i {
		background:#e0eaf0;
		text-decoration:none;
	}

	.ver-inline-menu li:hover i {
		color:#fff;
		background:#c4d5df !important;
	}

	.ver-inline-menu li.active a,
	.ver-inline-menu li:hover a {
		font-size: 13px;
	}

	.ver-inline-menu li.active a {
		border-left:solid 2px #0c91e5;
	}

	.ver-inline-menu li.active a,
	.ver-inline-menu li.active i {
		color:#fff;
		background:#169ef4;
		text-decoration:none;
		padding: 9px;
	}

	.ver-inline-menu li.active i {
		background:#0c91e5 !important;  
	}

	.ver-inline-menu li.active:after {
		content: '';
		display: inline-block;
		border-bottom: 6px solid transparent;
		border-top: 6px solid transparent;
		border-left: 6px solid #169ef4;
		position: absolute;
		top: 12px;
		right: -5px	;
	}

  @import url('/static/assets/bootstrap-fileupload/bootstrap-fileupload.css');
  @import url('/static/assets/plugins.css');
  @import url('/static/assets/style-metronic.css');
  @import url('/static/assets/style.css');
  @import url('/static/assets/pages/profile.css');
  .page-content {
    padding: 2% 2%;
  }
</style>
<script>
	
</script>