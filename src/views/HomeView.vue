<template>
  <MDBRow class="row">
    <MDBCol md="2">
      <Categories />
    </MDBCol>
    <MDBCol md="2">
      <NotesList />
    </MDBCol>
    <MDBCol md="8">
      <div class="pb-3">
        <Header />
      </div>
      <MDBRow>
        <MDBCol md="12">
          <Content />
        </MDBCol>
      </MDBRow>
    </MDBCol>
    
  </MDBRow>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Categories from '@/components/Categories.vue'
import NotesList from '@/components/NotesList.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
import { MDBCol, MDBRow } from 'mdb-vue-ui-kit';

export default {
  name: 'HomeView',
  components: {
    Header,
    Categories,
    NotesList,
    Content,
    Footer,
    MDBCol,
    MDBRow
  }
}
</script>