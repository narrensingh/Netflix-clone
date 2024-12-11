import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(logout());
  };

  return (
    <div className="profile">
      <div className="profile__nav">
        <img
          onClick={() => navigate('/')}
          src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
          alt="logo"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile__pic"
          className="profile__pic"
        />
      </div>
      <div className="profile__main">
        <div className="profile__edit">
          <h1>Edit Profile</h1>
        </div>
        <div className="profile__conatiner">
          <img
            className="profile__picC"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile__pic"
          />
          <div className="profile__contents">
            <p className="profile__email">{user?.email || 'email'}</p>
            <h2 className="profile__planHeader">
              Plans (Current Plan: premium)
            </h2>
            <p className="profile__renewalDate">Renewal Date: 04/03/21</p>
            <div className="profile__plans">
              <div className="profile__plan">
                <div className="profile__planDetails">
                  <p>Netflix Standard</p>
                  <p>1080p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profile__plan">
                <div className="profile__planDetails">
                  <p>Netflix Basic</p>
                  <p>480p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profile__plan">
                <div className="profile__planDetails">
                  <p>Netflix Premium</p>
                  <p>4k+HDR</p>
                </div>
                <button class="active">Current Package</button>
              </div>
            </div>
            <button className="profile__signout" onClick={signout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
