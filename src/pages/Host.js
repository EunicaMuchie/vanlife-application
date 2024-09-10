import React, { useState } from 'react';
import './Host.css'; // Import the CSS file
import image54 from '../assets/images/image_54.png';
import image55 from '../assets/images/image_55.png';
import image57 from '../assets/images/image_57.png';
import Graph from "../Components/Graph";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showVanPopup, setShowVanPopup] = useState(false);
  const [vanData, setVanData] = useState({ image: '', name: '', price: '', description: '', features: [], contact: '' });
  const [activePopupTab, setActivePopupTab] = useState('description'); // Added state for popup tabs

  const openVanPopup = (vanImage, vanName, vanPrice) => {
    setVanData({ image: vanImage, name: vanName, price: vanPrice, description: 'Description text here', features: ['Feature 1', 'Feature 2'], contact: 'Contact info here' });
    setShowVanPopup(true);
  };

  const closeVanPopup = () => {
    setShowVanPopup(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav>
          <ul>
            <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</li>
            <li className={activeTab === 'income' ? 'active' : ''} onClick={() => setActiveTab('income')}>Income</li>
            <li className={activeTab === 'vans' ? 'active' : ''} onClick={() => setActiveTab('vans')}>Vans</li>
            <li className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</li>
          </ul>
        </nav>
      </header>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <section className="dashboard-welcome">
          <div className="income">
            <h1 id='HONE'>Welcome!</h1>
            <p>Income last <span className="highlight">30 days</span> <a href="#details" id='details'>Details</a></p>
            <p className="income-amount">$2,260</p>
          </div>
          <div className="review-score">
            <h4>Review score <span className="star">★</span> 5.0 <span id='five'>/5</span> <a href="#details" id='detail'>Details</a></h4>
          </div>
          <section className="vans-list">
            <h2>Your listed vans <span id='view-all'> View all</span></h2>
            <div className="van" onClick={() => openVanPopup(image54, "Modest Explorer", "$60/day")}>
              <img src={image54} alt="Modest Explorer" />
              <div className='four'>
                <p className='Van-Titles'>Modest Explorer</p>
                <p id='p-one'>$60/day</p>
              </div>
              <button id='edit'>Edit</button>
            </div>
            <div className="van" onClick={() => openVanPopup(image55, "Beach Bum", "$80/day")}>
              <img src={image55} alt="Beach Bum" />
              <div className='four'>
                <p className='Van-Titles'>Beach Bum</p>
                <p id='p-one'>$80/day</p>
              </div>
              <button id='edit'><span className='colorless'>.......</span>Edit</button>
            </div>
            <div className="van" onClick={() => openVanPopup(image57, "Green Wonder", "$70/day")}>
              <img src={image57} alt="Green Wonder" />
              <div className='four'>
                <p className='Van-Titles'>Green Wonder</p>
                <p id='p-one'>$70/day</p>
              </div>
              <button id='edit'>Edit</button>
            </div>
          </section>
        </section>
      )}

      {/* Income Tab */}
      {activeTab === 'income' && (
        <section className="income">
          <div className="first-three-titles">
            <h2>Income </h2>
            <p className='para'> <span>Last</span><span id='last'>  30 Days</span></p>
            <div className='Dollar'> <h1 className='money'>$2,260</h1></div>
          </div>
          {/* Imported graph */}
          <Graph />
          {/* Last section */}
          <div className="first-part">
            <h4>Your transactions (3)  </h4>
            <p id="your-transaction-30days"><span className='day'>Last 30 Days</span></p>
          </div>
          <div className="inner-div">
            <h3>$720 <span id="zero"></span></h3>
            <p className="txxt">01/12/22</p>
          </div>
          <div className="inner-div">
            <h3>$560</h3>
            <p className="txxt">10/11/22</p>
          </div>
          <div className="inner-div">
            <h3>$890</h3>
            <p className="txxt">23/11/22</p>
          </div>
        </section>
      )}

      {/* Vans Tab */}
      {activeTab === 'vans' && (
        <section className="vans-list">
          <h2>Your listed vans <span id='view-all'> View all</span></h2>
          <div className="van" onClick={() => openVanPopup(image54, "Modest Explorer", "$60/day")}>
            <img src={image54} alt="Modest Explorer" />
            <div className='four'>
              <p className='Van-Titles'>Modest Explorer</p>
              <p id='p-one'>$60/day</p>
            </div>
          </div>
          <div className="van" onClick={() => openVanPopup(image55, "Beach Bum", "$80/day")}>
            <img src={image55} alt="Beach Bum" />
            <div className='four'>
              <p className='Van-Titles'>Beach Bum</p>
              <p id='p-one'>$80/day</p>
            </div>
          </div>
          <div className="van" onClick={() => openVanPopup(image57, "Green Wonder", "$70/day")}>
            <img src={image57} alt="Green Wonder" />
            <div className='four'>
              <p className='Van-Titles'>Green Wonder</p>
              <p id='p-one'>$70/day</p>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <section>

          <div id="sport4">
            <div className="reviews-container">
              <h2 className="htwo">
                Your reviews <span className="day">last</span>{" "}
                <span className="days"> 30 days</span>
              </h2>
              <div className="overall-rating">
                <span className="rating-number">5.0 <span id='starrs'> ★</span>  <span className="total-reviews">overall rating</span></span>


              </div>

              <div className="rating-bar">
                <div className="rating-bar-line">
                  <span id="rstars">5 stars</span>
                  <div className="bar-container">
                    <div className="bar">
                      <div className="fill" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <span id="lines">100%</span>
                </div>
                <div className="rating-bar-line">
                  <span id="rstars">4 stars</span>
                  <div className="bar-container">
                    <div className="bar">
                      <div className="fill" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <span id="lines">0%</span>
                </div>
                <div className="rating-bar-line">
                  <span id="rstars">3 stars</span>
                  <div className="bar-container">
                    <div className="bar">
                      <div className="fill" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <span id="lines">0%</span>
                </div>
                <div className="rating-bar-line">
                  <span id="rstars">2 stars</span>
                  <div className="bar-container">
                    <div className="bar">
                      <div className="fill" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <span id="lines">0%</span>
                </div>
                <div className="rating-bar-line">
                  <span id="rstars">1 star</span>
                  <div className="bar-container">
                    <div className="bar">
                      <div className="fill" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <span id="lines">0%</span>
                </div>
              </div>

              <div className="reviews-list">
                <div className="review-item">
                  <h2>Reviews(2)</h2>
                  <div className="review-stars">★★★★★</div>
                  <div className="review-header">
                    <span className="reviewer-name">
                      Elliot{" "}
                      <span className="review-date">December 1, 2022</span>
                    </span>
                  </div>

                  <p className="review-text">
                    The beach bum is such an awesome van! Such a comfortable
                    trip. We had it for 2 weeks and there was not a single
                    issue. Super clean when we picked it up and the host is very
                    comfortable and understanding. Highly recommend!
                  </p>
                </div>
                <div className="review-item">
                  <div className="review-stars stars">★★★★★</div>
                  <div className="review-header">
                    <span className="reviewer-name">
                      Sandy{" "}
                      <span className="review-date">November 23, 2022</span>
                    </span>
                  </div>
                  <p className="review-text par">
                    This is our third time using the Modest Explorer for our
                    travels and we love it! No complaints, absolutely perfect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Van Popup */}
      {showVanPopup && (
        <div className="van-popup-overlay" onClick={closeVanPopup}>
          <div className="van-popup" onClick={(e) => e.stopPropagation()}>
            <div className="van-popup-header">
              <span className="back-to-vans" onClick={closeVanPopup}>← Back to Vans</span>
            </div>
            <div className='divSplit'>
              <img src={vanData.image} alt={vanData.name} className="popup-van-image" />
              <div className="van-details">
                <button className="van-simple-btn">Simple</button>
                <p className="van-name">{vanData.name}</p>
                <p className="van-price">{vanData.price}</p>
                {/* Popup Tabs Navigation */}
              </div>
            </div>
            <div className="van-popup-content">
              <div className="popup-tabs">
                <span
                  className={`popup-tab ${activePopupTab === 'details' ? 'active' : ''}`}
                  onClick={() => setActivePopupTab('details')}
                >
                  Details
                </span>
                <span
                  className={`popup-tab ${activePopupTab === 'pricing' ? 'active' : ''}`}
                  onClick={() => setActivePopupTab('pricing')}
                >
                  Pricing
                </span>
                <span
                  className={`popup-tab ${activePopupTab === 'photos' ? 'active' : ''}`}
                  onClick={() => setActivePopupTab('photos')}
                >
                  Photos
                </span>
              </div>

              {/* Popup Tabs Content */}
              <div className="popup-tab-content">

                {activePopupTab === 'details' && (

                  <div className="popup-tab-details">

                    <p><strong>Name:</strong> {vanData.name}</p>
                    <p><strong>Category:</strong> Simple {vanData.category}</p>
                    <p><strong>Description:</strong> The Modest Explorer is a van designed to get you out of the house and into nature.
                      This beauty is equipped with solar panels, a composting or even longer!</p>
                    <p><strong>Visibility:</strong> Public{vanData.visibility}</p>
                  </div>

                )}
                {activePopupTab === 'pricing' && (
                  <div className="popup-tab-pricing">
                    <p>$60.00 <span>per day</span></p>
                  </div>
                )}
                {activePopupTab === 'photos' && (
                  <div className="popup-tab-photos">
                    <img src="../src/assets/images/image_54.png" alt="Van" />
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;