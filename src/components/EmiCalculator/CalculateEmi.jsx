import styles from "./CalculateEmi.module.css";
import { useState, useEffect, useContext } from "react";
import PieChart from "../LoanCalculator/PieChart";
import { DataContext } from "../Contexts/DataContext";

const CalculateEmi = () => {
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({
      type: "SET_FILTERED_CAR_DATA",
      payload: [],
    });
  }, [dispatch]);

  const [data, setData] = useState({
    amount: 1000000,
    years: 0,
    interest: 0,
    emi: 0,
    totalInterest: 0,
  });

  const [showForm, setShowForm] = useState(true);

  function calculateEMI(principal, annualInterestRate, tenureYears) {
    // Convert annual interest rate to monthly and percentage to decimal
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // Convert loan tenure to months
    const tenureMonths = tenureYears * 12;

    // Calculate EMI using the formula
    const calculatedEmi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

    const totalInterest = calculatedEmi * tenureMonths - principal;

    setData((prevData) => ({
      ...prevData,
      emi: calculatedEmi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    }));

    return calculatedEmi.toFixed(2);
  }

  const handleCalculateClick = (e) => {
    e.preventDefault();
    calculateEMI(data.amount, data.interest, data.years);
    setShowForm(false);
  };

  const handleRefreshClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className={styles.calculatorContainer}>
        {showForm ? (
          <section className={styles.form_style}>
            <form>
              <div>
                <div>
                  <label htmlFor="">Principle (&#x20B9;)</label>
                  <input
                    value={data.amount}
                    onChange={(event) =>
                      setData({ ...data, amount: event.target.value })
                    }
                    className={styles.input}
                    type="tel"
                    placeholder="Loan amount"
                  />
                </div>
                <div>
                  <label htmlFor="">Tenure (Years)</label>
                  <input
                    value={data.years}
                    onChange={(event) =>
                      setData({ ...data, years: event.target.value })
                    }
                    className={styles.input}
                    type="tel"
                    placeholder="Years"
                  />
                </div>
                <div>
                  <label htmlFor="">Interest (%)</label>
                  <input
                    value={data.interest}
                    onChange={(event) =>
                      setData({ ...data, interest: event.target.value })
                    }
                    className={styles.input}
                    type="tel"
                    placeholder="Interest %"
                  />
                </div>
                <div>
                  <button
                    onClick={handleCalculateClick}
                    className={`btn mt-30 ${styles.button}`}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </form>
          </section>
        ) : (
          <section className={`${styles.section4} ${styles.ow}`}>
            <PieChart chartData={data} />
            <button
              onClick={handleRefreshClick}
              className={`btn mt-30 ${styles.button}`}
            >
              Refresh
            </button>
          </section>
        )}
      </div>
    </>
  );
};

export default CalculateEmi;
