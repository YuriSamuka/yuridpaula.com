const sendEmail = require('./emailSender');

const sendContactForm = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  }
  try {
    const body = JSON.parse(event.body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'All fields are required.' }),
      };
    }

    await sendEmail(name, email, message);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Message sent successfully.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({error }),
    };
  }
};

module.exports = {
  sendContactForm,
};
