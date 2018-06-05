import React, { Component } from 'react';
import cmConfig from '../../CommonConfig';

class PDFViewer extends Component {
    render(){
        const { src } = this.props;
        if(src === null){
            return null;
        }
        else{
            return(
                <iframe title="PDF Viewer" src={`${cmConfig.baseURL + 'pdf/viewer.html?file='+ _.replace(src,'upload\\','..\\')}`} width="100%" height="600px" />
            )
        }
    }
}

export default PDFViewer;