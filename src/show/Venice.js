import { Image, Container, Col, Row } from 'react-bootstrap'
// import { useEffect, useRef } from 'react';

export default function Venice() {
  document.title = "Melissa Gerhold - Venice";

    // const paypalRef = useRef();

    // useEffect(() => {
    //   window.paypal.Buttons({
    //       createOrder: function (data, actions) {
    //         return actions.order.create({
    //           purchase_units: [{"description":"PLACES SHOW - Venice Watercolor","amount":{"currency_code":"USD","value":175}}]
    //         });
    //       },
    //       onApprove: function (data, actions) {
    //         return actions.order.capture().then(function (orderData) {

    //         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

    //         const element = document.getElementById('paypal-button-container');
    //         element.innerHTML = '';
    //         element.innerHTML = '<h3>Thank you for your payment!</h3>';

    //         });
    //       },
    //     })
    //     .render(paypalRef.current);
    // }, []);
  
  return (
    <>
    <Container className='pt-3'>
<Row>
  <Col>
<Image fluid src={require('../show/img/2Venice900.jpg')} />
  
  </Col>
  <Col md={6}>
  
    <p className='fw-bold fs-1'>Venice</p>
    <p className='lh-1 fw-bold'>May 2021</p>
    <p>5” x 7.5”</p>
    <p>Watercolor and Ink on Paper</p>
    <h5>Melissa Gerhold</h5>

<h2>$175</h2>
    {/* <p>For purchase during show</p> */}
    
    {/* <div id='paypal-button-container' className="paypal" ref={paypalRef}></div> */}

    {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_xclick" />
    <input type="hidden" name="business" value="mgerhold@gmail.com" />
    <input type="hidden" name="lc" value="US" />
    <input type="hidden" name="item_name" value="Venice - PLACES SHOW 2022" />
    <input type="hidden" name="amount" value="175.00" />
    <input type="hidden" name="currency_code" value="USD" />
<input type="hidden" name="button_subtype" value="services" />
<input type="hidden" name="tax_rate" value="0.000" />
<input type="hidden" name="shipping" value="0.00" />
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />

    </form>
    <p>*Purchased art available for pickup after show</p> */}



  </Col>
</Row>
    
    
    </Container>
    </>
  )
}
