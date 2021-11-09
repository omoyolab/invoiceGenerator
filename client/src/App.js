import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    image: '',
    receiptId: 0,
    companyName: '',
    companyAddress: '',
    companyCity: '',
    CompanyState: '',
    companyZip: '',
    companyPhone: '',
    companyEmail: '',

   customerName: '',
   customerAddress: '',
   customerCity: '',
   customerState: '',
   customerZip: '',
   customerPhone: '',
   customerEmail: '',


    qty1: '',
    qty2: '',
    qty3: '',
    qty4: '',
    qty5: '',

    desc1: '',
    desc2: '',
    desc3: '',
    desc4: '',
    desc5: '',

    price1: '' ,
    price2: '',
    price3: '',
    price4: '',
    price5: '',
    disc: 0,
    tax: 0
 
   
    
  
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })



onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({image: e.target.result});
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}


  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Invoice Generator</h1>
        <p>Generate a quick invoice for your business: Enter up to 5 items</p>

        <div className="header_Information">
        <input type="file" name="image" onChange={this.onImageChange} className="filetype" id="group_image"/>
         <input type="number" placeholder="Invoice Number" name="receiptId" onChange={this.handleChange} />
        </div>
        <div className="business_Information">
        <input type="text" placeholder="Business Name" name="companyName" onChange={this.handleChange}/>
        <input type="text" placeholder="Business Address" name="companyAddress" onChange={this.handleChange}/>
        <input type="text" placeholder="Business City" name="companyCity" onChange={this.handleChange}/>
        <input type="text" placeholder="State(Example TX)" name="companyState" onChange={this.handleChange}/>
        <input type="number" placeholder="Business Zip" name="companyZip" onChange={this.handleChange}/>
        <input type="text" placeholder="Business Email" name="companyEmail" onChange={this.handleChange}/>
        <input type="number" placeholder="Business Phone" name="companyPhone" onChange={this.handleChange}/>

        </div>
        <div className="customer_Information">

        <input type="text" placeholder="Customer Name" name="customerName" onChange={this.handleChange}/>
        <input type="text" placeholder="Customer Address" name="customerAddress" onChange={this.handleChange}/>
        <input type="text" placeholder="Customer City" name="customerCity" onChange={this.handleChange}/>
        <input type="text" placeholder="State(Example TX)" name="customerState" onChange={this.handleChange}/>
        <input type="number" placeholder="Customer Zip" name="customerZip" onChange={this.handleChange}/>
        <input type="text" placeholder="Customer Email" name="customerEmail" onChange={this.handleChange}/>
        <input type="number" placeholder="Customer Phone" name="customerPhone" onChange={this.handleChange}/>
        </div>

        <div className="item_Information">
        <input type="number" placeholder="QTY" name="qty1" onChange={this.handleChange} />
        <input type="text" placeholder="Description" name="desc1" onChange={this.handleChange} />
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
        </div>

        <div className="item_Information">
        <input type="number" placeholder="QTY" name="qty2" onChange={this.handleChange} />
        <input type="text" placeholder="Description" name="desc2" onChange={this.handleChange} />
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
        </div>
        
        <div className="item_Information">
        <input type="number" placeholder="QTY" name="qty3" onChange={this.handleChange} />
        <input type="text" placeholder="Description" name="desc3" onChange={this.handleChange} />
        <input type="number" placeholder="Price 3" name="price3" onChange={this.handleChange} />
        </div>

        <div className="item_Information">
        <input type="number" placeholder="QTY" name="qty4" onChange={this.handleChange} />
        <input type="text" placeholder="Description" name="desc4" onChange={this.handleChange} />
        <input type="number" placeholder="Price 4" name="price4" onChange={this.handleChange} />
        </div>

        <div className="item_Information">
        <input type="number" placeholder="QTY" name="qty5" onChange={this.handleChange} />
        <input type="text" placeholder="Description" name="desc5" onChange={this.handleChange} />
        <input type="number" placeholder="Price 5" name="price5" onChange={this.handleChange} />
        </div>
        <div className="calculations">
        <input type="number" placeholder="Discount" name="disc" onChange={this.handleChange} />
        <input type="number" placeholder="Tax" name="tax" onChange={this.handleChange} />
        </div>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>    
      </div>
    );
  }
}

export default App;