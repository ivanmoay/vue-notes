<template>
    <MDBBtn color="primary" block> New+ </MDBBtn>
    <MDBListGroup light style="min-width: 10rem" class="mb-2">        
        <MDBListGroupItem v-for="i in 10" :key="i">
            <h5 class="fw-bold">Title</h5>
            <p class="text-muted mb-2 fw-bold text-start">11 March 2020</p>
            <p class="text-muted mb-0 text-start">
                Some placeholder content in a paragraph relating to...
            </p>
        </MDBListGroupItem>
    </MDBListGroup>
</template>

<script>
  import { MDBListGroup, MDBListGroupItem, MDBBtn } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBListGroup,
      MDBListGroupItem,
      MDBBtn
    }
  };
</script>

<style>
h5
{
    text-align: left;
}
</style>