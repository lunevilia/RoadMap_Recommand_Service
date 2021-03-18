import React from 'react';
import {WebView} from 'react-native-webview';

const bookinfo = (props) => {

    return(
        <WebView source ={{uri : props.route.params.bookUrl}}>
        </WebView>
    );
}

export default bookinfo;