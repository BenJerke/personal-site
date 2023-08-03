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
        /* border-radius: 1em; */
        /* border: 1px solid black; */
        padding: 5px;
    }
    .container{
        margin: 5vh;
        display: grid;
        grid-template-columns: .5fr 3fr .5fr;
        grid-template-rows: 15vh 5vh 80vh 10vh;
        grid-template-areas: "header header header"
                             "navbar navbar navbar"
                             "leftPanel main rightPanel"
                             "footer footer footer";
        gap: 3px;
                             }
    #header{
        border-top: 1px solid black ;
        /* border-bottom: 1px solid black; */
        grid-area: header;      
    }
    #navbar{
    grid-area: navbar;
    display: flex;
    justify-content: center;
    align-items: center;
    }
              
    #main{
        grid-area: main;
        border-top: 1px solid black ;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
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
    @media only screen and (max-width: 768px){
        .container{            
            grid-template-columns: .25fr 1fr;
            grid-template-rows: 5vh 5vh 40vh 40vh 5vh;
            grid-template-areas: "header header"
                                 "navbar navbar"
                                 "rightPanel main"
                                 "leftPanel main"
                                 "footer footer";
        }
        body{
            font-size: .75rem;
        }
        
    }
    @media only screen and (max-width: 512px){
        .container{
            grid-template-columns: 1fr;
            grid-template-rows: 5vh 5vh 85vh 5vh;
            grid-template-areas: "header"
                                 "main"
                                 "main"
                                 "navbar"
        }
        body{
            font-size: .5rem;
        }
        #leftPanel{
            display: none;            
        }
        #rightPanel{
            display: none;
        }
        #footer{
            display: none;
        }
        
    }

</style>