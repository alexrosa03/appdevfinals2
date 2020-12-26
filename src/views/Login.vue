<template>
    <div class="row align-items-center justify-content-center">
            <div class="login-form col-md-5">
                    <form action="/home" method="GET">
                        <h2 class="text-center">Welcome to iNVENTORY</h2>
                        <div class="form-group">
                            <input type="text" id="username" class="form-control" placeholder="username" required="password">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Log In</button>
                        </div>
                        <div class="clearfix">
                            <label class="pull-left checkbox-inline">
                                <input type="checkbox">Remember me
                            </label>
                            <a href="#" class="pull-right">Forgot Password?</a>
                        </div>
                    </form>
                    <p class="text-center"><a href="#">Create an Account</a></p>
            </div>       
    </div>     
</template>

<style>
.login-form {
    margin: auto;
    padding-top: 128px;

}

.login-form form{
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}

.login-form h2 {
    margin: 0 0 15px;
}

.form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
}

.btn {
    font-size: 15px;
    font-weight: bold;
}
</style>

<script>
    import axios from 'axios';
    export default{
        grabData: function(){
        axios({
            method: 'GET',
            url: 'http:localhost:3000/login',
            data:{
                username: "admi",
                password: "admin"
            }
        }).then(response => console.log(response));
        }
}
</script>