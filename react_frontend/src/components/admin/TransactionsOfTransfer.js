import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfTransfer.css";
const TransactionsOfTransfer = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/admin/transactionsoftransfer");
  }, [navigate]);

  const onIncomeButtonClick = useCallback(() => {
    navigate("/admin/transactionsofincome");
  }, [navigate]);

  const onAllocationButtonClick = useCallback(() => {
    navigate("/admin/transactionsofallocation");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-transfer">
      <div className="transactions-transfer-containe">
        <div className="buttonssearchtable">
          <div className="buttonssearch">
            <div className="transaction-types-buttons">
              <button className="payout-button" onClick={onPayoutButtonClick}>
                <div className="payout">Payout</div>
              </button>
              <button className="income-button" onClick={onIncomeButtonClick}>
                <div className="payout">Income</div>
              </button>
              <button
                className="allocation-button"
                onClick={onAllocationButtonClick}
              >
                <div className="payout">Allocation</div>
              </button>
              <button className="transfer-button">
                <div className="transfer">Transfer</div>
              </button>
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container">
            <div className="t-head">
              <div className="transaction-id-title">
                <div className="transaction-id-tit">Transaction ID</div>
              </div>
              <div className="related-id-title">
                <div className="transaction-id-tit">Related ID</div>
              </div>
              <div className="full-name-title">
                <div className="transaction-id-tit">Full Name</div>
              </div>
              <div className="article-name-title">
                <div className="transaction-id-tit">Article Name</div>
              </div>
              <div className="type-title">
                <div className="transaction-id-tit">Type</div>
              </div>
              <div className="payment-method-title">
                <div className="transaction-id-tit">Payment methode</div>
              </div>
              <div className="creation-date-title">
                <div className="transaction-id-tit">Date</div>
              </div>
              <div className="amount-title">
                <div className="transaction-id-tit">Amount</div>
              </div>
            </div>
            <div className="transactions-listing">
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">2</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title">
                  <div className="transaction-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Transfer</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container">
          <div className="nbr-of-shows-transactions-deta">
            <div className="transaction-id-tit">Showing</div>
            <div className="transaction-id-tit">6</div>
            <div className="transaction-id-tit">from</div>
            <div className="transaction-id-tit">160</div>
          </div>
          <div className="change-page-buttons">
            <button className="btnprevious" onClick={onBtnPreviousClick}>
              <div className="previous-icone">
                <img className="back-ic-icon" alt="" src="/backic.svg" />
                <img className="back-ic-icon" alt="" src="/backic.svg" />
              </div>
              <div className="previous">Previous</div>
            </button>
            <button className="btnnext" onClick={onBtnNextClick}>
              <div className="previous">Next</div>
              <div className="previous-icone">
                <img className="next-ic-icon" alt="" src="/nextic.svg" />
                <img className="next-ic-icon" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfTransfer;
