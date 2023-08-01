<template>
    <div id="container">
        <Header id="header" />
        <Navbar id="navbar" />        
        <LeftsidePanel id="leftPanel" /> 
        <Main id="main" />       
        <RightsidePanel id="rightPanel" />
        <Footer id="footer" />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main'; 
import LeftsidePanel from '@/components/LeftsidePanel' ;
import RightsidePanel from '@/components/RightsidePanel';
import Footer from '@/components/Footer';

export default {
  components: {
      Header, 
      Navbar,
      Main,
      LeftsidePanel, 
      RightsidePanel, 
      Footer 
  },
    name: "home-view",
}

</script>

<style>
    div#container{
        margin: 5vh;
        display: grid;
        height: 100%; 
        width: 100%;
        grid-template-columns: .5fr 2fr .5fr;
        grid-template-rows: 10vh 5vh 80vh 5vh;
        grid-template-areas: "header header header"
                             "navbar navbar navbar"
                             "leftPanel main rightPanel"
                             "footer footer footer";                                                          
    }
    div#header{
        grid-area: header;        
    }
    div#navbar{
        grid-area: navbar;
    }
    div#main{
        grid-area: main;
    }
    div#leftPanel{
        grid-area: leftPanel;
    }
    div#rightPanel{
        grid-area: rightPanel;
    }
    div#footer{
        grid-area: footer
    }

</style>