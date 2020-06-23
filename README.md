# Github challenge
### (https://githubchallenge.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c98bf67d-7373-4ffc-809c-7cf9ac7d81a6/deploy-status)](https://app.netlify.com/sites/githubchallenge/deploys)

Application developed to test the integration of react with github API V3.

### 1.External Libs:

  - [React] (https://github.com/facebook/react)
  - [React scripts] (https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)
  - [Redux] (https://github.com/reduxjs/redux)
  - [React Redux] (https://github.com/reduxjs/react-redux)
  - [Axios] (https://github.com/axios/axios)
  - [Nodesass] (https://github.com/sass/node-sass)
  - [Font Awesome] (https://github.com/FortAwesome/Font-Awesome)
  - [React Modal] (https://github.com/reactjs/react-modal)
  - [Bootstrap] (https://github.com/twbs/bootstrap)
  
### 2. Architecture:

  - Flux:

    <h1 align="center">
      <img alt="Fastfeet" title="Fastfeet" src="https://cdn.scotch.io/scotchy-uploads/2014/10/rHwGUog.png" width="300px" />
    </h1> 
    
### 3. App Components:

  - Layouts:
    - Header : Have a Logo container and Search component.
    - Main : It's a components container.
    
  - Pages:
    - Home : Default page
    - NotFound : Not found Page

  - Elements:
    - searchBar: used to input the github user thats will be searched
    - starredList: list of user starred repos
    - reposList: list of user repos
    - starredModal: modal with starred infos
    - reposModal: modal with repos infos
    - userDetailsModal: modal with user info details
    - userCard: card with user search info
    - usersList: List of searched user, can be scalable to multiple users
    
 - Actions:
    - SEARCH (loads the user info in [search] state)
    - OPENLIST (shows the github user searched)
    - LOADREPOS (loads the user repos to [repos] state)
    - LOADSTARREDREPOS (loads the user repos to [starredrepos] state)
    
 - States:
    - search
    - repos
    - starred
        
### 4. Starting the App:

  1- To start the app locally, use:
    
        yarn start
        
### 5. Tests (Pending)
        
### 6. Deploy:

  1- To deploy the App, use:
    
        yarn build 
        
  2- Then get the dist folder generated and put in your webserver      
  

By Jefferson Estevam with ♥
