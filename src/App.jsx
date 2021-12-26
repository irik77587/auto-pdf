import React, {Component, createRef} from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
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
    this.brand = createRef();
    this.agent = createRef();
  }
  update() {
    this.setState({
      brand: this.brand.current.value,
      agent: this.agent.current.value
    });
  }
  render() {
	  return (
	  <div style={{height:"100vh"}}>
	    <input type="text" placeholder="Company Name" ref={this.brand} />
	    <input type="text" placeholder="Owner/Agent" ref={this.agent} />
	    <button onClick={this.update.bind(this)}>Update</button>
	    {/*}
		  <PDFDownloadLink document={<MyDocument />} fileName="invoice.pdf">
		    {({blob,url,loading,error})=>
		      loading ? 'loading' : 'Download'
		    }
		  </PDFDownloadLink>
		  {*/}
		  <PDFViewer style={{height:"90%",width:"100%"}}>
		    <MyDocument company = {this.state.brand} agent = {this.state.agent} address = {this.state.local} phone = {this.state.phone} subtotal = {this.state.total} tax = {this.state.tax} invoice = {this.state.sells} />
		  </PDFViewer>
    </div>
	  );
  }
}
