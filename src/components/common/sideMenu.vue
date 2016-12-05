<template>
<div class="page-sidebar-wrapper"> 
  <div class="side-menu page-sidebar-wrapper page-sidebar navbar-collapse collapse">
    <el-row>
    <el-col :span=24>
        
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo page-sidebar-menu  page-header-fixed" :router="true" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
          <el-menu-item-group title="Basic" index="basic">
            <el-menu-item index="color">Color 色彩</el-menu-item>
            <el-menu-item index="icon">Icon 图标</el-menu-item>
            <el-menu-item index="button">Button 按钮</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group index="1" title="Form">
            <el-menu-item index="host">Radio 单选框</el-menu-item>
            <el-menu-item index="cron">Input 输入框</el-menu-item>
            <el-menu-item index="checkbox">Checkbox 多选框</el-menu-item>
            <el-menu-item index="select">Select 选择器</el-menu-item>
            <el-menu-item index="datepicker">DatePicker 日期选择器</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group index="works" title="Data">
            <el-menu-item index="table">Table 表格</el-menu-item>
            <el-menu-item index="tag">Tag 标签</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="3"></i>Other</el-menu-item>
        </el-menu>
        </el-col>
      </el-row>
      
  </div>
</div>  
</template>

<style>
  .side-menu{
    position: fixed;
    top: 95px;
    left: 0;
    bottom: 0;
    width: 235px;
    min-width: 45px;
    max-height: 100vh;
    height: 100%;
    z-index: 1023;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .page-sidebar, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover{
        background-color: #fff;
    }
    .el-menu{
        background-color:#fff;
    }
    .el-menu-item, .el-submenu__title{
        color:#333;
    }
    .el-submenu .el-menu-item, .el-submenu__title{
        border-top:none;
    }
    .el-submenu .el-menu{
        background-color:#fff;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        background:#fff;
        color:#e7645e;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover{
        background:#fff;
        color:#e7645e;
    }
    .el-menu .el-menu-item:hover,.el-submenu__title:hover{
        background:#fff;
        color:#e7645e;
    }
    .page-sidebar .page-sidebar-menu>li, .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li{
        padding:0 10px 0 28px;
    }
    .page-sidebar .page-sidebar-menu>li.el-submenu{
        padding:0;
    }
    .el-menu-item, .el-submenu__title{
        padding:0 10px 0 28px;
        height:40px;
        line-height:40px;
    }
    .el-submenu__icon-arrow{
        right:28px;
    }
    
    .page-header-fixed .page-container{
        margin-top:60px;
    }
    .el-submenu .el-menu-item{
        height:32px;
        line-height:32px;
    }
    .el-menu-item-group__title{
        padding-left:0 !important;
    }
    @media screen and (max-width:991px){
        .page-sidebar, .page-sidebar.navbar-collapse.in{
            margin:0;
        }
        .page-sidebar.navbar-collapse{
            width:100%;
        }
        .side-menu{
            top:0px;
        }
        
    }
    @media screen and (max-width:480px){
        .page-sidebar, .page-sidebar.in{
            margin:0 !important;
        }
    }
</style>
