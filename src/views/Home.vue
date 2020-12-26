<template>
    <div class="content">
        <br />
        <h1>Home</h1>

        <br /><br /><br />

        <h1>Summary</h1>
            <div class="row">
                <div class="card col-md-5" style="display: inline-block; margin: 0px 5px 5px 15px;">
                    <div class="card-body">
                        <h5 class="card-title">Patients Today</h5>
                        <p class="card-text">46</p>
                    </div>
                </div>
                <div class="card col-md-5" style="display: inline-block; margin: 0px 5px 5px 0px;">
                    <div class="card-body">
                        <h5 class="card-title">Patients Yesterday</h5>
                        <p class="card-text">72</p>
                    </div>
                </div>


                <div class="card col-md-5" style="display: inline-block; margin: 0px 5px 5px 15px;">
                    <div class="card-body">
                        <h5 class="card-title">Patients This Month</h5>
                        <p class="card-text">1012</p>
                    </div>
                </div>
                <div class="card col-md-5" style="display: inline-block; margin: 0px 5px 5px 0px;">
                    <div class="card-body">
                        <h5 class="card-title">Patients Last Month</h5>
                        <p class="card-text">1854</p>
                    </div>
                </div>
            </div>

        <br /><br />

        <div class="row">
            <div class="col-lg box">
                <div class="row planBox premium text-left">
                    <div class="col-md-12 section1">
                        <h2>New Patients This Week</h2>
                    </div>

                    <div class="col-md-12 section2 tableBox">
                        <table class="col-md-6 table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Doctor</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import header from './components/header.vue'
    // import sidebar from './components/sidebar.vue'
    // import footer from './components/footer.vue'
    // import content from './components/content.vue'

export default {

}
</script>

<style>
</style>