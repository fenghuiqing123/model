<template>
  <div class="nav-menu clearfix page-header navbar navbar-fixed-top">
    <a href="javascript:;"><span class="title">组件库</span></a>
    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
        <span></span>
    </a>
  </div>
</template>
<style>
  .nav-menu{
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    background-color: #fff;
  }
  .title{
    line-height: 60px;
    color:#757575;
  }  
  a:hover{
    text-decoration: underline;
  }
  .page-header.navbar{
        background-color:#fff;
        color:#333;
        border-bottom:1px solid #999;
        height:60px;
        min-height:60px;
    }
    .page-header.navbar a{
        text-decoration:none;
        margin-left:24px;
        font-size:26px;
    }
</style>
