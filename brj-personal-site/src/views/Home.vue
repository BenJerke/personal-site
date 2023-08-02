<template>
    <div id="app" class="container">
        <Header id="header" class="gridling"/>
        <Navbar id="navbar" class="gridling" />        
        <Main id="main" class="gridling" />
        <LeftsidePanel id="leftPanel" class="gridling" />        
        <RightsidePanel id="rightPanel" class="gridling" />
        <Footer id="footer" class="gridling" />
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
  name: "home-view",
  components: {
      Header, 
      Navbar,
      Main,
      LeftsidePanel, 
      RightsidePanel, 
      Footer 
  },
    

}

</script>

<style>
    .container > .gridling{
        border-radius: 1em;
        border: 1px solid black;
    }
    .container{
        margin: 5vh;
        display: grid;
        grid-template-columns: .5fr 2fr .5fr;
        grid-template-rows: 15vh 5vh 80vh 10vh;
        grid-template-areas: "header header header"
                             "navbar navbar navbar"
                             "leftPanel main rightPanel"
                             "footer footer footer";
        gap: 3px;
                             }
    #header{
        grid-area: header;        
    }
    #navbar{
        grid-area: navbar;
    }
    #main{
        grid-area: main;
    }
    #leftPanel{
        grid-area: leftPanel;
    }
    #rightPanel{
        grid-area: rightPanel;
    }
    #footer{
        grid-area: footer
    }

</style>