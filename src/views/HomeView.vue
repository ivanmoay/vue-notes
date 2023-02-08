<template>
  <div class="home">
    <a-layout>
        <a-layout-header>
          <Header />
        </a-layout-header>
        <a-layout>
            <a-layout-sider>
              <Sider />
            </a-layout-sider>
            <a-layout-content>
              <Content />
            </a-layout-content>
        </a-layout>
        <a-layout-footer>
          <Footer />
        </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
import { Layout } from 'ant-design-vue';
import { LayoutHeader } from 'ant-design-vue';
import { LayoutSider } from 'ant-design-vue';
import { LayoutContent } from 'ant-design-vue';
import { LayoutFooter } from 'ant-design-vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Sider,
    Content,
    Footer,
    ALayout: Layout,
    ALayoutHeader: LayoutHeader,
    ALayoutSider: LayoutSider,
    ALayoutContent: LayoutContent,
    ALayoutFooter: LayoutFooter
  }
}
</script>