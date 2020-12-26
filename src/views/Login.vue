<template>
    <div class="row align-items-center justify-content-center">
            <div class="login-form col-md-5">
                    <form @submit="loginForm">
                        <h2 class="text-center">Welcome to iNVENTORY</h2>
                        <div class="form-group">
                            <input type="text" id="username" v-model="username" class="form-control" placeholder="username" required="password">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" required="required">
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
        name: 'login',
        data(){
            return {
                username: null,
                password: null
            }
        },
        methods: {
            loginForm: function(){
                axios({
                    method: 'POST',
                    url: 'http://localhost:3000/login',
                    data:{username:this.username, password:this.password},
                })
                .then(response => this.session = response.data)
                if (this.session == "true") {
                    this.$router.push({ path: `/home` })
             }
            }
            
        }
    }

</script>