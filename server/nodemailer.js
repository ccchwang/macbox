'use strict'
const nodemailer = require('nodemailer');
const app = require('APP'), {env} = app

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: 'macbox.orders@gmail.com',
        pass: 'macboxHerokuapp2'
    }
});

// setup email data with unicode symbols
const mailOptions = (recipient, body, plainBody) => {
  return {
    from: '"Macbox ✨" <orders@macbox.com>', // sender address
    to: recipient, // list of receivers
    subject: 'Order Confirmation ✅', // Subject line
    text: plainBody, // plain text body
    html: body // html body
  }
};

const formatMailBody = (orderId, total, listItems, shipping, address, shippingCost) => {
  return `
    <h3><b>Ordered Date:</b> ${new Date().toLocaleString("en-us", {year: 'numeric', month: 'long', day: 'numeric'})}</h3>
    <h2><b>Order No:</b> #${orderId}</h2>
    <h3><b>Total:</b> $${total.toFixed(2)}</h3>
    <br /><br />
    <b>Items:</b>
    <ul>
      ${listItems}
    </ul>
    <br/><br />
    <b>Subtotal:</b> $${(total - shippingCost).toFixed(2)}
    <br/><br />
    <b>Shipping Cost:</b> $${shippingCost.toFixed(2)}
    <br/><br />
    <b>Shipping Method:</b> ${shipping}
    <br/><br />
    <b>Shipping Address:</b> ${address}
    <br/><br /><br /><br />
    <center><i>Macbox is a demo e-commerce site by Chloe Hwang.</i>
    <br /><br />
    <i>Visit at macbox.herokuapp.com | github.com/chloehwang/macbox</i></center>
  `
}

const formatPlainMailBody = (orderId, total, listItems, shipping, address, shippingCost) => {
  return `
    Ordered Date: ${new Date().toLocaleString("en-us", {year: 'numeric', month: 'long', day: 'numeric'})}
    Order No: #${orderId}
    Total: $${total.toFixed(2)}</h3>
    Items:
      ${listItems}
    Subtotal: $${(total - shippingCost).toFixed(2)}</h3>
    Shipping Cost: $${shippingCost.toFixed(2)}</h3>
    Shipping Method: ${shipping}
    Shipping Address: ${address}

    Macbox is a demo e-commerce site by Chloe Hwang.
    Visit at macbox.herokuapp.com | github.com/chloehwang/macbox
  `
}

const formatListItems = (items) => {
  return items.reduce((acc, item) =>
    acc += `<li>Product Id: #${item.product_id} | Quantity: ${item.quantity} | Ordered Price: $${item.orderedPrice.toFixed(2)}</li>`
    , "")
}

const createEmail = (email, orderId, total, listItems, shipping, address, shippingCost) => {
  const items = formatListItems(listItems);
  const body = formatMailBody(orderId, total, items, shipping, address, shippingCost);
  const plainBody = formatPlainMailBody(orderId, total, items, shipping, address, shippingCost);

  return mailOptions(email, body, plainBody)
}

module.exports = {transporter, createEmail}

