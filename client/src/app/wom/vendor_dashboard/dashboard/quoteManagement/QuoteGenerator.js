import { Container } from '@mui/material';
import React, { useState } from 'react';

const QuoteGenerator = () => {
  const [quoteData, setQuoteData] = useState({
    customerName: '',
    quoteNumber: '',
    items: [{ productname: '', description: '', quantity: 0, price: 0 }],
  });

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const items = [...quoteData.items];
    items[index][name] = value;
    setQuoteData({ ...quoteData, items });
  };

  const handleAddItem = () => {
    setQuoteData({
      ...quoteData,
      items: [...quoteData.items, { productname: '', description: '', quantity: 0, price: 0 }],
    });
  };

  const handleRemoveItem = (index) => {
    const items = [...quoteData.items];
    items.splice(index, 1);
    setQuoteData({ ...quoteData, items });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Quote:', quoteData);
    // Here you can send the quoteData to your backend for further processing
  };

  return (
    <main id='main' className='main'>
      <Container>
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: "bold", marginBottom: '30px' }}>Create Quote</h2>
          <form onSubmit={handleSubmit} >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <div >
                <label htmlFor="customerName" style={{ marginRight: '30px' }}>Customer Name:</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={quoteData.customerName}
                  onChange={(e) => setQuoteData({ ...quoteData, customerName: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="quoteNumber">Quote Number:</label>
                <input
                  style={{ marginLeft: '30px' }}
                  type="text"
                  id="quoteNumber"
                  name="quoteNumber"
                  value={quoteData.quoteNumber}
                  onChange={(e) => setQuoteData({ ...quoteData, quoteNumber: e.target.value })}
                />
              </div>

            </div>
            <table >
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {quoteData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        name="productname"
                        value={item.productname}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={item.description}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="price"
                        value={item.price}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <button style={{ color: "#fff" }} type="button" onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>

              <button style={{ color: "#fff", display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '25px' }} type="button" onClick={handleAddItem}>
                Add Item
              </button>

              <button style={{ color: "#fff" }} type="submit">Submit Quote</button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default QuoteGenerator;
