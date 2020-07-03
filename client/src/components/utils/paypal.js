import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends Component {

    render() {

        const onSuccess = (payment) => {
// console.log(JSON.stringify(payment));

this.props.onSuccess(payment);


 // address:
        // city: "San Jose"
        // country_code: "US"
        // line1: "1 Main St"
        // postal_code: "95131"
        // recipient_name: "John Doe"
        // state: "CA"
        // __proto__: Object
        // cancelled: false
        // email: "sb-0430fs2448227@personal.example.com"
        // paid: true
        // payerID: "GVCUPC4CLELEU"
        // paymentID: "PAYID-L345G3A2S38892465151583R"
        // paymentToken: "EC-36283471UU9531223"
        // returnUrl: "https://www.paypal.com/checkoutnow/error?paymentI

        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data));

        }

        const onError = (err) => {
            console.log(JSON.stringify(err));

        }

        let env = 'sandbox';
        let currency='USD';
        let total=this.props.toPay;


        const client = {
            sandbox: 'Af22_9LRWv-fivF3wsKbPIlwLHAWX1NaY3C8QYmOE9jN3lo9EC5m5c7-xfynHvXCF4u6UmfikxGAl9V-',
            production:''
        }

       


        return (
            <div>
                <PaypalExpressBtn 
                  env={env}
                  client={client}
                  currency={currency}
                  total={total}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel}
                  style={{
                      size:'large',
                      color:'blue',
                      shape:'rect',
                      label:'checkout'
                  }}
                />
            </div>
        )
    }
}
