<template>
  <transition name='fade-forward'>
    <div class="paper">
      <div class="page-content">
        <!-- BEGIN PAGE HEADER-->
        <div class="row">
          <div class="col-md-12">
            <!-- BEGIN PAGE TITLE & BREADCRUMB-->
            <h3 class="page-title">
              Dashboard <small>statistics and more</small>
            </h3>
            <ul class="page-breadcrumb breadcrumb">
              <li>
                <i class="fa fa-home"></i>
                <a href="">Home</a> 
                <i class="fa fa-angle-right"></i>
              </li>
              <li><a href="#">Dashboard</a></li>
              
              <!-- <li class="pull-right">
                <div id="dashboard-report-range" class="dashboard-date-range tooltips" data-placement="top" data-original-title="Change dashboard date range">
                  <i class="fa fa-calendar"></i>
                  <span></span>
                  <i class="fa fa-angle-down"></i>
                </div>
              </li> -->
            </ul>
            <!-- END PAGE TITLE & BREADCRUMB-->
          </div>
        </div>
        <!-- END PAGE HEADER-->
        <!-- BEGIN DASHBOARD STATS -->
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat blue">
              <div class="visual">
                <i class="glyphicon glyphicon-th-list"></i>
              </div>
              <div class="details">
                <div class="number">
                  1349
                </div>
                <div class="desc">                           
                  Courses
                </div>
              </div>
              <a class="more" @click="goToPage('customers')">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat green">
              <div class="visual">
                <i class="glyphicon glyphicon-user"></i>
              </div>
              <div class="details">
                <div class="number">549</div>
                <div class="desc">Students</div>
              </div>
              <a class="more" @click="goToPage('customers')">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat purple">
              <div class="visual">
                <i class="glyphicon glyphicon-paperclip"></i>
              </div>
              <div class="details">
                <div class="number">436</div>
                <div class="desc">Writers</div>
              </div>
              <a class="more" @click="goToPage('customers')">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat yellow">
              <div class="visual">
                <i class=" glyphicon glyphicon-edit"></i>
              </div>
              <div class="details">
                <div class="number">536</div>
                <div class="desc">Editors</div>
              </div>
              <a class="more" @click="goToPage('customers')">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
        </div>
        <!-- END DASHBOARD STATS -->
        <div class="clearfix"></div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
					<div class="portlet box blue">
						<div class="portlet-title">
							<div class="caption"><i class="glyphicon glyphicon-tags"></i>Activity Stream</div>
							<!-- <div class="actions">
								<div class="btn-group">
									<a class="btn btn-sm default" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
									Filter By
									<i class="fa fa-angle-down"></i>
									</a>
									<div class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">
										<label><input type="checkbox" /> Finance</label>
										<label><input type="checkbox" checked="" /> Membership</label>
										<label><input type="checkbox" /> Customer Support</label>
										<label><input type="checkbox" checked="" /> HR</label>
										<label><input type="checkbox" /> System</label>
									</div>
								</div>
							</div> -->
						</div>
						<div class="portlet-body">
							<div class="scroller" style="height: 300px;" data-always-visible="1" data-rail-visible="0">
								<ul class="feeds">
									<li>
										<div class="col1">
											<div class="cont">
												<div class="cont-col1">
													<div class="label label-sm label-info">                        
														<i class="fa fa-check"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 4 pending tasks.
														<span class="label label-sm label-warning ">
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
														<div class="label label-sm label-success">                        
															<i class="fa fa-bar-chart-o"></i>
														</div>
													</div>
													<div class="cont-col2">
														<div class="desc">
															Finance Report for year 2013 has been released.   
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
													<div class="label label-sm label-danger">                      
														<i class="fa fa-user"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 5 pending membership that requires a quick review.                       
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
													<div class="label label-sm label-info">                        
														<i class="fa fa-shopping-cart"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														New order received with <span class="label label-sm label-success">Reference Number: DR23923</span>             
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
													<div class="label label-sm label-success">                      
														<i class="fa fa-user"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 5 pending membership that requires a quick review.                       
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
													<div class="label label-sm label-default">                        
														<i class="fa fa-bell-o"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														Web server hardware needs to be upgraded. 
														<span class="label label-sm label-default ">Overdue</span>             
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
										<a href="#">
											<div class="col1">
												<div class="cont">
													<div class="cont-col1">
														<div class="label label-sm label-default">                        
															<i class="fa fa-briefcase"></i>
														</div>
													</div>
													<div class="cont-col2">
														<div class="desc">
															IPO Report for year 2013 has been released.   
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
													<div class="label label-sm label-info">                        
														<i class="fa fa-check"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 4 pending tasks.
														<span class="label label-sm label-warning ">
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
														<div class="label label-sm label-danger">                        
															<i class="fa fa-bar-chart-o"></i>
														</div>
													</div>
													<div class="cont-col2">
														<div class="desc">
															Finance Report for year 2013 has been released.   
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
													<div class="label label-sm label-default">                      
														<i class="fa fa-user"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 5 pending membership that requires a quick review.                       
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
													<div class="label label-sm label-info">                        
														<i class="fa fa-shopping-cart"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														New order received with <span class="label label-sm label-success">Reference Number: DR23923</span>             
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
													<div class="label label-sm label-success">                      
														<i class="fa fa-user"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														You have 5 pending membership that requires a quick review.                       
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
													<div class="label label-sm label-warning">                        
														<i class="fa fa-bell-o"></i>
													</div>
												</div>
												<div class="cont-col2">
													<div class="desc">
														Web server hardware needs to be upgraded. 
														<span class="label label-sm label-default ">Overdue</span>             
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
										<a href="#">
											<div class="col1">
												<div class="cont">
													<div class="cont-col1">
														<div class="label label-sm label-info">                        
															<i class="fa fa-briefcase"></i>
														</div>
													</div>
													<div class="cont-col2">
														<div class="desc">
															IPO Report for year 2013 has been released.   
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
								</ul>
							</div>
							<div class="scroller-footer">
								<div class="pull-right">
									<a href="#">See All Records <i class="m-icon-swapright m-icon-gray"></i></a> &nbsp;
								</div>
							</div>
						</div>
					</div>
				</div>
				
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      email: '',
      isSaving: false
    }
  },
  computed: {},
  methods: {
    goToPage (name) {
      this.$router.replace(name);
      return name;
    }
  },
  watch: {
  }
}
</script>

