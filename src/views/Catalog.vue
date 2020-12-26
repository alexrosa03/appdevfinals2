<template>
    <div>
        <div id="app">
            <vuehead/>
            <side/>
            <foot/>
        </div>

        <div class="content">
          <br />
          <div class="inventory-page">
                <div id="page-title">
                    <h1>Patient Catalog</h1>
                    <!-- <button id="add-btn" type="button" class="btn btn-success btn-sm">ADD</button>
                    <button id="del-btn" type="button" class="btn btn-danger btn-sm">DELETE</button> -->
                </div>

                <br/><br/>

                <div class="section2 tableBox"> 
                    <table class="col-11 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Patient ID</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Barangay</th>
                                <th scope="col">Contact Info</th>
                                <th scope="col">Vaccine Status</th>
                                <th scope="col">Covid Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- patient_id goes here -->
                                <td>0001</td>
                                <!-- date timestamp goes here -->
                                <td>12/08/20</td>
                                <!-- name, m_name, l_name goes here -->
                                <td>Louis A. Arcilla</td>
                                <!-- barangay goes here -->
                                <td>Lapu-lapu</td>
                                <!-- phone_number, email goes here -->
                                <td>09123456789, example@email.com</td>
                                <!--boolean data goes here-->
                                <td>T</td>
                                <td>+</td>
                            </tr>
                            <tr>
                                <td>0024</td>
                                <td>12/26/20</td>
                                <td>Kyla M. Arcilla</td>
                                <td>Labangon</td>
                                <td>09123456789, example@email.com</td>
                                <td>F</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        <!-- <h1>Is this working?</h1> -->
        <!-- code for the page goes here -->
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
    'vuehead': header,
    'side': sidebar,
    'foot': footer
  }
}
</script>

<style>
  .content {
    float: right;
    position: sticky;
    width: 88%;
    padding-left: 20px;
  }
</style>