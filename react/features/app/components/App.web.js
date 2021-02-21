// @flow

import { AtlasKitThemeProvider } from '@atlaskit/theme';
import React, { Component } from 'react';

import { DialogContainer } from '../../base/dialog';
import { ChromeExtensionBanner } from '../../chrome-extension-banner';

import { AbstractApp } from './AbstractApp';

import DurchereMeetConstants from '../constants/durchereMeetConstants'

// Register middlewares and reducers.
import '../middlewares';
import '../reducers';

/**
 * Root app {@code Component} on Web/React.
 *
 * @extends AbstractApp
 */
export class App extends AbstractApp{
  
    checkUserLogin() {
     let showPreJoin = localStorage.getItem('showPreJoin');
      if(showPreJoin === null){
        const urlParams = new URLSearchParams(window.location.search);
        let accessKey = urlParams.get('accessKey');
        if(accessKey !== null){
          localStorage.setItem('accessKey',accessKey);
        }
        if(accessKey === null){
          accessKey = localStorage.getItem('accessKey');
        }
        
        if(accessKey !== null){
          const loginCheckUrl = DurchereMeetConstants.LOGIN_CHECK
          fetch(loginCheckUrl, {
            headers: {
              "authorization": accessKey
            }
          })
            .then(response => response.json())
            .then(data => {
              
                if(data.status !== 200 && data !== true){
                  window.location.href = DurchereMeetConstants.LOGIN_URL
                }
         
            })
            .catch(error => {
             window.location.href = DurchereMeetConstants.LOGIN_URL
             });
        }
        else{
          if (accessKey === null && showPreJoin !== null) {
            window.location.href = DurchereMeetConstants.LOGIN_URL
          }
          if (accessKey === null && showPreJoin === null
            && (window.location.href === window.location.origin + "/")) {
            window.location.href = DurchereMeetConstants.LOGIN_URL
          }
        }
      }
      else{
        if(showPreJoin){
          if(window.location.href === window.location.origin+"/"){
            window.location.href = DurchereMeetConstants.LOGIN_URL
          }
        }
      }
        }

    /**
     * Overrides the parent method to inject {@link AtlasKitThemeProvider} as
     * the top most component.
     *
     * @override
     */
    _createMainElement(component, props) {
      console.log("propsssssssssssss",this.props)
        return (
            <AtlasKitThemeProvider mode = 'dark'>
                <ChromeExtensionBanner />
                { super._createMainElement(component, props) }
            </AtlasKitThemeProvider>
        );
    }

    /**
     * Renders the platform specific dialog container.
     *
     * @returns {React$Element}
     */
    _renderDialogContainer() {
        return (
            <AtlasKitThemeProvider mode = 'dark'>
                <DialogContainer />
            </AtlasKitThemeProvider>
        );
    }
}
