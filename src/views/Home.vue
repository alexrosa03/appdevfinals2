<template>
    <div>

        <div id="app">
            <eader/>
            <side/>
            <foot/>
        </div>

        <div class="content">
            <br />
            <h1>Home</h1>

            <br /><br /><br />

            <h2>Summary</h2>
                <div class="row">
                    <div class="card col-md-4" style="display: inline-block; margin: 0px 5px 5px 15px;">
                        <div class="card-body">
                            <h5 class="card-title">Patients Today</h5>
                            <p class="card-text">46</p>
                        </div>
                    </div>
                    <div class="card col-md-4" style="display: inline-block; margin: 0px 5px 5px 0px;">
                        <div class="card-body">
                            <h5 class="card-title">Patients Yesterday</h5>
                            <p class="card-text">72</p>
                        </div>
                    </div>


                    <div class="card col-md-4" style="display: inline-block; margin: 0px 5px 5px 15px;">
                        <div class="card-body">
                            <h5 class="card-title">Patients This Month</h5>
                            <p class="card-text">1012</p>
                        </div>
                    </div>
                    <div class="card col-md-4" style="display: inline-block; margin: 0px 5px 5px 0px;">
                        <div class="card-body">
                            <h5 class="card-title">Patients Last Month</h5>
                            <p class="card-text">1854</p>
                        </div>
                    </div>
                </div>

            <br /><br />

            <div class="row">
                <div class="col-lg box">
                    <div class="row planBox text-left">
                        <div class="col-md-8 section1">
                            <h2>New Patients This Week</h2>
                        </div>

                        <div class="col-md-10 section2 tableBox">
                            <table class="col-md-6 table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Doctor</th>
                                    </tr>
                                    
                                </thead>
                                <!-- placeholder data -->
                                <tbody>
                                    <tr>
                                        <td>12/12/2020</td>
                                        <td>Kyla Mondejar</td>
                                        <td>Labangon</td>
                                        <td>Dr. Andrea Barameda, PhD.</td>
                                    </tr>
                                    <tr>
                                        <td>12/18/2020</td>
                                        <td>Sepia Times</td>
                                        <td>Mango Ave.</td>
                                        <td>Dr. Icy Ang, PhD.</td>
                                    </tr>
                                    <tr>
                                        <td>12/26/2020</td>
                                        <td>Louis Arcilla</td>
                                        <td>Lapu-lapu</td>
                                        <td>Dr. Grisha Jaeger, PhD.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        

    </div>
</template>

<script>
import header from '../components/header.vue'
import sidebar from '../components/sidebar.vue'
import footer from '../components/footer.vue'


export default {
  name: 'App',
  components: {
    'eader': header,
    'side': sidebar,
    'foot': footer
  }
}
</script>

<style>
  .content {
    float: right;
    width: 100%;
  }
</style>