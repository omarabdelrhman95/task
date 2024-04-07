import React from "react";

const Comparing = () => {
  const products = [
    {
      title:
        "شاشة حماية للحفاظ على الخصوصية (لموبايل ايفون 12 برو ماكس،6.7 بوصة)، شفاف",
      yourPrice: "$0.00",
      internetPrice: "Not found in DB",
    },
    {
      title:
        "شاشة حماية للحفاظ على الخصوصية (لموبايل ايفون 12 برو ماكس،6.7 بوصة)، شفاف",
      yourPrice: "$0.00",
      internetPrice: "Not found in DB",
    },
    {
      title:
        "شاشة حماية للحفاظ على الخصوصية (لموبايل ايفون 12 برو ماكس،6.7 بوصة)، شفاف",
      yourPrice: "$0.00",
      internetPrice: "Not found in DB",
    },
  ];

  return (
    <main className="main__page">
      <h1 className="page__title">Comparing</h1>
      <table className="main__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>your Price</th>
            <th>internet Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr key={i}>
              <td>{product?.title}</td>
              <td>{product?.yourPrice}</td>
              <td>{product?.internetPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Comparing;
