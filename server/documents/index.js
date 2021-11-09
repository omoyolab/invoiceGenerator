module.exports = ({  receiptId,
    image,
   companyName,
   companyAddress,
   companyCity,
   companyState,
   companyZip,
   companyPhone,
   companyEmail,

  customerName,
  customerAddress,
  customerCity,
  customerState,
  customerZip,
  customerPhone,
  customerEmail,


   qty1,
   qty2,
   qty3,
   qty4,
   qty5,

   desc1,
   desc2,
   desc3,
   desc4,
   desc5,

   price1,
   price2,
   price3,
   price4,
   price5,
   disc,
   tax


}) => {
    const today = new Date();
    let lt, lt2, lt3, lt4, lt5, subt, gtotal
    
return `
<!doctype html>
<html>
   <head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    <style>
    *{
        font-family: 'Assistant', sans-serif;
    }
    .wrapper{
        border: 1px solid black;
        padding:45px;
    }
    img {
        max-height: 850px;
        max-width: 200px
    }

    .invoice_header {
        display: inline;
        float: right;
        text-transform: uppercase;
        padding-right: 35px;
 
    }
    .em{
        font-size: 12px;
    }

    .addresses {
        clear:both;
        line-height: 3px;
    }

    .Company_info {
        padding-bottom: 5px;
    }

    .Customer_info {
        padding-left: 75px;

    }

    .tablestyles td,
    .tablestyles th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .tablestyles th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }

    .tablestyles {
        border-collapse: collapse;
        width: 90%;
        margin: 0 auto;
    }

    .tablestyles tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    maintable {
        clear: both;
    }

    .unit {
        width: 10%
    }

    .line {
        width: 10%;
    }

    .desc {
        width: 70%;
    }

    .qty {
        width: 10%
    }

    .calculations {
        line-height: 5px;
        text-transform: capitalize;
        margin-left: 60%;

    }

    .thanks {
        text-align: center;
        color:red;
    }
    
    .thanksb{
        text-align: center;
        margin-top: 5%;
        color:blue;
    }

    </style>
</head>

<body>
   
<div class="wrapper">
        <header>
            <img src="${image}">
            <div class="invoice_header">
                <h1>Invoice</h1>
                <h5>Invoice #: ${receiptId} </h5>
                <h5>Date:  ${`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</h5>
            </div>
        </header>
        <hr>
        <div class="addresses">
            <div class="Company_info">
                <h4>${companyName}</h4>
                <p> ${`${companyAddress}</p>
                <p>${companyCity}, ${companyState} ${companyZip}`}</p>
                <p class="em">Phone: ${companyPhone}</p>
                <p class="em">Email: ${companyEmail}</p>
            </div>
            <h4>TO:</h4>
            <div class="Customer_info">
                <h4>${customerName}</h4>
                <p>  ${`${customerAddress}</p>
                <p> ${customerCity}, ${customerState} ${customerZip}`}</p>
                <p class="em">Phone: ${customerPhone}</p>
                <p class="em">Email: ${customerEmail}</p>
            </div>
        </div>

        <hr>
        <div class="table2">
            <table class="secondTable tablestyles">
                <tr>
                    <th class="qty">QTY</th>
                    <th class="desc">DESCRIPTION</th>
                    <th class="unit">UNIT PRICE</th>
                    <th class="line">LINE TOTAL</th>

                </tr>
                <tr>
                    <td>${qty1}</td>
                    <td>${desc1}</td>
                    <td>$${price1}</td>
                    <td>$${lt = parseFloat(qty1) * parseFloat(price1)}</td>
                </tr>
                <tr>
                    <td>${qty2}</td>
                    <td>${desc2}</td>
                    <td>${`${price2 ? `$${price2}` :''}`}</td>
                    <td>${`${qty2 > 0 ? `$${lt2 = parseFloat(qty2) * parseFloat(price2)}`: ''}`}</td>
                </tr>
                <tr>
                    <td>${qty3}</td>
                    <td>${desc3}</td>
                    <td>${`${price3 ? `$${price3}`:''}`}</td>
                    <td>${`${qty3 > 0 ? `$${lt3 = parseFloat(qty3) * parseFloat(price3)}`: ''}`}</td>
                </tr>
                <tr>
                    <td>${qty4}</td>
                    <td>${desc4}</td>
                    <td>${`${price4 ? `$${price4}`:''}`}</td>
                    <td>${`${qty4 > 0 ? `$${lt4 = parseFloat(qty4) * parseFloat(price4)}`: ''}`}</td>
                </tr>
                <tr>
                    <td>${qty5}</td>
                    <td>${desc5}</td>
                    <td>${`${price5 ? `$${price5}` :''}`}</td>
                    <td>${`${qty5 > 0 ? `$${lt5 = parseFloat(qty5) * parseFloat(price5)}`: ''}`}</td>
                </tr>
            </table>
             <p class="thanks">Due upon receipt</p>
            <div class="calculations">
                <h4>SubTotal: $${subt =(lt + lt2 +lt3 + lt4 + lt5)}</h4>
                <h4>Discount:$${disc}</h4>
                <h4>Tax:$${tax}</h4>
                <h4>Total:$${gtotal = (parseFloat(subt) + parseFloat(tax) - parseFloat(disc))}</h4>
            </div>
                <p class="thanksb">Thank You for your Business!</p>

        </div>
</div>

</body>
</html>
    `;
};