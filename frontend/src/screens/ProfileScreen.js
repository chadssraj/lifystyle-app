import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if(user.seller){
        setSellerName(user.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      alert("password and confrompassword not match");
    }
    dispatch({ type: USER_UPDATE_PROFILE_RESET });
    dispatch(updateUserProfile({ userId: user._id, name, email, password  , sellerName ,sellerLogo ,sellerDescription}));
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile updated Succesfully
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="conformpassword">Conform Password</label>
              <input
                type="conformpassword"
                id="conformpassword"
                placeholder="Enter conform password"
                onChange={(e) => {
                  setConformPassword(e.target.value);
                }}
              />
            </div>
            {
              user.isSeller && (
                <>
               
               <h2>Seller</h2>
               <div>
                 <label htmlFor="sellerName">Seller Name</label>
                 <input type="text" id="sellerName" placeholder="Enter Seller Name"
                 value={sellerName}
                  onChange={(e) => {
                    setSellerName(e.target.value);
                  }}/>
               </div>
               <div>
                 <label htmlFor="sellerLogo">Seller Logo</label>
                 <input type="text" id="sellerLogo" placeholder="Enter sellerLogo "
                 value={sellerLogo}
                  onChange={(e) => {
                    setSellerLogo(e.target.value);
                  }}/>
               </div>

               <div>
                 <label htmlFor="sellerDescription">Seller Description</label>
                 <input type="text" id="sellerDescription" placeholder="Enter sellerDescription "
                 value={sellerDescription}
                  onChange={(e) => {
                    setSellerDescription(e.target.value);
                  }}/>
               </div>

                </>
              )
            }
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
