<template>
    <div id="app" class="thing-container">
        <Header id="header" class="gridling"/>
        <Navbar id="navbar" class="gridling" />        
        <Main id="main" class="gridling" />
        <LeftsidePanel id="leftPanel" class="gridling sidepanel" />        
        <RightsidePanel id="rightPanel" class="gridling sidepanel" />

    </div>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main'; 
import LeftsidePanel from '@/components/LeftsidePanel' ;
import RightsidePanel from '@/components/RightsidePanel';


export default {
  name: "home-view",
  components: {
      Header, 
      Navbar,
      Main,
      LeftsidePanel, 
      RightsidePanel, 
      
  },
    

}

</script>

<style>
    .thing-container > .gridling{
        /* border-radius: 1em; */
        /* border: 1px solid black; */
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .thing-container{
        margin: 5vh;
        display: grid;
        grid-template-columns: .5fr 3fr .5fr;
        grid-template-rows: 15vh 5vh 90vh;
        grid-template-areas: "header header header"
                             "navbar navbar navbar"
                             "leftPanel main rightPanel";
        gap: 3px;
                             }
    #header{
        border-bottom: 1px solid black ;
        /* border-bottom: 1px solid black; */
        grid-area: header;      
        
    }

    #navbar{
    grid-area: navbar;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
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


    @media only screen and (max-width: 768px){
        .thing-container{            
            grid-template-columns: 1fr .25fr;
            grid-template-rows: 16vh 5vh 50vh 50vh;
            grid-template-areas: "header header"
                                 "navbar navbar"
                                 "main rightPanel"
                                 "main leftPanel";
                                 
        }
        .thing-container #header.gridling{
            margin-bottom: 1rem;
        }
        body{
            font-size: .75rem;
        }
        #header{
            display: flex; 
            justify-content: space-between;
            align-items: flex-start;            
        }
        #header h4{
            text-align: start;
            margin-bottom: 0;
            margin-top: 1.8rem;
        }
        #navbar{
            margin-top: 5px;
            margin-bottom: 5px;
        }

    }
    @media only screen and (max-width: 512px){
        .thing-container{
            grid-template-columns: 1fr;
            grid-template-rows: 10vh 5vh 85vh 5vh;
            grid-template-areas: "header"
                                "navbar"
                                 "main"
                                 "main";
                                 
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
        #header{
            border: none;
        }
        
    }

</style>