<style lang="css">
  .page-content {
    padding: 2% 2%;
  }
  a.more {
    cursor: pointer;
  }
  /***
  System feeds
  ***/
  .feeds {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  .feeds li {
    background-color: #fafafa;
    margin-bottom: 7px;   
  }

  .feeds li:before, 
  .feeds li:after {
    display: table;
    line-height: 0;
    content: "";
  }

  .feeds li:after {
    clear: both;
  }

  .feeds li:last-child {
    margin-bottom: 0px;
  }

  .feeds .col1 {
    float:left;
    width:100%;  
    clear: both;
  }

  .feeds .col2 {
    float:left;
    width:75px;
    margin-left:-75px;
  }

  .feeds .col1 .cont {
    float:left;
    margin-right:75px;
    overflow:hidden;
  }

  .feeds .col1 .cont  .cont-col1 {
    float:left;
    margin-right:-100%;
  }

  .feeds .col1 .cont  .cont-col1 .label {
    display: inline-block;
    padding: 5px 4px 6px 5px;
    vertical-align: middle;
    text-align: center;
  }
  .feeds .col1 .cont  .cont-col1 .label > i {
    text-align: center;
    font-size: 14px;
  }

  .feeds .col1 .cont .cont-col2 {
    float:left;
    width:100%;
  }

  .feeds .col1 .cont .cont-col2 .desc { 
    margin-left:35px;
    padding-top: 4px;
    padding-bottom: 5px;
    overflow:hidden;
  }

  .feeds .col2 .date {
    padding: 4px 9px 5px 4px;
    text-align: right;
    font-style: italic;
    color:#c1cbd0;
  }

  /***
  Portlets
  ***/
  .portlet  {
    clear: both;
    margin-top: 0px;
    margin-bottom: 25px;
    padding: 0px;
  }

  .portlet > .portlet-title {  
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .portlet > .portlet-title:after,
  .portlet > .portlet-title:before {
    content: "";
    display: table;
    line-height: 0;
  }

  .portlet > .portlet-title:after {
    clear: both;
  }

  .portlet > .portlet-title > .caption {
    float: left;
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin-bottom: 8px; 
  }

  .portlet > .portlet-title > .caption > i {
    float: left;
    margin-top: 4px;
    display: inline-block !important;
    font-size: 13px;
    margin-right: 5px;
    color: #666;
  }

  .portlet.blue > .portlet-title > .caption,
  .portlet.green > .portlet-title > .caption, 
  .portlet.yellow > .portlet-title > .caption,
  .portlet.red > .portlet-title > .caption, 
  .portlet.purple > .portlet-title > .caption, 
  .portlet.grey > .portlet-title > .caption {
    color: #fff;
  }

  .portlet.box.blue > .portlet-title > .caption > i, 
  .portlet.box.green > .portlet-title > .caption > i,
  .portlet.box.grey > .portlet-title > .caption > i,
  .portlet.box.yellow > .portlet-title > .caption > i, 
  .portlet.box.red > .portlet-title > .caption > i,  
  .portlet.box.purple > .portlet-title > .caption > i, 
  .portlet.box.light-grey > .portlet-title > .caption > i{
    color: #fff;
  }

  .sortable .portlet > .portlet-title {
    cursor: move;
  }

  .portlet > .portlet-title > .tools,
  .portlet > .portlet-title > .actions
  {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: 6px;
    float: right;
  }

  .portlet > .portlet-title > .tools > a {
    display: inline-block;
    height: 16px;
    margin-left:5px;
  }

  .portlet > .portlet-title > .actions > .dropdown-menu i {
    color: #000 !important;
  }

  .portlet > .portlet-title > .tools > a.remove {
    margin-bottom: 2px;
    background-image:url(/static/img/portlet-remove-icon.png);
    background-repeat: no-repeat;
    width: 11px;
  }

  .portlet > .portlet-title > .tools > a.config {
    margin-bottom: 2px;
    background-image:url(/static/img/portlet-config-icon.png);
    background-repeat: no-repeat;
    width: 12px;
  }

  .portlet > .portlet-title > .tools > a.reload {
    margin-bottom: 2px;
    background-image:url(/static/img/portlet-reload-icon.png);
    width: 13px;
  }

  .portlet > .portlet-title > .tools > a.expand {
    margin-bottom: 2px;
    background-image:url(/static/img/portlet-expand-icon.png);
    width: 14px;
  }

  .portlet > .portlet-title > .tools > a.collapse {
    margin-bottom: 2px;
    background-image:url(/static/img/portlet-collapse-icon.png);
    width: 14px;
  }

  .portlet > .portlet-title > .tools > a:hover {
    text-decoration: none;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    opacity:.6;  
    filter:'alpha(opacity=60)';
  }

  .portlet > .portlet-title > .actions > .btn-group {
    margin-top: -12px;
  }

  .portlet > .portlet-title > .actions > .btn {
    padding: 4px 10px;
    margin-top: -14px;
  }

  .portlet > .portlet-title > .actions > .btn-group > .btn {
    padding: 4px 10px;
    margin-top: -1px;
  }

  .portlet > .portlet-title > .actions > .btn.btn-sm {
    padding: 3px 8px;
    margin-top: -14px;
  }

  .portlet > .portlet-title > .actions > .btn-group > .btn-sm {
    padding: 3px 8px;
    margin-top: -1px;
  }

  .portlet > .portlet-title > .pagination.pagination-sm {
    float: right !important;
    display: inline-block !important;
    margin: 0px;
    margin-top: -4px;
  }

  .portlet > .portlet-body {
    clear: both;  
    padding: 0;  
  }

  .portlet > .portlet-body.light-blue, .portlet.light-blue {
    background-color: #bfd5fa  !important;
  }

  .portlet > .portlet-body.blue, .portlet.blue {
    background-color: #4b8df8 !important;
  }

  .portlet > .portlet-body.red, .portlet.red {
    background-color: #e02222 !important;
  }

  .portlet > .portlet-body.yellow, .portlet.yellow {
    background-color: #ffb848 !important;
  }

  .portlet > .portlet-body.green, .portlet.green {
    background-color: #35aa47 !important;
  }

  .portlet > .portlet-body.purple, .portlet.purple {
    background-color: #852b99 !important;
  }

  .portlet > .portlet-body.light-grey, .portlet.light-grey {
    background-color: #fafafa !important;
  }

  .portlet > .portlet-body.grey, .portlet.grey {
    background-color: #555555 !important;
  }
  /***
  Solid colored portlet
  ***/
  .portlet.solid {
    padding: 10px;
  }

  .portlet.solid > .portlet-title > .tools {
    margin-top: 2px;
    border: 0px;
  }

  .portlet.solid > .portlet-title {
    margin-bottom: 5px;
    border: 0px;
  }

  .portlet.solid.bordered > .portlet-title {
    margin-bottom: 15px;
  }

  .portlet.solid.red > .portlet-title,
  .portlet.solid.red > .portlet-title > .caption > i,
  .portlet.solid.red > .portlet-body,

  .portlet.solid.green > .portlet-title,
  .portlet.solid.green > .portlet-title > .caption > i,
  .portlet.solid.green > .portlet-body,

  .portlet.solid.yellow > .portlet-title,
  .portlet.solid.yellow > .portlet-title > .caption > i,
  .portlet.solid.yellow > .portlet-body,

  .portlet.solid.grey > .portlet-title,
  .portlet.solid.grey > .portlet-title > .caption > i,
  .portlet.solid.grey > .portlet-body,

  .portlet.solid.purple > .portlet-title,
  .portlet.solid.purple > .portlet-title > .caption > i,
  .portlet.solid.purple > .portlet-body,

  .portlet.solid.blue > .portlet-title,
  .portlet.solid.blue > .portlet-title > .caption > i,
  .portlet.solid.blue > .portlet-body {
    border: 0;
    color: #fff;
  }

  .portlet.bordered {
    border-left: 2px solid #ddd;
  }

  /***
    Box portlet
  ***/


  .portlet.box {
    padding:0px !important
  }

  .portlet.box > .portlet-title {  
    padding:8px 10px 2px 10px;
    border-bottom: 1px solid #eee;
    color: #fff !important;
  }

  .portlet.box > .portlet-title > .actions > .btn > i {
    color: #fff !important;
  }

  .portlet.box > .portlet-title > .tools {
    margin-top: 3px;
  }

  .portlet.box > .portlet-title > .tools > a.remove, 
  .portlet.solid > .portlet-title > .tools > a.remove {
    background-image:url(/static/img//portlet-remove-icon-white.png);
  }

  .portlet.box > .portlet-title > .tools > a.config,
  .portlet.solid > .portlet-title > .tools > a.config {
    background-image:url(/static/img//portlet-config-icon-white.png);
  }

  .portlet.box > .portlet-title > .tools > a.reload,
  .portlet.solid > .portlet-title > .tools > a.reload {
    background-image:url(/static/img//portlet-reload-icon-white.png);
  }

  .portlet.box > .portlet-title > .tools > a.expand,
  .portlet.solid > .portlet-title > .tools > a.expand {
    background-image:url(/static/img//portlet-expand-icon-white.png);
  }

  .portlet.box > .portlet-title > .tools > a.collapse,
  .portlet.solid > .portlet-title > .tools > a.collapse {
    background-image:url(/static/img//portlet-collapse-icon-white.png);
  }

  /* portlet buttons */
  .portlet.box > .portlet-body {
    background-color: #fff;
    padding: 10px;
  }

  .portlet.box > .portlet-title {  
    margin-bottom: 0px;
  }

  .portlet.box.blue > .portlet-title {
    background-color: #4b8df8;
  } 

  .portlet.box.blue {  
    border: 1px solid #b4cef8;
    border-top: 0;
  }

  .portlet.box.red > .portlet-title {
    background-color: #e02222;
  } 

  .portlet.box.red {  
    border: 1px solid #ef8476;
    border-top: 0;
  }

  .portlet.box.yellow > .portlet-title {
    background-color: #ffb848;
  } 

  .portlet.box.yellow {  
    border: 1px solid #fccb7e;
    border-top: 0;
  }

  .portlet.box.green > .portlet-title {
    background-color: #35aa47;
  } 

  .portlet.box.green {  
    border: 1px solid #77e588;
    border-top: 0;
  }

  .portlet.box.purple > .portlet-title {
    background-color: #852b99;
  } 

  .portlet.box.purple {  
    border: 1px solid #af5cc1;
    border-top: 0;
  }

  .portlet.box.grey > .portlet-title {
    background-color: #555555;
  } 

  .portlet.box.grey {  
    border: 1px solid #9d9c9c;
    border-top: 0;
  }

  .portlet.box.light-grey > .portlet-title {
    background-color: #aaa;
  } 

  .portlet.box.light-grey {  
    border: 1px solid #bbb;
    border-top: 0;
  }
  /***
  Custom portlet tabs
  ***/
  .portlet-tabs > .nav-tabs {
      position: relative;
      top: -41px;
      margin-right: 10px;
      overflow: hidden;
  }

  .portlet-tabs > .nav-tabs > li {
      float: right;
  }

  .portlet-tabs > .nav-tabs {
      border-bottom: none;
  }

  .portlet-tabs > .nav-tabs > li > a {
    color: #fff;
    padding-top: 8px;
    padding-bottom: 10px;
    line-height: 16px;
    margin-top: 6px;
    margin-left: 0px;
    margin-right: 0px;
    border-left: 0;    
    border-right: 0;
      -webkit-border-radius: 0px;
          -moz-border-radius: 0px;
              border-radius: 0px;   
  }

  .portlet-tabs > .nav-tabs > li:last-child > a {
    border-right:0;
  }

  .portlet-tabs > .nav-tabs > li {
    margin-left: 1px;
  }

  .portlet-tabs > .nav-tabs > li.active {
    color: #333;
    border-top-color: transparent;
  }

  .portlet-tabs > .nav-tabs > li.active > a {
    margin-bottom: 0px;
    border-bottom: 0;
    margin-left: 0px;
    margin-right: 0px;
    border-left: 0;    
    border-right: 0;
    border-top-color:transparent !important;
  }

  .portlet-tabs > .nav-tabs > li > a:hover {   
    color: #333;
    margin-bottom: 0;
    border-bottom-color: transparent;
    margin-left: 0;
    margin-right: 0;
    border-left: 0;    
    border-right: 0;
    border-top-color:transparent;
    background-color: #fff;
  }  

  .portlet-tabs > .nav-tabs > .active > a  {
    color: #555555;
    cursor: default;
    background-color: #fff;
  }

  .portlet-tabs > .nav-tabs > .active > a:hover {
    background-color: #fff !important;
  }

  .portlet-tabs > .tab-content {
    padding: 10px !important;
    margin: 0px;
    margin-top: -50px !important;
  }

  .portlet.tabbable .portlet-body {
    padding: 0px;
  }

  .tab-pane > p:last-child {
    margin-bottom: 0px;
  }

  /***
  Dashboard stats
  ***/
  .dashboard-stat {
    margin-bottom: 25px;
  }

  .dashboard-stat:before,
  .dashboard-stat:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .dashboard-stat:after {
    clear: both;
  }

  .dashboard-stat .visual {
    width: 80px;
    height:80px;
    display: block;
    float: left;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 10px;
  }

  .dashboard-stat .visual i {
    font-size: 65px;
    line-height: 65px;
    color: #fff;
  }

  @media (min-width: 992px) and (max-width: 1024px) {  

    .dashboard-stat .visual i { 
      font-size: 28px;
      line-height: 28px;
    }

  }

  .dashboard-stat .details {
    position: absolute;
    right: 15px;
    padding-right: 10px;  
  }

  .dashboard-stat .details .number {    
    padding-top: 15px;
    text-align: right;
    font-size: 34px;
    line-height: 34px;
    letter-spacing: -1px;
    margin-bottom: 5px;
    font-weight: 300;
    color: #fff;
  }

  .dashboard-stat .details .desc {
    text-align: right;
    font-size: 16px;
    letter-spacing: 0px;
    font-weight: 300;
    color: #fff;  
  }

  .dashboard-stat .more {
    clear: both;
    display: block;  
    padding: 5px 10px 5px 10px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 11px;
    color: #fff;  
    opacity: 0.7;  
    filter: alpha(opacity=70);
  }  

  .dashboard-stat .more:hover {
    text-decoration: none;
    opacity: 1;  
    filter: alpha(opacity=100);
  }

  .dashboard-stat .more > i {
    display: inline-block;
    margin-top: 1px;
    float: right;
  }

  .dashboard-stat.blue {
    background-color: #27a9e3;
  }

  .dashboard-stat.blue .more { 
    background-color: #208dbe;
  } 

  .dashboard-stat.green {
    background-color: #28b779;
  }

  .dashboard-stat.green .more { 
    background-color: #10a062;
  } 

  .dashboard-stat.red {
    background-color: #e7191b;
  }

  .dashboard-stat.red .more { 
    background-color:#bc0d0e;
  } 

  .dashboard-stat.yellow {
    background-color: #ffb848;
  }

  .dashboard-stat.yellow .more { 
    background-color: #cb871b;
  } 

  .dashboard-stat.purple {
    background-color: #852b99;
  }

  .dashboard-stat.purple .more { 
    background-color: #6e1881;
  } 

  /***
  SlimScrollBar plugins css changes
  ***/
  .scroller {
    padding: 0px ;
    margin: 0px ;
    padding-right: 12px ;
    overflow: hidden;
  }

  .scroller-footer {
    margin-top: 10px;
  }

  .scroller-footer:after,
  .scroller-footer:before {
    content: "";
    display: table;
    line-height: 0;
  }

  .scroller-footer:after {
    clear: both;
  }

  .portlet-body .slimScrollBar {
    margin-right: 0px ;
  }
</style>

<style lang="scss" scoped>
  .fields {
    .field { display:flex; margin-bottom:20px;
      label { align-items:center; display:flex; font-size:14px; font-weight:500; justify-content:flex-end; padding-right:18px; text-align:right; text-transform:uppercase; width:150px; }
      .input { display:flex; position:relative; width:310px; }
      input[type=text], input[type=email] { border:1px solid #d7dbe0; border-radius:3px; font-size:14px; max-height:35px; padding:12px 12px; }

      &.string {
        input { width:100%; }
      }
      &.date {
        input { width:33.33%; }
      }
    }
  }

  .actions { align-items:center; border-top:1px dotted #e9eaed; display:flex; justify-content:center; padding:20px; }
</style>

