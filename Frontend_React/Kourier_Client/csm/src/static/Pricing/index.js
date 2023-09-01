import "./pricing.css";
const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="heading text-dark">Pricing Details</div>
        <div className="">
          <h3 className="text-dark">Current Postal Rates in India</h3>
          <br></br>
          <p className="text-dark">
          Kourier speed Post is a guaranteed and fast mail service for Letters,
            Parcels and packets deliverable in a specified time, between
            specified stations in India. (Rates in INR)
          </p>
        </div>
      </div>

      <div className="row">
        <div className="container bg-body rounded">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Weight</th>
                <th scope="col">Local Area</th>
                <th scope="col">Upto 200 Kms.</th>
                <th scope="col">201 - 1000 Kms.</th>
                <th scope="col">1001 - 2000 Kms.</th>
                <th scope="col">Above 2000 Kms.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to 50 Gms</td>
                <td>18.00</td>
                <td>41.00</td>
                <td>41.00</td>
                <td>41.00</td>
                <td>41.00</td>
              </tr>
              <tr>
                <td>51 Grams to 200 Grams</td>
                <td>30.00</td>
                <td>41.00</td>
                <td>47.00</td>
                <td>71.00</td>
                <td>83.00</td>
              </tr>
              <tr>
                <td>201 Grams to 500 Grams</td>
                <td>35.00</td>
                <td>59.00</td>
                <td>71.00</td>
                <td>94.00</td>
                <td>106.00</td>
              </tr>
              <tr>
                <td>501 Grams to 1000 Gram</td>
                <td>47.00</td>
                <td>77.00</td>
                <td>106.00</td>
                <td>142.00</td>
                <td>165.00</td>
              </tr>
              <tr>
                <td>1001 Grams to 1500 Grams</td>
                <td>59.00</td>
                <td>94.00</td>
                <td>142.00</td>
                <td>189.00</td>
                <td>224.00</td>
              </tr>
              <tr>
                <td>1501 Grams to 2000 Grams</td>
                <td>71.00</td>
                <td>112.00</td>
                <td>177.00</td>
                <td>236.00</td>
                <td>283.00</td>
              </tr>
              <tr>
                <td>2001 Grams to 2500 Grams</td>
                <td>83.00</td>
                <td>130.00</td>
                <td>212.00</td>
                <td>283.00</td>
                <td>342.00</td>
              </tr>
              <tr>
                <td>2501 Grams to 3000 Grams</td>
                <td>94.00</td>
                <td>148.00</td>
                <td>248.00</td>
                <td>330.00</td>
                <td>401.00</td>
              </tr>
              <tr>
                <td>3001 Grams to 3500 Grams</td>
                <td>106.00</td>
                <td>165.00</td>
                <td>283.00</td>
                <td>378.00</td>
                <td>460.00</td>
              </tr>
              <tr>
                <td>3501 Grams to 4000 Grams</td>
                <td>118.00</td>
                <td>183.00</td>
                <td>319.00</td>
                <td>425.00</td>
                <td>519.00</td>
              </tr>
              <tr>
                <td>4001 Grams to 4500 Grams</td>
                <td>130.00</td>
                <td>201.00</td>
                <td>354.00</td>
                <td>472.00</td>
                <td>578.00</td>
              </tr>
              <tr>
                <td>4501 Grams to 5000 Grams</td>
                <td>142.00</td>
                <td>218.00</td>
                <td>389.00</td>
                <td>519.00</td>
                <td>637.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default Pricing;
