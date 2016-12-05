<template>
<div>
<form action="#" class="form-horizontal">
    <div class="form-body">
        <div class="form-group">
            <label class="col-md-3 control-label">Text</label>
            <div class="col-md-4">
                <input type="text" class="form-control" placeholder="Enter text">
                <span class="help-block"> A block of help text. </span>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Email Address</label>
            <div class="col-md-4">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control" placeholder="Email Address"> </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Password</label>
            <div class="col-md-4">
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Password">
                    <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Left Icon</label>
            <div class="col-md-4">
                <div class="input-icon">
                    <i class="fa fa-bell-o"></i>
                    <input type="text" class="form-control" placeholder="Left icon"> </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Right Icon</label>
            <div class="col-md-4">
                <div class="input-icon right">
                    <i class="fa fa-microphone"></i>
                    <input type="text" class="form-control" placeholder="Right icon"> </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Input With Spinner</label>
            <div class="col-md-4">
                <input type="password" class="form-control spinner" placeholder="Password"> </div>
        </div>
        
        <div class="form-group">
            <label class="col-md-3 control-label">Disabled</label>
            <div class="col-md-4">
                <input type="password" class="form-control" placeholder="Disabled" disabled=""> 
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Readonly</label>
            <div class="col-md-4">
                <input type="password" class="form-control" placeholder="Readonly" readonly=""> </div>
        </div>
        <div class="form-group last">
            <label class="col-md-3 control-label">Static Control</label>
            <div class="col-md-4">
                <p class="form-control-static"> email@example.com </p>
            </div>
        </div>
    </div>
</form>
</div>
</template>
export default {
  name:'form1',
  data(){
    return {

    }
  }
}