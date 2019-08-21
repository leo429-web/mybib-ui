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
              <li class="pull-right">
                <div id="dashboard-report-range" class="dashboard-date-range tooltips" data-placement="top" data-original-title="Change dashboard date range">
                  <i class="fa fa-calendar"></i>
                  <span></span>
                  <i class="fa fa-angle-down"></i>
                </div>
              </li>
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
                <i class="fa fa-comments"></i>
              </div>
              <div class="details">
                <div class="number">
                  1349
                </div>
                <div class="desc">                           
                  Courses
                </div>
              </div>
              <a class="more" href="#">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat green">
              <div class="visual">
                <i class="fa fa-shopping-cart"></i>
              </div>
              <div class="details">
                <div class="number">549</div>
                <div class="desc">Students</div>
              </div>
              <a class="more" href="#">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat purple">
              <div class="visual">
                <i class="fa fa-globe"></i>
              </div>
              <div class="details">
                <div class="number">436</div>
                <div class="desc">Writers</div>
              </div>
              <a class="more" href="#">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat yellow">
              <div class="visual">
                <i class="fa fa-bar-chart-o"></i>
              </div>
              <div class="details">
                <div class="number">536</div>
                <div class="desc">Editors</div>
              </div>
              <a class="more" href="#">
              View more <i class="m-icon-swapright m-icon-white"></i>
              </a>                 
            </div>
          </div>
        </div>
        <!-- END DASHBOARD STATS -->
        <div class="clearfix"></div>
        
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
  },
  watch: {
  }
}
</script>

<style lang="css">
  @import '../../assets/plugins/font-awesome/css/font-awesome.min.css';
  .page-content {
    padding: 0 2%;
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