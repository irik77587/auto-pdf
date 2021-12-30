import React, { Component } from 'react';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sells: [
		    {
		      "desc": "Organic lead generation",
		      "cost": "$60"
		    },
		    {
		      "desc": "Customer behaviour endpoint setup",
		      "cost": "$60"
		    },
		    {
		      "desc": "Social network advertisement",
		      "cost": "$60"
		    }
		  ],
      total: "180",
      tax: "20",
      brand: "Alfreds Futterkiste",
      agent: "Marie Anders",
      phone: "030-0074321",
      local: "Obere Str. 57, Berlin, Germany"
    }
  }
  render() {
    return (
	    <div style={{height:"100vh"}}>
	      
		    <BlobProvider document={
		      <MyDocument 
		        company = {this.state.brand} 
		        agent = {this.state.agent} 
		        address = {this.state.local} 
		        phone = {this.state.phone} 
		        subtotal = {this.state.total} 
		        tax = {this.state.tax} 
		        invoice = {this.state.sells} />
		      } >
		      {
		        ({blob,url,loading,error})=>
		          loading ? <>loading</> : <button onClick={() => window.open(url)} >Download</button>
		      }
		    </BlobProvider>
		    {/*} 
		    <PDFViewer style={{height:"90%",width:"100%"}}>
		      <MyDocument 
		        company = {this.state.brand} 
		        agent = {this.state.agent} 
		        address = {this.state.local} 
		        phone = {this.state.phone} 
		        subtotal = {this.state.total} 
		        tax = {this.state.tax} 
		        invoice = {this.state.sells} />
		    </PDFViewer>
		    {*/}
      </div>
    );
  }
}

